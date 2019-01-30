import React from 'react';

const styles = {
    display: 'inline-block', 
    padding: '16px', 
    textAlign: 'center', 
    margin: '16px', 
    border: '1px solid black'
}

const CharComponent = props =>
    props.text.split('').map((char, index) => <div key={index} onClick={() => props.click(char, index)} style={styles} className="charComponent">{char}</div>)

export default CharComponent;