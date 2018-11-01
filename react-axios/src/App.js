import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''}

    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChangeEmail(event) {
    // this.state.email = evemt.starget.value
    this.setState({email: event.target.value})
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value})
  }

  handleClick() {
    var data = {
      email: this.state.email,
      password: this.state.password,
    }
    // npm install axios
    // call api post
    axios.post("http://localhost:3001/register", data).then((res) => {
      console.log(res)
    })
 
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="email" onChange={this.handleChangeEmail}/>
        <input type="password" placeholder="password" onChange={this.handleChangePassword} />
        <button type="button" onClick={this.handleClick}> Login </button>
      </div>
    );
  }
}

export default App;
