/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';

//Componentes
import Titulopag from '../titulopag/Titulopag';
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';

//Estilo
import '../../assets/css/styleGaleria.css';

class Galeria extends React.Component{

    render(){
        return(

            <>

            <Titulopag /> {/*Se llama al componente Titulopag*/}

            <div className= "container"> {/*Se da un estilo de padding para volver mas pequeña la barra del menu*/}
    
                <Menu /> {/*Se llama al componente Menu*/}
                
            </div>

            <main role="main" className="flex-shrink-0 mt-5">
                <div className="container" style={{padding: '0 60px',}}>
                    <div className= "pendientes">
                        <h2 className= "fuente" id= "pendientes">Pendientes</h2>
                        <div className= "row">
                            
                            <div className= "col-md-3" id="fila-1-pendientes">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen izquerda fila 1 pendientes galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            <div className= "col-md-3" id="fila-1-pendientes">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen izquerda centro fila 1 pendientes galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            <div className="col-md-3" id="fila-1-pendientes">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen derecha centro fila 1 pendientes galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            <div className="col-md-3" id="fila-1-pendientes">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen derecha fila 1 pendientes galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            
                        </div>

                        <div className= "row mt-4" id= "fila-2">
                            
                            <div className="col-md-3" id="fila-2-pendientes">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen izquerda fila 2 pendientes galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            <div className="col-md-3" id="fila-2-pendientes">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen izquerda centro fila 2 pendientes galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            <div className="col-md-3" id="fila-2-pendientes">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen derecha centro fila 2 pendientes galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            <div className="col-md-3" id="fila-2-pendientes">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen derecha fila 2 pendientes galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            
                        </div>
                    </div>

                    <hr/>

                    <div className= "manillas">
                        <h2 className= "fuente" id= "manillas">Manillas</h2>
                        <div className= "row">
                            
                            <div className= "col-md-3" id= "fila-1-manillas">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen izquerda fila 1 manillas galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            <div className= "col-md-3" id= "fila-1-manillas">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen izquerda centro fila 1 manillas galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            <div className="col-md-3" id= "fila-1-manillas">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen derecha centro fila 1 manillas galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            <div className="col-md-3" id= "fila-1-manillas">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen derecha fila 1 manillas galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            
                        </div>

                        <div className= "row mt-4">
                            
                            <div className="col-md-3" id= "fila-2-manillas">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen izquerda fila 2 manillas galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            <div className="col-md-3" id= "fila-2-manillas">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen izquerda centro fila 2 manillas galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            <div className="col-md-3" id= "fila-2-manillas">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen derecha centro fila 2 manillas galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            <div className="col-md-3" id= "fila-2-manillas">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen derecha fila 2 manillas galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            
                        </div>
                    </div>
                    
                    <hr/>

                    <div className= "collares">
                        <h2 className= "fuente" id= "collares">Collares</h2>
                        <div className= "row">
                            
                            <div className= "col-md-3" id= "fila-1-collares">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen izquerda fila 1 collares galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            <div className= "col-md-3" id= "fila-1-collares">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen izquerda centro fila 1 collares galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            <div className="col-md-3" id= "fila-1-collares">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen derecha centro fila 1 collares galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            <div className="col-md-3" id= "fila-1-collares">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen derecha fila 1 collares galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            
                        </div>

                        <div className= "row mt-4">
                            
                            <div className="col-md-3" id= "fila-2-collares">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen izquerda fila 2 collares galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            <div className="col-md-3" id= "fila-2-collares">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen izquerda centro fila 2 collares galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            <div className="col-md-3" id= "fila-2-collares">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen derecha centro fila 2 collares galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            <div className="col-md-3" id= "fila-2-collares">
                                <img src= {process.env.PUBLIC_URL + 'imagenes/tour2021.jpg'} className= "mx-auto d-block img-fluid rounded" alt="Imagen derecha fila 2 collares galeria"/> {/*Se añaden clases para centrar horizontalmente, ancho de 100%, altura:auto y punta redonda*/}
                            </div>
                            
                        </div>
                    </div>

                </div>
            </main>

            <Footer/> {/*Se llama al componente Footer*/}

            </>
        );
    };
}

export default Galeria;