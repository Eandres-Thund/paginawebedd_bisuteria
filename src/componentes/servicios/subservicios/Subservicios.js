/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';

//Estilos
import '../../../assets/css/styleSubserv.css';


class Subservicios extends React.Component{ //Contiene informacion de los servicios

    render(){

        return(
            <div className="contenido"> {/*llama al div con la clase contenido del estyleSubserv.css*/}
				<div className="post"> {/*llama al div con la clase post*/}
					<h1 className="tituloSub" id= "servicio-1">Arreglos</h1> {/*llama la clase titulo del estyleSubserv.css*/}
					
					<p> {/*configura el contenido del elemento p con lo realizado en estyleSubserv.css*/}
							Se realizan todo tipo de arreglos en articulos (cadenas, collares, pulseras, anillos, accesorios para el equipaje, entre otros) relacionados con cristal miyuki.<br/> Se emplea todo tipo de tecnicas de bisuteria y herramientas especificas con la finalidad de dar el mejor acabado al producto.
					</p>

                    <div className= "row">
                        <div className= "col-md-6"> {/*Se usa para dividir el espacio de trabajo en un ancho de 50% del div padre*/}
                            <img src={process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Foto servicio 1 izquierda"/>
                        </div>

                        <div className= "col-md-6" id="sec-img-subserv-1"> {/*Se usa para dividir el espacio de trabajo en un ancho de 50% del div padre*/}
                            <img src={process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Foto servicio 1 derecha"/>
                        </div>
                    </div>
			    </div>

                <div className="post"> {/*llama al div con la clase post estyleSubserv.css*/}
					<h1 className="tituloSub" id= "Webinar ">Webinars</h1> {/*llama la clase titulo del estyleSubserv.css*/}
					
					<p> {/*configura el contenido del elemento p con lo realizado en estyleSubserv.css*/}
							Se  hacen contenidos digitales para dar conocimiento acerca de diferentes tecnicas de bisuteria artesanal en joyeria, usando como materia prima el producto principal de nuestra empresa. Estos webinars van dirigidos a personas que tengan curiosidad o interes acerca de como se diseñan y se crean de cero los productos.
					</p>

                    <div className= "row">
                        <div className= "col-md-6">
                            <img src={process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Foto servicio 2 izquierda"/>
                        </div>

                        <div className= "col-md-6" id="sec-img-subserv-2">
                            <img src={process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Foto servicio 2 derecha"/>
                        </div>
                    </div>
			    </div>

                <div className="post"> {/*llama al div con la clase post estyleSubserv.css*/}
					<h1 className="tituloSub" id= "servicio-3">Ventas</h1> {/*llama la clase titulo del estyleSubserv.css*/}
					
					<p> {/*configura el contenido del elemento p con lo realizado en estyleSubserv.css*/}
							Nuestros productos pueden se adquiridos por los clientes al por mayor y al detal.
					</p>

                    <div className= "row">
                        <div className= "col-md-6">
                            <img src={process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Foto servicio 3 izquierda"/>
                        </div>

                        <div className= "col-md-6" id="sec-img-subserv-3">
                            <img src={process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Foto servicio 3 derecha"/>
                        </div>
                    </div>
			    </div>              

            </div>
        );
    };
}

export default Subservicios;