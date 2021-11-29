import React, { Component } from 'react';

import Login from "./login/login";


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        show: 'Login',
        users: [],
        coments: [],
        idUsuario: '',
        nombreUsuario: ''
    };    
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleShareComent = this.handleShareComent.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  componentDidMount() {

  }
  handleSuccessfulLogin(user, password) { 
    let errorLogin = '';
    let nombreUser = '';
    let idUser = '';
    for (var i = 0; i < this.state.users.length; i++) {
      if(user === this.state.users[i].email && password === this.state.users[i].password){
        errorLogin = '';
        nombreUser = this.state.users[i].name;
        idUser = this.state.users[i].id;
        break;
      } else {
        errorLogin = 'Usuario o contraseña incorrecta';
      }
    }
    
    if(errorLogin === '') {
      this.setState({ show: 'Enter' ,nombreUsuario: nombreUser, idUsuario: idUser});
    } else {
      alert(errorLogin);
    }
  }
  handleUnsuccessfulLogin() {
    alert('Usuario incorrecto');
    this.setState({ show: 'Login' });
  } 
  handleLogout() {
    this.setState({ show: 'Login' });
  }
  handleShareComent(newComent){
    var newArray = this.state.coments.slice();    
    newArray.push(newComent);   
    this.setState({coments:newArray});
    
  }
  render() {
    return (
      <div className='app'>
        
        {(this.state.show === 'Login') ?
            <div className='login'>
              <Login 
                className='login__content' 
                handleSuccessfulLogin={this.handleSuccessfulLogin}
                handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                />
            </div>
            
          :
              
            <div className='comparteIdea'>
              
            </div>
        }
      </div>
    );
  }
}
