import React from 'react'
import '../css/nosotros.css'
function Nosotros() {
  return (
    <main className="main">
    <section className="group group--color">
        <div className="container">
            <h2 className="main__title">Sobre nosotros</h2>
            <p className="main__text">Somos una empresa peruana que convierte momentos familiares en únicos y especiales, elaborando postres con ingredientes naturales y frescos, basados en recetas mejoradas al estilo casero y preparadas con mucho amor y dedicación.</p>
        </div>

    </section>
    <section className="group our-team">
        <h2 className="group__title">Nuestro equipo</h2>
        <div className="container container--flex">
            <div className="column column--33">
                <h3 className="our-team__title">Alexa</h3>
                <img src="img/chef1.jpg" alt="" className="our-team__img" />
                <p className="our-team__txt">Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Sint fugit aliquid 
                    quidem nam non impedit, nesciunt optio recusandae 
                    modi sapiente iste id vitae labore. Perspiciatis 
                    vitae consequuntur debitis architecto nam!</p>
            </div>
            <div className="column column--33">
                <h3 className="our-team__title">Esteben</h3>
                <img src="img/chef2.jpg" alt="" className="our-team__img" />
                <p className="our-team__txt">Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Sint fugit aliquid 
                    quidem nam non impedit, nesciunt optio recusandae 
                    modi sapiente iste id vitae labore. Perspiciatis 
                    vitae consequuntur debitis architecto nam!</p>
            </div>
            <div className="column column--33">
                <h3 className="our-team__title">Kamila</h3>
                <img src="img/chef3.jpg" alt="" className="our-team__img" />
                <p className="our-team__txt">Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Sint fugit aliquid 
                    quidem nam non impedit, nesciunt optio recusandae 
                    modi sapiente iste id vitae labore. Perspiciatis 
                    vitae consequuntur debitis architecto nam!</p>
            </div>
        </div>   
    </section>
  </main>
  )
}

export default Nosotros