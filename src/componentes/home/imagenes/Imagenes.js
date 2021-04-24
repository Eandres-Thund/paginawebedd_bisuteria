/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';

//Estilos
import '../../../assets/css/styleParrWe.css';

class Imagenes extends React.Component{ //Este componente agrega 3 imagenes centradas horizontalemente, en el espacio de trabajo
    render(){

        return(
            
            <div className= "row">
                <div className= "col-lg-4"> {/*Esta clase se usa para dividir en 3 el espacio de trabajo, primera columna*/}
                    <h3 className= "fuente">Pendientes</h3>
                    <a href= "#">
                        <img src= {process.env.PUBLIC_URL + 'imagenes/aretesMiyuki.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen Izquierda home"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                    </a>
                </div>

                <div className= "col-lg-4"> {/*Esta clase se usa para dividir en 3 el espacio de trabajo, segunda columna*/}
                    <h3 className= "fuente">Manillas</h3>
                    <a href= "#">
                        <img src= {process.env.PUBLIC_URL + 'imagenes/manillaMiyuki.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen centro home"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                    </a>
                </div>

                <div className= "col-lg-4"> {/*Esta clase se usa para dividir en 3 el espacio de trabajo, tercera columna*/}
                    <h3 className= "fuente">Collares</h3>
                    <a href= "#">
                        <img src= {process.env.PUBLIC_URL + 'imagenes/collarMiyuki.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen derecha home"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                    </a>
                </div>

            </div>
        );
    };
}

export default Imagenes;
