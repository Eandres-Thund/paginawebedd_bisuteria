/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';
 
class Slider extends React.Component {
 
  render() {
 
  	return (
 
  		<div id="slider" className="carousel slide" data-ride="carousel">
		    <ol className="carousel-indicators">
		        <li data-target="#slider" data-slide-to="0" className="active"></li>
		        <li data-target="#slider" data-slide-to="1"></li>
		        <li data-target="#slider" data-slide-to="2"></li>
		    </ol>
		    <div className="carousel-inner">

		        <div className="carousel-item active">
		            <img src={process.env.PUBLIC_URL + 'imagenes/miyuki.jpg'} className= "mx-auto d-block img-fluid" alt="miyuki slider home"/>
		        </div>
		        <div className="carousel-item">
		            <img src={process.env.PUBLIC_URL + 'imagenes/miyukiColors.jpg'} className= "mx-auto d-block img-fluid" alt="colores miyuki slider home"/>
		        </div>
		        <div className="carousel-item">
					<img src={process.env.PUBLIC_URL + 'imagenes/miyukiProducto.jpg'} className= "mx-auto d-block img-fluid" alt="producto miyuki home"/>		            
		        </div>
		    </div>

		    <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
		        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		        <span className="sr-only">Previous</span>
		    </a>

		    <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
		        <span className="carousel-control-next-icon " aria-hidden="true"></span>
		        <span className="sr-only">Next</span>
		    </a>
		</div>
 
  	)
    
  }
 
}
 
export default Slider;