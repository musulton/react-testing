import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { membersReducer } from './reducers/members';
import * as actions from './actions/fetchMembers';
import { MemberListPageContainer } from './Container';

const renderWithRedux = (
    component,
    { initialState = {}, reducer, store = createStore(reducer, initialState) }
) => ({
    ...render(<Provider store={store}>{component}</Provider>),
    store,
});

describe('pageContainer specs', () => {
    test('should render table when it feeds initial state', () => {
        // Arrange
        const initialState = {
            members: {
                members: [
                    { name: "John" }
                ],
                serverError: null,
            },
        };

        // Act
        renderWithRedux(<MemberListPageContainer />, {
            initialState,
            reducer: membersReducer,
        });

        expect(screen.getAllByRole("heading")).toHaveLength(1);
    });

    test('should render error when error server state has value', () => {
        // Arrange
        const initialState = {
            members: {
                members: [],
                serverError: "has-error",
            },
        };

        // Act
        renderWithRedux(<MemberListPageContainer />, {
            initialState,
            reducer: membersReducer,
        });

        expect(screen.getByText("Error...")).toBeInTheDocument();
    });

    it('should call fetchMembersRequest when it mounts the component', () => {
        // Arrange
        const initialState = {
            members: {
                members: [],
                serverError: null,
            },
        };

        const fetchMembersRequest = jest.spyOn(actions, 'fetchMembersRequest');

        // Act
        renderWithRedux(<MemberListPageContainer />, {
            initialState,
            reducer: membersReducer,
        });

        // Assert
        expect(fetchMembersRequest).toHaveBeenCalled();
    });
});
