import React, { Component } from 'react';
import LoginForm from './loginForm';
import logo from '../../../static/images/LOGO.png';

export default class Login extends Component {
    constructor(props) {
        super(props);
    
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    }
    handleSuccessfulLogin(user, password){
        this.props.handleSuccessfulLogin(user, password);
    }
    handleUnsuccessfulLogin(){
      this.props.handleUnsuccessfulLogin();
    }
    render() {
        const { className } = this.props;
        return (
            <div className={`${className}`}>
                <div className={`${className}__titulo`}>
                    <img src={logo} className={`${className}__titulo__logo`} />
                    <h1>emprenD</h1>
                </div>
                
                <LoginForm 
                  className={`${className}__form`}
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                  handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                />
            </div>
        );
    }
}
