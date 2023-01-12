import * as React from 'react';

export const useFilterUsers = initialFilter => {
    const [value, setValue] = React.useState(0);
    const [filter, setFilter] = React.useState(initialFilter);

    React.useEffect(() => {
        setValue(value + 1)
    }, [filter]);

    setTimeout(() => {
        setFilter("john")
    }, 1000)

    return {
        value,
        setFilter,
    };
};
