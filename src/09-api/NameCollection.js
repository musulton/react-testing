import * as React from 'react';
import { getNameCollection } from './userApi';

const NameCollection = () => {
    const [nameCollection, setNameCollection] = React.useState([]);

    React.useEffect(() => {
        getNameCollection().then(names => {
            setNameCollection(names);
        });
    }, []);

    return (
        <ul>
            {nameCollection.map(name => (
                <li key={name} data-testid="name">
                    {name}
                </li>
            ))}
        </ul>
    );
};

export default NameCollection;
