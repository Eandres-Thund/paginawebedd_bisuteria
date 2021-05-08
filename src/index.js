/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';
import ReactDOM from 'react-dom'; // Librería react-dom 
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Librería react-router-dom
import './assets/css/index.css';

//Framework Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

//Páginas del Sitio Web principales 
import Home from './componentes/home/Home';
import Nosotros from './componentes/nosotros/Nosotros';
import Servicios from './componentes/servicios/Servicios';
import Contacto from './componentes/contacto/Contacto';
import Galeria from './componentes/galeria/Galeria';
import Conocenos from './componentes/conocenos/Conocenos'


//Configuración de la rutas del Sitio Web 
ReactDOM.render(  
  <Router>
      <div>
        <Switch> { /* Páginas */ } 
          <Route exact path = '/'
          component = { Home }/> 
          <Route path = '/nosotros'
          component = { Nosotros }/> 
          <Route path = '/servicios'
          component = { Servicios }/>
          <Route path = '/galeria' 
          component = { Galeria }/> {/*Se agrega nueva ruta para Galeria*/}
          <Route path = '/conocenos' 
          component = { Conocenos }/> {/*Se agrega nueva ruta para Conocenos*/}
          <Route path = '/contacto'
          component = { Contacto }/>
        </Switch> 
      </div> 
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
