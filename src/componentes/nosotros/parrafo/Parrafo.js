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
            <p className= "fuente">Ter centena quidem poteras epigrammata ferre, sed quis te ferret perlegeretque, liber?
               At nunc succincti quae sint bona disce libelli. <br/>
               Hoc primum est, breuior quod mihi charta perit;
               deinde, quod haec una peragit librarius hora, nec tantum nugis seruiet ille meis;
               tertia res haec est, quod si cui forte legeris, sis licet usque malus, non odiosus eris. <br/> 
               Te conuiua leget mixto quincunce, sed ante incipiat positus quam tepuisse calix.
               Esse tibi tanta cautus breuitate uideris? <br/>
               |Ei mihi, quam multis sic quoque longus eris!
            </p>
        );
    };
}

export default Parrafo;