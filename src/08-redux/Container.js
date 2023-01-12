import * as React from 'react';
import { connect } from 'react-redux';
import { fetchMembersRequest } from './actions/fetchMembers';

const mapStateToProps = (state) => ({
    members: state?.members.members,
    serverError: state?.members?.serverError,
});

const mapDispatchToProps = (dispatch) => ({
    fetchMembers: () => {
        dispatch(fetchMembersRequest());
    },
});

const PageContainer = (props) => {
    const { members, serverError, fetchMembers } = props;
    React.useEffect(fetchMembers, []);

    if (serverError) return <h3>Error...</h3>
    return (
        <div>
            {members?.map((member, index) => (
                <h3 key={index}>{member.name}</h3>
            ))}
        </div>
    )
};

export const MemberListPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageContainer);
