/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';

//Rutas de Imagenes
import Tour from '../../../assets/images/tour2021.jpg'

class Imagenes extends React.Component{ //Este componente agrega 3 imagenes centradas horizontalemente, en el espacio de trabajo
    render(){

        return(
            
            <div className= "row">
                <div className= "col-lg-4"> {/*Esta clase se usa para dividir en 3 el espacio de trabajo, primera columna*/}
                    <img src={Tour} className= "mx-auto d-block img-fluid rounded" alt="Imagen Izquierda home"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                </div>

                <div className= "col-lg-4"> {/*Esta clase se usa para dividir en 3 el espacio de trabajo, segunda columna*/}
                    <img src={Tour} className= "mx-auto d-block img-fluid rounded" alt="Imagen centro home"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                </div>

                <div className= "col-lg-4"> {/*Esta clase se usa para dividir en 3 el espacio de trabajo, tercera columna*/}
                    <img src={Tour} className= "mx-auto d-block img-fluid rounded" alt="Imagen derecha home"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                </div>

            </div>
        );
    };
}

export default Imagenes;
