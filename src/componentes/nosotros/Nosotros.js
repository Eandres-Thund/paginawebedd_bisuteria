/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';

//Componentes
import Titulopag from '../titulopag/Titulopag';
import Menu from '../menu/Menu';
import Parrafo from './parrafo/Parrafo';
import Footer from '../footer/Footer';
 
 
class Nosotros extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Titulopag /> {/*Se llama al componente Titulopag*/}

			<div className= "container"> {/*Se da un estilo de padding para volver mas pequeña la barra del menu*/}
				
				<Menu /> {/*Se llama al componente Menu*/}
							
			</div>
 
			<main role="main" className="flex-shrink-0 mt-5"> {/*flex-shrink, especifica el factor de contracción de un flex item.*/}

				<div className="container" style={{padding: '0 60px',}}> {/*Se da un estilo de padding para volver el espacio de horizontal un poco mas pequeño*/}
					<div className= "row"> {/*se crea segunda clase hija de container*/}
						<div className="col-lg-6 mt-2 contenedor-texto-home"> {/*Se crea la primera columna que va a contener el parrafo de nosotros*//*Se llama la funcion de styleParrWe.css para centrar ambos parrafos horizontalmente al container*/}
							<Parrafo /> {/*Se llama al componente Parrafo*/}
						</div>

						<div className="col-lg-6"> {/*Se crea la segunda columna que va a contener la foto de nosotros*/}
							<img src={process.env.PUBLIC_URL + 'imagenes/Dianne.png'} className= "mx-auto d-block img-fluid rounded" alt="Foto Nosotros"/>
						</div>

					</div>
				</div>
 
	  		</main>
 
	  		<Footer /> {/*Se llama al componente Footer*/}
 
	  		</>
 
		)
 
	}
 
}
 
export default Nosotros;