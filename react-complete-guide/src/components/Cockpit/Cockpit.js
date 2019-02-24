import React, { useEffect } from 'react';
import classes from './Cockpit.css';
//import { clearTimeout } from 'timers';

const cockpit = (props) => {

    //componentDidMount and componentDidUpdate in one effect
    //I can set as many useEffect as much as I want
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http requests ...
        const timer = setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => { 
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect'); 
        }
    }, [props.persons]);

    //when it has no arguments array at the end
    //it runs in every update cycle.
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => { 
            console.log('[Cockpit.js] cleanup work in useEffect'); 
        }
    });

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
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

export default React.memo(cockpit);