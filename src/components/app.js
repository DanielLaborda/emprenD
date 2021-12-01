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
    this.setState({
      users: [
        {
          id: 0,
          name: 'Jose luis Moreno',
          email:'jlmoreno@gmail.com',
          email_verified_at: '2021-07-25 15:36:10',
          password:'asdasd'
        },
        {
          id: 1,
          name: 'Jaime Ortega',
          email:'jortega@gmail.com',
          email_verified_at: '2021-07-22 15:36:10',
          password:'asdasd'
        },
        {
          id: 2,
          name: 'Ruth Esteban',
          email:'resteban@gmail.com',
          email_verified_at: '2021-07-12 15:36:10',
          password:'asdasd'
        },
        {
          id: 3,
          name: 'Monica Blash',
          email:'mblash@gmail.com',
          email_verified_at: '2021-07-05 15:36:10',
          password:'asdasd'
        },
        {
          id: 4,
          name: 'Eduardo Romero',
          email:'eromero@gmail.com',
          email_verified_at: '2021-07-27 15:36:10',
          password:'asdasd'
        },
        {
          id: 5,
          name: 'Edgar Lopez',
          email:'elopez@gmail.com',
          email_verified_at: '2021-08-12 15:36:10',
          password:'asdasd'
        },
      ],
      //Comentarios o ideas anteriores
      coments: [
        {
            id: 0, 
            body: "Mi idea es una “Cámara Verrgua”, te la pegas en la cara y puedes estar grabando todo sin que tengas que estar agarrando un teléfono, cámara, etc. Sería ideal para los conciertos y/ o eventos públicos así puedes disfrutar del concierto y estar grabando sin tener que estar con tu teléfono todo el tiempo. Si no también podría servir para espionaje.", 
            user_id: 1, 
            date:'2021-08-15 15:36:10'
        },
        {
            id: 1, 
            body: "Para todos los que no tenemos tiempo la idea es sacar comida en pasta. Sí, como si fuera pasta de dientes pero que sean distintos alimentos, por ejemplo pozole, enchiladas, un corte de carne, hamburguesa. Se molería todo y luego se haría como pasta. Así puedes estar trabajando o haciendo otra cosa y disfrutando de tu rica comida.", 
            user_id: 2, 
            date:'2021-08-15 16:36:10'
        },
        {
            id: 2, 
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis purus, tincidunt fermentum ex nec, interdum maximus erat. Nam quis odio at nunc tristique consequat. Duis et cursus magna, nec feugiat nisl. Vestibulum at finibus nisi. Vestibulum fermentum purus vitae urna porttitor, eget fringilla eros dapibus. Cras erat felis, pretium semper malesuada quis, elementum et leo. Nam tincidunt urna non nisl blandit, eget condimentum elit elementum. Nulla et ante iaculis, rhoncus turpis quis, semper nibh. Quisque porttitor arcu sed volutpat ullamcorper. Maecenas venenatis risus eget nibh viverra, non imperdiet neque porttitor. Quisque turpis orci, sollicitudin at sem eu, euismod molestie ante.", 
            user_id: 3, 
            date:'2021-08-18 15:36:10'
        },
        {
            id: 3, 
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo sapien ac nulla ornare, commodo laoreet nisi condimentum. Quisque volutpat lobortis magna, sed semper diam lacinia ut. Aenean cursus blandit arcu, a condimentum urna rhoncus vitae. Maecenas ut tellus vitae felis auctor tincidunt non vel arcu. Vestibulum faucibus arcu in turpis hendrerit facilisis. Duis ut metus at erat pharetra bibendum. Ut id commodo augue. Mauris nec accumsan tellus. Vestibulum sollicitudin rutrum felis, nec finibus justo facilisis sed.", 
            user_id: 4, 
            date:'2018-08-19 09:36:10'
        },
        {
            id: 4, 
            body: "Mauris consectetur magna eget erat elementum, porta pellentesque mi egestas. Fusce vulputate, mi sit amet egestas ultrices, massa erat semper nisl, id pretium urna neque eget leo. Curabitur eget porta massa, ac feugiat lectus. Nunc risus enim, sodales quis metus a, sollicitudin porttitor felis. Vivamus eu elit vel ipsum tristique commodo vitae sed turpis. Ut mattis quam mauris, ut congue sem porta vitae. Nullam diam urna, mollis sit amet sagittis eget, tincidunt ac ipsum. Phasellus non accumsan nulla, eu venenatis arcu. Phasellus accumsan eget nulla sed interdum. Donec accumsan ipsum urna, nec dictum erat egestas a.", 
            user_id: 4, 
            date:'2021-08-19 10:36:10'
        },
        {
            id: 5, 
            body: "Proin at erat dictum, pulvinar eros eget, gravida mi. Sed ornare bibendum tortor a lobortis. Praesent hendrerit lacus ante, ac eleifend massa aliquam et. Phasellus commodo erat sit amet ante pharetra lacinia. Nulla nec ante orci. Nullam in enim elit. Phasellus mi mi, rutrum at libero sed, volutpat semper eros. Ut rhoncus neque accumsan, rhoncus nibh et, maximus ligula.", 
            user_id: 3, 
            date:'2021-08-22 21:36:10'
        },
        {
            id: 6, 
            body: "Donec vel dui euismod, faucibus sem vel, condimentum velit. Curabitur consectetur pharetra libero in fringilla. Sed bibendum tortor dictum felis mollis placerat. In hac habitasse platea dictumst. Aliquam erat volutpat. Integer in sagittis sem. Vestibulum eleifend ipsum in nisl congue vulputate. Praesent ut mi quam. Fusce sit amet sapien auctor, ultrices libero sed, euismod nulla. Morbi semper tincidunt lectus, dictum dapibus felis porttitor eu.", 
            user_id: 1, 
            date:'2021-08-15 15:37:10'
        },
        {
            id: 7, 
            body: "Fusce vitae ipsum fringilla, sagittis nisl sit amet, pulvinar urna. Cras non mi suscipit, volutpat purus at, bibendum est. In ac rhoncus mi. Quisque consequat libero a placerat lacinia. Ut eleifend vehicula sapien, nec scelerisque nisl laoreet sit amet. Etiam tristique commodo sagittis. Donec enim enim, molestie pharetra risus sit amet, ullamcorper finibus neque. Curabitur maximus finibus pulvinar. Vivamus suscipit scelerisque ipsum, ut auctor nisi rutrum ut. Duis sagittis hendrerit augue accumsan iaculis.", 
            user_id: 2, 
            date:'2021-08-23 17:36:10'
        },

        {
            id: 8, 
            body: "In sodales eros sed libero bibendum, quis faucibus nulla tempor. Integer lorem lorem, semper ut posuere a, congue in velit. Morbi tristique turpis ut luctus dapibus. Cras sit amet nunc eget velit semper ultrices. Curabitur at ornare lacus. Nunc congue nisi ut sapien semper, eu tempus orci pharetra. Fusce maximus nisl eget odio egestas fringilla. Nunc mattis tellus a augue rhoncus facilisis. Sed tortor eros, posuere accumsan nibh iaculis, suscipit venenatis nisl. Maecenas condimentum scelerisque eros, nec gravida ipsum tristique sit amet. Donec ut feugiat lectus.", 
            user_id: 1, 
            date:'2021-08-27 23:36:10'
        },
        {
            id: 9, 
            body: "Suspendisse potenti. Morbi vitae sem sed sem lacinia ullamcorper. Nunc scelerisque euismod mi, in dignissim nunc efficitur eget. Maecenas aliquam aliquam molestie. Donec aliquam neque non ex accumsan, vel consectetur felis scelerisque. In feugiat leo luctus tellus facilisis venenatis. Ut pretium accumsan nibh a eleifend. Donec ut turpis dolor. Aliquam erat volutpat. Nam nisl leo, efficitur nec diam non, pellentesque congue justo. Aenean posuere condimentum felis, sit amet finibus tellus venenatis eget.", 
            user_id: 3, 
            date:'2018-08-30 07:36:10'
        },
        {
            id: 10, 
            body: "Nulla urna tellus, convallis nec pharetra eget, tempor lobortis eros. Morbi nec dignissim velit. Integer ullamcorper lectus et porttitor iaculis. Sed sodales eu sem et pulvinar. Donec augue mi, faucibus quis nisi id, egestas rutrum nulla. Praesent consequat quis mauris ut sollicitudin. Donec pharetra enim id nisl sollicitudin, pretium consectetur dui cursus. Maecenas commodo, velit quis bibendum consectetur, ipsum nibh vehicula ligula, vel ornare ligula turpis vitae quam. Nunc ornare pulvinar ante, sed consequat felis convallis non.", 
            user_id: 5, 
            date:'2021-12-25 18:36:10'
        }
    ]
    });

    // ESTA SERIA LA CONEXION CON LA API(SIN PROBAR POR PROBLEMAS DE COMPATIBILIDAD)
    // axios({
    //   method: 'get',
    //   url: 'http://localhost:8000/coments'
    // }).then(response =>{
    //   this.setState({
    //     coments: response.data
    //   });
    // }).catch(error => {
    //   console.log(error);
    // });

    // axios({
    //   method: 'get',
    //   url: 'http://localhost:8000/user'
    // }).then(response =>{
    //   this.setState({
    //     coments: response.data
    //   });
    // }).catch(error => {
    //   console.log(error);
    // });
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
  handleRegistedUser(email, nombre, contraseña) {
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
      alert(nombre + " : " + email + " : " + contraseña);
      // se confirma todo okk
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
