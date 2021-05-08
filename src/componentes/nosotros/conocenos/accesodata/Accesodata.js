//Propias de react
import React from 'react';

//Componentes
import Empresalist from '../empresalist/Empresalist'; //data
import Tarjetainfo from '../tarjetainfo/Tarjetainfo';

/***************************************/
/************* Funciones ***************/
/***************************************/

//Funcion mostrarAdicional
function mostrarAdicional(adicional) { //Esta funcion muestra en una ventana de alerta la informacion guardada
                                       //en data en la llave adicional.
  const alertInformacion = Object.entries(adicional) // El método devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado.
                                        //// [ ['notas', 'texto..'], ['link', 'url'] ]
    .map(informacion => `${informacion[0]}: ${informacion[1]}`)
    .join('\n'); //Agrega un salto de linea si la info adicional contiene mas de una llave hija.

  alert(alertInformacion); //Muesta la informacion en una ventana de alerta propio del navegador.
};

function Accesodata() {
  
  return(

    <div className= "fondo"> {/*Se llama la clase fondo del styleTarjetainfo.css*/}
        
        <div className= 'box'>
            
            {/*.map crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos */}
            {Empresalist.map(empleado => (<Tarjetainfo
                                    key={empleado.nombre} nombre={empleado.nombre} cargo={empleado.cargo}
                                    estudios={empleado.estudios} edad={empleado.edad} comida={empleado.comida}
                                    urlImg={empleado.urlImg} adicional={empleado.adicional} 
                                    mostrarAdicional={mostrarAdicional} />) 
                    ) 
            } 
            {/*Se llama el componente Tarjetainfo, con la ruta del valor de cada llave de Empresalist.js*/}
        </div>
    </div>

  );

}

export default Accesodata;