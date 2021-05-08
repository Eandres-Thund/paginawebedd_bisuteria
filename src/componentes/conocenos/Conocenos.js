/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';

import Titulopag from '../titulopag/Titulopag';
import Menu from '../menu/Menu';

import Accesodata from './accesodata/Accesodata';
import Empresalist from './empresalist/Empresalist';

import Footer from '../footer/Footer';

class Conocenos extends React.Component{
    render(){

        return(
            <>

            <div style={{background: '#f2f2f2',}}>
				
				<Titulopag /> {/*Se llama al componente Titulopag*/}

				<div className= "container" > {/*Se da un estilo de padding para volver mas pequeña la barra del menu*/}
					
					<Menu /> {/*Se llama al componente Menu*/}
								
				</div>

                <main role="main" className="flex-shrink-0 mt-5"> 

                    <div className="container" style={{padding: '0 60px',}}> 

                        <Accesodata />
                    
                    </div>                

                </main> 

                <Footer/> {/*Se llama al componente Footer*/}          

            </div>

            </>
        );
    }
}

export default Conocenos;