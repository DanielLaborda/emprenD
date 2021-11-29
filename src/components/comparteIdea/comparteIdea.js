import React, { Component } from 'react';

import NavBar from '../navBar/navbar';
import ComparteIdeaComents from './comparteIdeaComents';
import ComparteIdeaForm from './comparteIdeaForm';

export default class ComparteIdea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            comentsToShow: [],
            verMas: false,
            verMasTexto: 'Ver Más'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    componentDidMount() {
        //ordenamos los comentarios
        
        let orden = this.props.coments.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        this.setState({
            comentsToShow: orden.slice(0, 9)
        });

    }
    verMas() {
        let orden = this.props.coments.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        if (this.state.verMas == false) {
            this.setState({
                comentsToShow: orden,
                verMas: true,
                verMasTexto: 'Ver menos'
            });
        } else {
            this.setState({
                comentsToShow: orden.slice(0, 9),
                verMas: false,
                verMasTexto: 'Ver más'
            });
        }
        
    }
    handleSubmit(textValue) {
        let newDate = new Date();
        let month = newDate.getMonth() + 1;
        let time = newDate.getFullYear()+ "-" + month + "-" + newDate.getDate() + " " + newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
        let newComent = {
            id: this.state.comentsToShow[0].id + 1,
            body: textValue, 
            user_id: this. props.idUsuario,
            date: time
        };
        this.props.handleShareComent(newComent);

        var newArray = this.state.comentsToShow.slice();    
        newArray.unshift(newComent);   
        this.setState({comentsToShow:newArray});
        alert('Dato guardado correctamente');
        
    }

    handleLogout(){
        this.props.handleLogout();
    }
    
    render() {
        const { className, nombreUsuario, idUsuario, users } = this.props;
        return (
            <div className={`${className}`}>
                <div className={`navbar`}>
                    <NavBar 
                        handleLogout={this.handleLogout}
                        className={`navbar__content`}
                        nombreUsuario={`${nombreUsuario}`}
                    />
                </div>

                <div className={`${className}__miIdea`}>
                    <ComparteIdeaForm
                        handleSubmit={this.handleSubmit}
                        className={`${className}__miIdea__form`}
                    />                

                </div>
                <div className={`${className}__listaIdeas`}>
                    {                        
                        this.state.comentsToShow.map(coment =>(
                            <ComparteIdeaComents
                                key={coment.id}
                                className={`${className}__listaIdeas__content`}
                                body={coment.body}
                                date={coment.date}
                                iduser={coment.user_id}
                                users={users}
                            />
                        )) 
                    }

                    <div>
                        <a onClick={() => this.verMas()} className={`${className}__listaIdeas__verMas`}>{this.state.verMasTexto}</a> 
                    </div>  
                </div>  
            </div>
        );
    }
}
