import { actionIds } from '../actions/actionIds';
import { membersReducer } from './members';

describe('members reducer tests', () => {
  it('should return the expected state when initialized with undefined initial state', () => {
    // Arrange
    const action = {
      type: 'foo',
      payload: null,
    };

    const initialState = {
      members: [],
      serverError: null,
    };

    // Act
    const result = membersReducer(undefined, action);

    // Assert
    expect(result).toEqual(initialState);
  });

  it('should return the expected state when action type is FETCH_MEMBERS_SUCCESS', () => {
    // Arrange
    const members = [{ id: 1, login: 'test name', avatar_url: 'test avatar' }];
    const action = {
      type: actionIds.FETCH_MEMBERS_SUCCESS,
      payload: members,
    };
    const initialState = {
      members: [],
      serverError: 'test error',
    };

    // Act
    const result = membersReducer(initialState, action);

    // Assert
    expect(result.members).toBe(members);
    expect(result.serverError).toBeNull();
  });

  it('should return the expected state when action type is FETCH_MEMBERS_ERROR', () => {
    // Arrange
    const action = {
      type: actionIds.FETCH_MEMBERS_ERROR,
      payload: 'test error',
    };
    const initialState = {
      members: [],
      serverError: null,
    };

    // Act
    const result = membersReducer(initialState, action);

    // Assert
    expect(result.members).toBe(initialState.members);
    expect(result.serverError).toBe('test error');
  });

  it('should return the current state if action type is not known', () => {
    // Arrange
    const action = {
      type: 'foo',
      payload: null,
    };
    const initialState = {
      members: [],
      serverError: null,
    };

    // Act
    const result = membersReducer(initialState, action);

    // Assert
    expect(result).toBe(initialState);
  });
});
