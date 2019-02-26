import React, {Component, Fragment} from 'react';
import classes from './Person.css';
//import Aux from '../../../hoc/Auxiliary'; it's the same as React.Fragment

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Fragment>
                <div className={classes.Person}>
                    <p onClick={this.props.click}>I am a {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name}/>
                </div>
            </Fragment>
        )
    }
}

export default Person;