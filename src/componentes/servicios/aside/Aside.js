/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';

//Estilos
import '../../../assets/css/styleAside.css';

class Aside extends React.Component{ //Componente para ubicar los indices de servicios

    render(){

        return(
            <aside> {/*llama el elemento aside del styleAside.css*/}
					<h3 className="tituloAs">Servicios</h3> {/* llama la clase titulo del styleAside.css*/}
					<nav className="indice">	{/*llama la clase indice del styleAside.css*/}
						<a href="#/servicios#servicio-1">Arreglos</a> {/*llama la etiqueta a de la funcion indice del styleAside.css*/}
						<a href="#">Webinars</a>
						<a href="#">Ventas</a>
					</nav>
			</aside>
        );
    };
}

export default Aside;