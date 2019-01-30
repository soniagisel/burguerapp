import React from 'react';

const UserInput = (props) => {
    const styles = {
        width: "200px",
        margin: "5% 39%",
        textAlign: "center",
        padding: "1rem"
    };
    return <input style={styles} type="text" value={props.username} onChange={props.handler} />
}

export default UserInput;