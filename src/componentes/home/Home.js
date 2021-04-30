/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';

//Componentes
import Titulopag from '../titulopag/Titulopag';
import Menu from '../menu/Menu';
import Slider from './slider/Slider';
import Imagenes from './imagenes/Imagenes';
import Foto from './foto/Foto';
import Footer from '../footer/Footer';


class Home extends React.Component {

	render() {

		return(

			<>
			<div style={{background: '#f2f2f2',}}>
				
				<Titulopag /> {/*Se llama al componente Titulopag*/}

				<div className= "container" > {/*Se da un estilo de padding para volver mas pequeña la barra del menu*/}
					
					<Menu /> {/*Se llama al componente Menu*/}
								
				</div>

				<main role="main" className="flex-shrink-0 mt-5"> {/*flex-shrink, especifica el factor de contracción de un flex item.*/}

					<div className="container" style={{padding: '0 60px',}}> {/*Se da un estilo de padding para volver el espacio de horizontal un poco mas pequeño*/}

						<Slider /> {/*Se llama al componente Slider*/}
						
						<div className="mt-3"> {/*Deja un pequeño margen superior entre el compoenente Slider e Imagenes */}
							<Imagenes /> {/*Se llama al componente Imagenes*/}
						</div>		  	  		
						
						<hr style={{backgroundColor: '#e5e5e5', height:'20px',}} /> {/*Crea una linea con altura y color: Very light gray*/}

						<div className= "row"> {/*se crea segunda clase hija de container*/}
							<div className="col-md-6 contenedor-texto-home fuente"> {/*Se crea la primera columna que va a contener texto de home, las dos ultimas funciones se llaman de styleParrWe*/}
								<h3 className="text-center">¿Qué es el cristal Miyuki?</h3> {/*Se crea un header con la pregunta, con elemento centrado*/}
								<p className="mt-3"> También llamada <b>Perla de semilla</b>, es un término genérico para cualquier perla pequeña. Existe una gran cantidad de colores; además hay varios tipos en forma y tamaño como Redondo, Cilindro, Hexágono, Corneta, Triángulo, Gota, entre otras. Se utilizan una gran variedad de estas "perlas" para dar forma y crear objetos como accesorios.
								</p> {/*Se crea un parrafo, con un margen superior*/}
								<p><a className="btn btn-primary btn-lg mt-4" href="https://www.miyuki-beads.co.jp/" target="_blank" role="button">Más información &#8618; </a></p> {/*Se crea un link, para abrir otra url si desea mas informacion acerca del tema*/}
							</div>

							<div className="col-md-6"> {/*Se crea la segunda columna que va a contener la foto de home*/}
								<Foto/>
							</div>

						</div>

					</div>
					
				</main>

				<Footer/> {/*Se llama al componente Footer*/}
			</div>
			</>

		)

	}

}

export default Home;