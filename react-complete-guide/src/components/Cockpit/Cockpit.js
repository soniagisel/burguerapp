import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    //componentDidMount and componentDidUpdate in one effect
    //I can set as many useEffect as much as I want
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http requests ...
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
    }, [props.persons]);

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }


    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;