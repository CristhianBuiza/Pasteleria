import React from 'react'

function Header({ nombre, numero, direccion }) {
  return (
    <header class="main-header">
    <div class="container container--flex">
      <div class="logo-container column column--50">
        <h1 class="logo"> {nombre} </h1>
      </div>
      <div class="main-header__contactInfo column column--50">
        <p class="main-header__contactInfo__phone">
          <span class="icon-phone">{numero}</span>
        </p>
        <p class="main-header__contactInfo__address">
          <span class="icon-location">{direccion}</span>
        </p>
      </div>
    </div>
  </header>
  )
}

export default Header