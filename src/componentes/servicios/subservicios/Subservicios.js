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
					<h1 className="tituloSub" id= "servicio-1">Servicio #1</h1> {/*llama la clase titulo del estyleSubserv.css*/}
					
					<p> {/*configura el contenido del elemento p con lo realizado en estyleSubserv.css*/}
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque erat tincidunt hendrerit. Cras lobortis id diam sit amet consectetur. Suspendisse non pulvinar justo, ac commodo velit. Quisque maximus dolor ac magna molestie, sit amet commodo velit congue. Maecenas non dolor ut elit malesuada congue. Phasellus euismod nisi pharetra ante rutrum dignissim. Ut eget tortor ut sapien egestas sollicitudin. Aenean pulvinar varius augue, ac euismod tortor faucibus at. In commodo sodales turpis nec vehicula. Mauris luctus, risus non iaculis porttitor, felis eros sagittis enim, sed ultricies lacus magna quis urna.
					</p>

                    <div className= "row">
                        <div className= "col-lg-6"> {/*Se usa para dividir el espacio de trabajo en un ancho de 50% del div padre*/}
                            <img src={process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Foto servicio 1 izquierda"/>
                        </div>

                        <div className= "col-lg-6"> {/*Se usa para dividir el espacio de trabajo en un ancho de 50% del div padre*/}
                            <img src={process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Foto servicio 1 derecha"/>
                        </div>
                    </div>
			    </div>

                <div className="post"> {/*llama al div con la clase post estyleSubserv.css*/}
					<h1 className="tituloSub" id= "servicio-2">Servicio #2</h1> {/*llama la clase titulo del estyleSubserv.css*/}
					
					<p> {/*configura el contenido del elemento p con lo realizado en estyleSubserv.css*/}
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque erat tincidunt hendrerit. Cras lobortis id diam sit amet consectetur. Suspendisse non pulvinar justo, ac commodo velit. Quisque maximus dolor ac magna molestie, sit amet commodo velit congue. Maecenas non dolor ut elit malesuada congue. Phasellus euismod nisi pharetra ante rutrum dignissim. Ut eget tortor ut sapien egestas sollicitudin. Aenean pulvinar varius augue, ac euismod tortor faucibus at. In commodo sodales turpis nec vehicula. Mauris luctus, risus non iaculis porttitor, felis eros sagittis enim, sed ultricies lacus magna quis urna.
					</p>

                    <div className= "row">
                        <div className= "col-lg-6">
                            <img src={process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Foto servicio 2 izquierda"/>
                        </div>

                        <div className= "col-lg-6">
                            <img src={process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Foto servicio 2 derecha"/>
                        </div>
                    </div>
			    </div>

                <div className="post"> {/*llama al div con la clase post estyleSubserv.css*/}
					<h1 className="tituloSub" id= "servicio-3">Servicio #3</h1> {/*llama la clase titulo del estyleSubserv.css*/}
					
					<p> {/*configura el contenido del elemento p con lo realizado en estyleSubserv.css*/}
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod scelerisque erat tincidunt hendrerit. Cras lobortis id diam sit amet consectetur. Suspendisse non pulvinar justo, ac commodo velit. Quisque maximus dolor ac magna molestie, sit amet commodo velit congue. Maecenas non dolor ut elit malesuada congue. Phasellus euismod nisi pharetra ante rutrum dignissim. Ut eget tortor ut sapien egestas sollicitudin. Aenean pulvinar varius augue, ac euismod tortor faucibus at. In commodo sodales turpis nec vehicula. Mauris luctus, risus non iaculis porttitor, felis eros sagittis enim, sed ultricies lacus magna quis urna.
					</p>

                    <div className= "row">
                        <div className= "col-lg-6">
                            <img src={process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Foto servicio 3 izquierda"/>
                        </div>

                        <div className= "col-lg-6">
                            <img src={process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Foto servicio 3 derecha"/>
                        </div>
                    </div>
			    </div>              

            </div>
        );
    };
}

export default Subservicios;