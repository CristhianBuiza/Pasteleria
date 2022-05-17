import React from "react";

import { NavLink } from "react-router-dom";
function Menu() {
  return (
    <nav className="main-nav">
      <div className="container container--flex">
        <span className="icon-menu" id="btnmenu"></span>
        <ul className="menu" id="menu">
          <li className="menu__item">
            <NavLink to="/" className="menu__link menu__link">
              Inicio
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/nosotros" className="menu__link">
              Nosotros
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/galeria" className="menu__link">
              Galeria
            </NavLink>
          </li>
          <li className="menu__item">
            <a href="/contacto" className="menu__link">
              Contacto
            </a>
          </li>
        </ul>
        <div className="social-icon">
          <a
            href="https://www.facebook.com/fabuchi.tortas/"
            className="social-icon__link"
          >
            <span className="icon-facebook"></span>
          </a>
          <a href="" className="social-icon__link">
            <span className="icon-twitter"></span>
          </a>
          <a href="" className="social-icon__link">
            <span className="icon-mail"></span>
          </a>
          <a
            href="https://www.instagram.com/fabuchi.tortas/"
            className="social-icon__link"
          >
            <span className="icon-instagram"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
