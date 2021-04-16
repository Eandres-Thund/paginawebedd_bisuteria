import React from 'react';

import Titulopag from '../titulopag/Titulopag';
import Menu from '../menu/Menu';
import Slider from './slider/Slider';
import Servicios from './servicios/Servicios';
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

		        <div className="container">
		  	  		
		  	  		{/*<Slider />*/}
					
		  	  		<Servicios />

		  	  		<hr className="featurette-divider" /> {/*Linea del footer*/}

		        </div>

	  		</main>

	  		<Footer/>

	  		</>

		)

	}

}

export default Home;