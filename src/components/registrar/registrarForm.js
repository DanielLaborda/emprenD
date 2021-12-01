import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


library.add(faArrowRight)

export default class RegistrarForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          redirect: false,
          name: "",
          email: "",
          password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleRegistedUser = this.handleRegistedUser.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleRegistedUser(event) {
        this.props.handleRegistedUser(this.state.email, this.state.name, this.state.password);
        event.preventDefault();
    }
    render() {
        const { className } = this.props;

        return (
            <form onSubmit={this.handleRegistedUser} className={`${className}`}>
                <div className={`${className}__input input-name`}>
                    <label>Usuario</label>
                    <input
                        type="name"
                        name="name"
                        value={this.state.name}
                        required
                        onChange={this.handleChange}
                        />
                    
                </div>
                <div className={`${className}__input input-email`}>
                    <label>email</label>
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
                    <p>Registrar</p>
                    <FontAwesomeIcon icon={ faArrowRight } />
                </button>
            </form>
        );
    }
}
