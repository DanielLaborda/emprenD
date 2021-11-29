import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


library.add(faArrowRight)

export default class ComparteIdeaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TextValue: ''
        };
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({TextValue: event.target.value});
      }
    
    handleSubmit(event) {
        this.props.handleSubmit(this.state.TextValue);
        event.preventDefault();
    }
    
    render() {
        const { className } = this.props;
        return (
            <div className={`${className}`}>
                <div className={`${className}__titulo`}>
                    <h1>
                        Comparte tu idea
                    </h1>
                </div>
                <form className={`${className}__text`}  onSubmit={this.handleSubmit}>
                    <textarea className="form-control" value={this.state.TextValue} onChange={this.handleChange} rows="10" />   

                    <button className={`${className}__text__submit btn-submit`} type="submit">
                        <p>Share</p>
                        <FontAwesomeIcon className='createModal__icon'  icon={ faArrowRight } />
                    </button>
                </form> 
            </div>
        );
    }
}
