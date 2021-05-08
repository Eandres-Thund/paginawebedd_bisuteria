/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';
import PropTypes from 'prop-types';

//Estilos
import '../../../assets/css/styleTarjetainfo.css';

export default function Tarjetainfo({ //Contiene todas las llaves de data y la funcion de mostrarAdicional
    nombre,
    cargo,
    estudios,
    comida,
    edad,
    adicional,
    mostrarAdicional,
}){
    
    return ( //Da estructura a la visualizacion de las tarjetas de los animales
        <div className="animal-wrapper"> {/*Esta clase se llama de Tarjetainformacion.css*/}
            <h2>{nombre}</h2>   {/*Esta etiqueta contiene la llave nombre*/}
            <h3>{cargo}</h3> {/*Esta etiqueta contiene la llave cargo*/}
            <h4>{estudios}</h4> {/*Esta etiqueta contiene la llave estudios*/}
            <h4>{edad} años</h4> {/*Esta etiqueta contiene la llave estudios*/}

            <div>{comida.join(", ")}</div> {/*Este div contiene la llave dieta, se le agrega una , y un espacio para poeder visualizarlo correctamente*/}

            <button onClick={() => mostrarAdicional(adicional)}>Mas Info</button> {/*Crea un boton con etiqueta Mas info para llamar la funcion mostrarAdicional con su parametro*/}           

        </div>
    )
}

/************************************************************/
/************************** PropTypes ***********************/
/************************************************************/

//Esto sirve para el objeto de Leon que no tiene llave "adicional", muestre un error de null o undefined
Tarjetainfo.propTypes = { //Se definen las llaves que faltan dentro de la data o los objetos en este caso solo faltaria la llave de adicional del primer objeto
    adicional: PropTypes.shape({ //Se define el contenido de la llave adicional.
      link: PropTypes.string, //Se define que tipo de variable guarda el valor de la llave de segundo nivel link.
      notas: PropTypes.string //Se define que tipo de variable guarda el valor de la llave de segundo nivel notas.
    }), //Se definen las demas llaves que tienen en comun los objetos. Siempre iniciar con PropTypes y acabar .isRequired
    comida: PropTypes.arrayOf(PropTypes.string).isRequired, //Comida es de tipo arreglo [], por tanto primero se define el valor global y lo que lleva adentro del arreglo en este caso solo strings.
    nombre: PropTypes.string.isRequired, //nombre es de tipo string.
    cargo: PropTypes.string.isRequired, //cargo es de tipo string.
    estudios: PropTypes.string.isRequired, //estudios es de tipo string.
    mostrarAdicional: PropTypes.func.isRequired, //mostrarAdicional es una funcion.
    edad: PropTypes.number.isRequired, //edad es de tipo entero.
  }

Tarjetainfo.defaultProps = { //Al no encontrar la informacion de la llave muestra por defecto
    adicional: {//Agrega la llave adicional junto con la llave secundaria notas y su string.
      notas: "No se tiene información adicional del empleado",
    }
}