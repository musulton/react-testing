import React from "react";

const useName = () => {
    const [name, setName] = React.useState("John");

    return {
        name, setName
    }
}

export default useName;
