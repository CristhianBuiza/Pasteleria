import React from 'react'
import GaleriaItem from '../Componentes/GaleriaItem';

function Inicio() {
    const galeria = [
        {id:1, img: 'img/plate1.jpg', titulo: 'Especial de la Casa', precio: '45.00'},
        {id:2, img: 'img/plate2.jpg', titulo: 'Especial de la Casa', precio: '45.00'},
        {id:3, img: 'img/plate3.jpg', titulo: 'Especial de la Casa', precio: '45.00'},
        {id:4, img: 'img/plate4.jpg', titulo: 'Especial de la Casa', precio: '45.00'},
        {id:5, img: 'img/plate5.jpg', titulo: 'Especial de la Casa', precio: '45.00'},
        {id:6, img: 'img/plate6.jpg', titulo: 'Especial de la Casa', precio: '45.00'},
        {id:7, img: 'img/plate7.jpg', titulo: 'Especial de la Casa', precio: '45.00'},
        {id:8, img: 'img/plate8.jpg', titulo: 'Especial de la Casa', precio: '45.00'},
        {id:9, img: 'img/plate9.jpg', titulo: 'Especial de la Casa', precio: '45.00'},
        {id:10,img: 'img/plate10.jpg', titulo: 'Especial de la Casa', precio: '45.00'},
        {id:11,img: 'img/plate11.jpg', titulo: 'Especial de la Casa', precio: '45.00'},
        {id:12,img: 'img/plate12.jpg', titulo: 'Especial de la Casa', precio: '45.00'},
        ]
  return (
    <>
       
        <section class="banner">
          <img src="img/banner.jpg" alt="" class="banner__img"/>
            <div class="banner__content">Fabuchi comprometidos a brindarte lo mejor, con mucho amor y pasion en cada pastel</div>
        </section>
        <main class="main">
          <section class="group group--color">
            <div class="container">
              <h2 class="main__title">Bienvenidos a su pasteleria</h2>
              <p class="main__text">Somos una empresa peruana que convierte momentos familiares en únicos y especiales, elaborando postres con ingredientes naturales y frescos, basados en recetas mejoradas al estilo casero y preparadas con mucho amor y dedicación.</p>
            </div>
          </section>
          <section class="group main__about__description">
            <div class="container container--flex">
              <div class="column column--50">
                <img src="img/food1.jpg" alt=""/>
              </div>
              <div class="column column--50">
                <h3 class="column__title">Expertise In Industrial</h3>
                <p class="column__txt">Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Doloremque
                  distinctio fugiat enim veritatis corrupti soluta
                  assumenda illo! Rem eius sequi ut voluptatum
                  perferendis nam fugiat excepturi in impedit.
                  Modi, nobis!</p>
                <a href="" class="btn btn--contact">Contact</a>
              </div>
            </div>
          </section>

          <section class="group today-special">
            <h2 class="group__title">Especial del Dia</h2>
            <div class="container container--flex">
              
              {galeria.map(item => (
                <GaleriaItem img={item.img} titulo={item.titulo} precio={item.precio} ></GaleriaItem>
              ))}
              
            </div>
          </section>
        </main> 
  
    </>
  )
}

export default Inicio