import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    //inicializa la clase
  constructor(props){
    super(props);
    //si vas a usar this.state tienes que darle un estado inicial
    this.state = {date: new Date()}
  }
  //si llamamos primero a este, no va a tener acesso a this.state
  render(){
      //esto es lo que te devuelve esta funcion
    return <div></div>;
  }
}
//esto lo transforma en html y lo mete en app
ReactDOM.render(<Clock />, document.getElementById('app'));