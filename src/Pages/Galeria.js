import React from "react";

function Galeria() {
  return (
    <>
      <section class="banner">
        <img src="img/banner-galeria.jpg" alt="" class="banner__img" />
        <div class="banner__content">
          Los mejores postres para deleitar tu paladar
        </div>
      </section>

      <main class="main">
        <div class="group gallery">
          <h2 class="group__title"> Nuestra galeria </h2>
          <div class="container container--flex">
            <div class="column column--50-25">
              <img
                src="img/galeria/galery1.jpg"
                alt=""
                class="gallery__img gallery__img--big"
              />
              <img
                src="img/galeria/galery2.jpg"
                alt=""
                class="gallery__img gallery__img--small"
              />
            </div>
            <div class="column column--50-25">
              <img
                src="img/galeria/galery3.jpg"
                alt=""
                class="gallery__img gallery__img--small"
              />
              <img
                src="img/galeria/galery4.jpg"
                alt=""
                class="gallery__img gallery__img--big"
              />
            </div>
            <div class="column column--50-25">
              <img
                src="img/galeria/galery5.jpg"
                alt=""
                class="gallery__img gallery__img--big"
              />
              <img
                src="img/galeria/galery6.jpg"
                alt=""
                class="gallery__img gallery__img--small"
              />
            </div>
            <div class="column column--50-25">
              <img
                src="img/galeria/galery8.jpg"
                alt=""
                class="gallery__img gallery__img--small"
              />
              <img
                src="img/galeria/galery7.jpg"
                alt=""
                class="gallery__img gallery__img--big"
              />
            </div>
          </div>
        </div>
      </main>
      </>   
  );
}

export default Galeria;
