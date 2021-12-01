import React, { Component } from 'react';
import logo from '../../../static/images/LOGO.png';
import RegistrarForm from './registrarForm';

export default class Registrar extends Component {
    constructor(props) {
        super(props);
    
        this.handleRegister = this.handleRegister.bind(this);
        this.handleRegistedUser = this.handleRegistedUser.bind(this);
    }
    handleRegister()  {
        this.props.handleRegister();
    }
    handleRegistedUser(email, nombre, contraseña, contraseñaValidacion) {
        this.props.handleRegistedUser(email, nombre, contraseña, contraseñaValidacion);
    }

    render() {
        const { className } = this.props;
        return (
            <div className={`${className}`}>
                <div className={`${className}__titulo`}>
                    <img src={logo} className={`${className}__titulo__logo`} />
                    <h1>emprenD</h1>
                </div>
                
                <RegistrarForm 
                  className={`${className}__form`}
                  handleRegistedUser={this.handleRegistedUser}
                />
                <a onClick={() => this.handleRegister()} className={`btn__register`}>Ya estoy registrado</a> 
            </div>
        );
    }
}
