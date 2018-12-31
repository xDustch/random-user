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
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      pic_url: ''
    }
  }

  

  componentWillMount(){
    let url = `https://randomuser.me/api/`
    fetch(url)
    .then(res =>res.json())
    .then((data)=>{
      this.setState({
        name: capitalizeFirstLetter(data.results[0].name.first) + " " + capitalizeFirstLetter(data.results[0].name.last),
        email: data.results[0].email,
        phone: data.results[0].cell,
        address: data.results[0].location.street,
        pic_url: data.results[0].picture.large,
      })
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DisplayCard 
            photo_url={this.state.pic_url}
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
            address={this.state.address}
          />
        </header>
      </div>
    );
  }
}

export default App;
