import * as React from 'react';

export const useUser = (initialUser) => {
    const [user, setUser] = React.useState(initialUser);

    React.useEffect(() => {
        // Simulate async call
        setTimeout(() => {
            setUser({ name: 'Jane', surname: 'Smith' });
        }, 500);
    }, []);

    return {
        user,
        setUser,
    };
};
