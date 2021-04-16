/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';

//Componentes
import Titulopag from '../titulopag/Titulopag';
import Menu from '../menu/Menu';
import Imagenes from './imagenes/Imagenes';
import Foto from './foto/Foto';
import Footer from '../footer/Footer';


class Home extends React.Component {

	render() {

		return(

			<>

			<Titulopag /> {/*Se llama al componente Titulopag*/}

			<div className= "container" style={{padding: '0 300px 0 300px',}}> {/*Se da un estilo de padding para volver mas pequeña la barra del menu*/}
				
				<Menu /> {/*Se llama al componente Menu*/}
							
			</div>

			<main role="main" className="flex-shrink-0 mt-5"> {/*flex-shrink, especifica el factor de contracción de un flex item.*/}

		        <div className="container" style={{padding: '0 60px 0 60px',}}> {/*Se da un estilo de padding para volver el espacio de horizontal un poco mas pequeño*/}
		  	  		
		  	  		<Imagenes /> {/*Se llama al componente Imagenes*/}
					
					<hr style={{backgroundColor: '#e5e5e5', height:'20px',}} /> {/*Crea una linea con altura y color: Very light gray*/}

					<div className= "row"> {/*se crea segunda clase hija de container*/}
						<div className="col-lg-6"> {/*Se crea la primera columna que va a contener el formulario de home*/}
							<>Espacio formulario</>
						</div>

						<div className="col-lg-6"> {/*Se crea la segunda columna que va a contener la foto de home*/}
							<Foto/>
						</div>

					</div>

		        </div>
				
	  		</main>

	  		<Footer/> {/*Se llama al componente Footer*/}

	  		</>

		)

	}

}

export default Home;