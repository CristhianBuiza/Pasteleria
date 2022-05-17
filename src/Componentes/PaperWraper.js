import React from 'react'
import Header from './Header';
import Menu from './Menu';
import {Link} from 'react-router-dom';
function PaperWraper(props) {
  return (
    <body>
        <Header nombre="Fabuchi Tortas" numero="999-999-999" direccion="Urb Las Dunas 123 - Cercado de Lima, Peru." ></Header>
        <Menu></Menu>
        {props.children}
        <footer className="main-footer">
          <div className="container container--flex">
            <div className="column column--33">
              <h2 className="column__title">¿Por que visitarnos?</h2>
              <p className="column__txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi blanditiis, ratione, tempora non nemo alias deleniti, distinctio debitis laboriosam incidunt fugit in nobis ut? Hic necessitatibus debitis atque at.</p>
            </div>
            <div className="column column--33">
              <h2 className="column__title">Contactanos</h2>
              <p className="column__txt">Urb Las Dunas 123 - Cercado de Lima, Peru.</p>
              <p className="column__txt">Telefono: 999-999-999</p>
              <p className="column__txt">consultas@youpasteleria.com</p>
            </div>
            <div className="column column--33">
              <h2 className="column__title">Siguenos en nuestras redes</h2>
              <p className="column__txt"><a href="https://www.instagram.com/fabuchi.tortas/" className="icon-facebook"></a>Facebook</p>
              <p className="column__txt"><a href="" className="icon-twitter"></a>Siguenos en Twitter</p>
              <p className="column__txt"><a href="" className="icon-youtube"></a>Siguenos en nuestro canal</p>
            </div>
            <p className="copy">© 2022 Your Pasteleria | Todos los derechos reservados</p>
          </div>
        </footer>
        <script src="js/menu.js"></script>
        <script src="js/model.js"></script>
    </body>
  )
}

export default PaperWraper