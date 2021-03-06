/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';

//Componentes
import Titulopag from '../titulopag/Titulopag';
import Menu from '../menu/Menu';
import Aside from './aside/Aside';
import Subservicios from './subservicios/Subservicios'; 
import Footer from '../footer/Footer';
 
 
class Servicios extends React.Component {
 
	render() {
 
		return(
 
			<>
			<div style={{background: '#f2f2f2',}}>
				
				<Titulopag /> {/*Se llama al componente Titulopag*/}

				<div className= "container"> {/*Se da un estilo de padding para volver mas pequeña la barra del menu*/}
					
					<Menu /> {/*Se llama al componente Menu*/}
								
				</div>
				
				<main role="main" className="flex-shrink-0 mt-5"> {/*flex-shrink, especifica el factor de contracción de un flex item.*/}
					
					<div className="container" id="contenedor-subservicios" style={{padding: '0 60px',}}> {/*Se da un estilo de padding para volver el espacio de horizontal un poco mas pequeño*/}
						<div className= "row"> 
							<div className= "col-md-3"> {/*Se usa para dividir el espacio de trabajo en un ancho de 25% del ppal*/}
								<Aside /> {/*Se llama el componente Aside*/}
							</div>

							<div className= "col-md-9 px-5"> {/*Se usa para dividir el espacio de trabajo en un ancho de 75% del ppal*/}
								<Subservicios /> {/*Se llama el componente Subservicios*/}
							</div>

						</div>
					</div>
					
				</main>
				
				<Footer />
			</div>
	  		</>
 
		)
 
	}
 
}
 
export default Servicios;