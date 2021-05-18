/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';

//Estilos
import '../../assets/css/styleFooter.css';

class Footer extends React.Component { //Esta funcion crea un pequeño footer al final de cada pagina

    render() {

        return (

            <footer className = "container"> {/*Se crea la etiqueta footer con clase container*/}
                <hr/> {/*Linea del footer*/}
                <div className="content-footer"> {/*div padre de la lista no ordenada*/}
                    <ul className="sci"> {/*ul que contiene los items de la lista y los enlaces, en forma de iconos*/}
                        <li><a href="https://es-la.facebook.com/" target="_blank"><span className="iconify icon:simple-icons:facebook icon-inline:true"></span></a></li>
                        <li><a href="https://twitter.com/?lang=es" target="_blank"><span className="iconify icon:simple-icons:twitter icon-inline:true"></span></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><span className="iconify icon:simple-icons:instagram icon-inline:true"></span></a></li>
                    </ul>
                </div>
            </footer>

        )

    }

}

export default Footer;