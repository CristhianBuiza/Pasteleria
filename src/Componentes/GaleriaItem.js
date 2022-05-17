import React from "react";

function GaleriaItem({img, titulo, precio}) {
  return (
    <div class="column column--50-25">
      <img src={img} alt="" class="today-special__img" />
      <div class="today-special__title">{titulo}</div>
      <div class="today-special__price">${precio}</div>
    </div>
  );
}

export default GaleriaItem;
