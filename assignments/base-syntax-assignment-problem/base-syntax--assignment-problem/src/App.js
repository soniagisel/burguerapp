import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: "theUsername",
    paragraphs: [
      {
        text1: '1111111111111111111',
        text2: '1111111111111111111'
      },
      {
        text1: '2222222222222222222',
        text2: '2222222222222222222'
      },
      {
        text1: '3333333333333333333',
        text2: '3333333333333333333'
      },
      {
        text1: '4444444444444444444',
        text2: '4444444444444444444'
      },
      {
        text1: '5555555555555555555',
        text2: '5555555555555555555'
      }
    ]
  };

  stateManipulationHandler = (event) => {
    this.setState(
      {
        username: event.target.value
      }
    )
  };

  render() {
    return (
      <div className="App">
        <ol>
          <li>DONE - Create TWO new components: UserInput and UserOutput</li>
          <li>DONE - UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>DONE - Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>DONE - Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>DONE - Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>DONE - Add a method to manipulate the state (=> an event-handler method)</li>
          <li>DONE - Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>DONE - Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>DONE - Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <br/>
        <UserInput username={this.state.username} handler={this.stateManipulationHandler}></UserInput>
        <UserOutput 
          p1={this.state.paragraphs[0].text1} 
          p2={this.state.paragraphs[0].text2}
          username={this.state.username}
        >
        </UserOutput>
        <UserOutput 
          p1={this.state.paragraphs[1].text1} 
          p2={this.state.paragraphs[1].text2}
          username={this.state.username}
        >
        </UserOutput>
        <UserOutput 
          p1={this.state.paragraphs[2].text1} 
          p2={this.state.paragraphs[2].text2}
          username={this.state.username}
        >
        </UserOutput>
        <UserOutput 
          p1={this.state.paragraphs[3].text1} 
          p2={this.state.paragraphs[3].text2}
          username={this.state.username}
        >
        </UserOutput>
        <UserOutput 
          p1={this.state.paragraphs[4].text1} 
          p2={this.state.paragraphs[4].text2}
          username={this.state.username}
        >
        </UserOutput>
      </div>
    );
  }
}

export default App;
