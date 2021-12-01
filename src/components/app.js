import React, { Component } from 'react';
import Login from "./login/login";
import ComparteIdea from './comparteIdea/comparteIdea';
import Registrar from './registrar/registrar';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        show: 'Login',
        showRegister: 'login',
        users: [],
        coments: [],
        idUsuario: '',
        nombreUsuario: ''
    };    
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleShareComent = this.handleShareComent.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleRegistedUser = this.handleRegistedUser.bind(this);
  }
  
  componentDidMount() {
    // cargamos los usuarios para validarlos
    axios({
      method: 'get',
      url: 'http://localhost:8000/coments'
    }).then(response =>{
      this.setState({
        coments: response.data
    });
    }).catch(error => {
      console.log(error);
    });

    axios({
      method: 'get',
      url: 'http://localhost:8000/user'
    }).then(response =>{
      this.setState({
        users: response.data
      });
    }).catch(error => {
      console.log(error);
    });
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
  handleRegister() {
    if  (this.state.showRegister === 'registrar') {
      this.setState({ showRegister: 'login' });
    } else {
      this.setState({ showRegister: 'registrar' });
    }
  }
  handleRegistedUser(email, nombre, contraseña, contraseñaValidacion) {
    //crear usuario registrado
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    let esValido = true;
    if (!pattern.test(email)) {
      alert("Por favor ingresa un email valido.");
      esValido = false;
    } else {
      for (var i = 0; i < this.state.users.length; i++) {
        if(email === this.state.users[i].email ){
          alert("Existe ya un usuario con ese email");
          esValido = false;
          break;
        }
      }
    }

    if(esValido == true){
      // se confirma todo okk
      axios({
        method: 'post',
        url: 'http://localhost:8000/register',
        data: {
            "name": nombre,
            "email": email,
            "password": contraseña,
            "password_confirmation": contraseñaValidacion
        }
      }).then(response => {
        this.handleSuccessfulLogin(email, password) 
      })
      .catch(error => {
        alert('un error ocurrio al intentar registrarte, intentalo de nuevo');
      });
    }
  }

  handleShareComent(newComent){
    var newArray = this.state.coments.slice();    
    newArray.push(newComent);   
    this.setState({coments:newArray});

    // axios({
    //   method: 'post',
    //   url: 'http://localhost:8000/coments',
    //   data: newComent
    // }).then(response =>{
    //   this.setState({
    //     coments: response.data
    //   });
    // }).catch(error => {
    //   console.log(error);
    // });
    
  }
  render() {
    return (
      <div className='app'>
        {(this.state.show === 'Login') ?
            (this.state.showRegister === 'registrar') ?
              <div className='registrar'>
                <Registrar 
                  className='registrar__content' 
                  handleRegistedUser={this.handleRegistedUser}
                  handleRegister={this.handleRegister}
                  />
              </div>
            :
              <div className='login'>
                <Login 
                  className='login__content' 
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                  handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  handleRegister={this.handleRegister}
                  />
              </div>
            
          :
              
            <div className='comparteIdea'>
              <ComparteIdea 
                className='comparteIdea__content' 
                handleShareComent={this.handleShareComent}
                handleLogout={this.handleLogout}
                coments={this.state.coments}
                nombreUsuario={this.state.nombreUsuario}
                idUsuario={this.state.idUsuario}
                users={this.state.users}
              />
            </div>
        }
      </div>
    );
  }
}
