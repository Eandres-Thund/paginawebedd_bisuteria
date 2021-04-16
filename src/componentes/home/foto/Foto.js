import React from 'react';

import Tour from '../../../assets/images/tour2021.jpg'

class Foto extends React.Component{
    render(){
        return(

            <img src={Tour} className= "mx-auto d-block img-fluid rounded" alt="Foto Izquierda home"/>
        );
    }
}

export default Foto;