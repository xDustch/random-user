import React, { Component } from 'react';
import './App.css';
import DisplayCard from './components/DisplayCard'
//import styled from 'styled-components'

/*const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DisplayCard 
            photo_url="https://randomuser.me/api/portraits/men/82.jpg"
            name="Roberto Dog"
            email="example@gmail.com"
            phone="5555555"
            address="Fake st. 123"
          />
        </header>
      </div>
    );
  }
}

export default App;
