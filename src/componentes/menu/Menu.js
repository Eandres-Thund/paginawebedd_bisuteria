import React from 'react';
import {NavLink} from "react-router-dom";

import '../../assets/css/styleMenu.css';


class Menu extends React.Component {

  render() {

  	return (
		
  		<nav className="navbar navbar-expand-md navbar-dark menuNav">

		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mx-auto">

			        <li className="nav-item">
			          	<NavLink to="/" className="nav-link">Home </NavLink>
			        </li>
			        <li className="nav-item">
			        	<NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/servicios" className="nav-link">Servicios</NavLink>
			        </li>
					<li className="nav-item">
			          	<NavLink to="/galeria" className="nav-link">Galeria </NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/contacto" className="nav-link">Contacto </NavLink>
			        </li>

			    </ul>

		    </div>		    

		</nav>


  	)
    
  }

}

export default Menu;
