import React from 'react';

import Titulopag from '../titulopag/Titulopag';
import Menu from '../menu/Menu';

import Imagenes from '../home/imagenes/Imagenes';

import Slider from './slider/Slider';
import Servicios from './servicios/Servicios';

import Foto from './foto/Foto';
import Footer from '../footer/Footer';




class Home extends React.Component {

	render() {

		return(

			<>

			<Titulopag />

			<div className= "container" style={{padding: '0 300px 0 300px',}}>
				
				<Menu />
							
			</div>

			<main role="main" className="flex-shrink-0 mt-5">

		        <div className="container" style={{padding: '0 60px 0 60px',}}>
		  	  		
		  	  		<Imagenes />
					
					<hr style={{backgroundColor: '#e5e5e5', height:'20px',}} />

					<div className= "row">
						<div className="col-lg-6">
							<>Espacio formulario</>
						</div>

						<div className="col-lg-6">
							<Foto/>
						</div>

					</div>

		        </div>
				
	  		</main>

	  		<Footer/>

	  		</>

		)

	}

}

export default Home;