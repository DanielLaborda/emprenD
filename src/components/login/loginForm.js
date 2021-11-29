import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


library.add(faArrowRight)

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          redirect: false,
          response_error: "",
          email: "",
          password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        });
    }
    handleLoginSubmit(event){ 
        this.props.handleSuccessfulLogin(this.state.email, this.state.password);
        event.preventDefault();
    }
    render() {
        const { className } = this.props;

        return (
            <form onSubmit={this.handleLoginSubmit} className={`${className}`}>
                <div className={`${className}__input input-email`}>
                    <label>Usuario</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        required
                        onChange={this.handleChange}
                        />
                    
                </div>
                <div className={`${className}__input`}>
                    <label>Contraseña</label>
                    <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    required
                    onChange={this.handleChange}
                    />                    
                </div>
                <button className={`${className}__submit btn-submit`} type="submit">
                    <p>Enter</p>
                    <FontAwesomeIcon icon={ faArrowRight } />
                </button>
            </form>
        );
    }
}
