/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';

//Rutas de Imagenes
import Tour from '../../../assets/images/tour2021.jpg'

class Foto extends React.Component{ //Esta componente carga y muestra una solo imagen
    render(){
        return( 

            <img src={Tour} className= "mx-auto d-block img-fluid rounded" alt="Foto Izquierda home"/> //Se añaden clases para centrar, ancho de 100%, altura:auto y punta redonda
        );
    }
}

export default Foto;