import React from 'react';

const ValidationComponent = (props) => {
    let msg = ""

    if (props.textLength > 0 && props.textLength < 5) msg = "Text too short!"
    if (props.textLength > 10) msg = "Text too long!"

    return <div>
                <p>{props.textLength}</p>
                {msg}
           </div>
}

export default ValidationComponent;