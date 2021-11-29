import React, { Component } from 'react';
import logo from '../../../static/images/LOGO.png';

import 'bootstrap/dist/css/bootstrap.min.css';


export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.handleLogout=this.handleLogout.bind(this);
    }
    handleLogout() {
        this.props.handleLogout();
    }
    render() {
        const { className, nombreUsuario } = this.props;
        return (
            <div className={`${className}`}>
                <div className={`${className}__logo`}>
                    <img src={logo}/>
                    <h1>emprenD</h1>
                </div>
                
                <div className={`${className}__nomUser`}>
                    <div className={`${className}__nomUser_nombre`}>
                        {nombreUsuario}
                    </div>
                    

                    <div className={`${className}__nomUser__menu`}>
                        <input type="checkbox" id="active"/>
                        <label htmlFor="active" className={`${className}__nomUser__menu__btn`}><span></span></label>
                        <label htmlFor="active" className={`${className}__nomUser__menu__close`}></label>
                        <div className={`${className}__nomUser__menu__wrapper`}>
                            <ul>
                                <li>
                                    <a onClick={() => this.handleLogout()} >Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>        
            </div>
        );
    }
}
