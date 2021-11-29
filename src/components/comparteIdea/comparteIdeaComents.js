import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';


library.add(faUser)

export default class ComparteIdeaComents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TextValue: '',
            nombreUser: ''
        };
    }
    componentDidMount() {
        for (var i=0; i < this.props.users.length; i++){
            if (this.props.users[i].id == this.props.iduser ) {
                this.setState({
                    nombreUser: this.props.users[i].name
                });
                break;
            }
        }
    }
   
    render() {
        const { className, body, date } = this.props;
        return (
            <div className={`${className}`}>
                <div className={`${className}__caja`}>
                    <div className={`${className}__caja__icono`}>
                        <FontAwesomeIcon  icon={ faUser } />
            
                    </div>
                    <div className={`${className}__caja__texto`}>
                        {body}
                    </div>
                </div>
                
                <div className={`${className}__signature`}>  
                    {date} {this.state.nombreUser}
                </div>
            </div>
        );
    }
}
