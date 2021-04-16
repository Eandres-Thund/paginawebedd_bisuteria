/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';

class Footer extends React.Component { //Esta funcion crea un pequeño footer al final de cada pagina

    render() {

        return (

            <footer className = "container" > {/*Se crea la etiqueta footer con clase container*/}
                <hr/> {/*Linea del footer*/}
                <p className = "float-right"><a href = "#" > Subir </a></p> {/*Se crea un link dentro de un parrafo ubicado al lado izquierdo del footer*/}
                <p> &copy; {(new Date().getFullYear())} Mi Proyecto, Inc. &middot; <a href = "#" > Política de Privacidad </a> &middot; <a href="#">Términos</a ></p> {/*Crea el contenido del footer*/}
            </footer>

        )

    }

}

export default Footer;