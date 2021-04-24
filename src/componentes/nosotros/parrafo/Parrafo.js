/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';

//Estilos
import '../../../assets/css/styleParrWe.css';

class Parrafo extends React.Component{
    render(){

        return(
            <>
            <p className= "fuente">Somos una pequeña empresa emprendedora conformada por nuestro núcleo familiar, situada en una zona rural de Armenía, Quindío.</p>
            <p className= "fuente">Queremos transmitir la tradición cultural cafetera, de esta bella zona colombiana a partir de la creación de accesorios como pendientes, manillas y collares.</p>
            </>
        );
    };
}

export default Parrafo;