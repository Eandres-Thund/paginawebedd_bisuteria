import React from 'react';

import Titulopag from '../titulopag/Titulopag';
import Menu from '../menu/Menu';
import Formulario from './formulario/Formulario'; 
import Mapa from './mapa/Mapa'; 
import Footer from '../footer/Footer';
 
 
class Contacto extends React.Component {
 
	render() {
 
		return(
 
			<>
 
 			<Titulopag /> {/*Se llama al componente Titulopag*/}

			<div className= "container"> {/*Se da un estilo de padding para volver mas pequeña la barra del menu*/}
				
				<Menu /> {/*Se llama al componente Menu*/}
							
			</div>
 
			<main role="main" className="flex-shrink-0 mt-5">
 
				<div className="container">
 
					<h1 className="mb-5 fuente">Contacto</h1>
 
            		<div className="row">
 
            			<div className="col-md-6">
		        
							<Formulario /> {/*Se llama al componente Formulario*/}
 
						</div>
 
						<div className="col-md-6">
		        
							<Mapa /> {/*Se llama al componente Mapa*/}
 
						</div>
 
					</div>
				</div>	
 
	  		</main>
 
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default Contacto;