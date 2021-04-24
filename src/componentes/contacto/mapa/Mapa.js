import React from 'react';
 
class Mapa extends React.Component {
 
  render() {
 
    return (
 
        <div className="embed-responsive embed-responsive-4by3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15908.488970411174!2d-75.69127478114244!3d4.572051236368507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38f53085176cc1%3A0xef8a455125e5b560!2sLa%20Pola%2C%20Circasia%2C%20Quind%C3%ADo!5e0!3m2!1ses!2sco!4v1619284821549!5m2!1ses!2sco" width="600" height="450" style={{border:'0',}} allowfullscreen="" loading="lazy"></iframe>
        </div>
 
    )
    
  }
 
}
 
export default Mapa;