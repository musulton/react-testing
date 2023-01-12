import * as React from 'react';

const Input = () => {
    const [userName, setUserName] = React.useState('');

    return (
        <>
            <h3 data-testid="input-label">{userName}</h3>
            <input
                data-testid="input-username"
                value={userName}
                onChange={e => setUserName(e.target.value)}
            />
        </>
    );
};

export default Input;
