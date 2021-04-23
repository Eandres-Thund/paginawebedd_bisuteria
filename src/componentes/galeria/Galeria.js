/***************************************/
/*********** Importaciones *************/
/***************************************/

//Propias de react
import React from 'react';

//Componentes
import Titulopag from '../titulopag/Titulopag';
import Menu from '../menu/Menu';

class Galeria extends React.Component{

    render(){
        return(

            <>

            <Titulopag /> {/*Se llama al componente Titulopag*/}

            <div className= "container" style={{padding: '0 300px',}}> {/*Se da un estilo de padding para volver mas pequeña la barra del menu*/}
    
                <Menu /> {/*Se llama al componente Menu*/}
                
            </div>

            </>
        );
    };
}

export default Galeria;