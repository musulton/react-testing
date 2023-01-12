import { actionIds } from './actionIds';

export const fetchMembersRequest = () => ({
  type: actionIds.FETCH_MEMBERS_REQUEST,
  payload: null,
});


export const fetchMembersSuccess = (members) => ({
  type: actionIds.FETCH_MEMBERS_SUCCESS,
  payload: members,
});

export const fetchMembersError = (error) => ({
  type: actionIds.FETCH_MEMBERS_ERROR,
  payload: error,
});
