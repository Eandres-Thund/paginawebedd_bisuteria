/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';

class Foto extends React.Component{ //Esta componente carga y muestra una solo imagen
    render(){
        return( 

            <img src={process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Foto Izquierda home"/> //Se añaden clases para centrar, ancho de 100%, altura:auto y punta redonda
        );
    }
}

export default Foto;