import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }
    
    onClick() {
        this.props.history.push('/home/1234')
    }

    render() {
        return (
            <div>
                 <p>Login Compoonent </p>
                 <Link to="/Register">Go to Register (by Link)</Link>
                 <p></p>
                 <button onClick={this.onClick}>Go to Home (by Function)</button>
            </div>
        )
    }
}

export default Login;