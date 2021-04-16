import React from 'react';

import Tour from '../../../assets/images/tour2021.jpg'

class Imagenes extends React.Component{
    render(){

        return(
            
            <div className= "row">
                <div className= "col-lg-4">
                    <img src={Tour} className= "mx-auto d-block img-fluid rounded" alt="Imagen Izquierda home"/>
                </div>

                <div className= "col-lg-4">
                    <img src={Tour} className= "mx-auto d-block img-fluid rounded" alt="Imagen centro home"/>
                </div>

                <div className= "col-lg-4">
                    <img src={Tour} className= "mx-auto d-block img-fluid rounded" alt="Imagen derecha home"/>
                </div>

            </div>
        );
    };
}

export default Imagenes;