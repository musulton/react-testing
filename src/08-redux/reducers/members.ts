import { actionIds } from '../actions/actionIds';

const createInitialState = {
  members: [],
  serverError: null,
};

export const membersReducer = (state = createInitialState, action) => {
  switch (action.type) {
    case actionIds.FETCH_MEMBERS_SUCCESS:
      return {
        ...state,
        members: action.payload,
        serverError: null
      };
    case actionIds.FETCH_MEMBERS_ERROR:
      return {
        ...state,
        serverError: action.payload
      };
    default:
      return state;
  }
};
