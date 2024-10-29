import React, { useState } from "react";
import './App.css';
import Button from "./Button";

const Gallery = () => {
  const fotos = [
    '../src/assets/poster01.png',
    '../src/assets/poster02.png',
    '../src/assets/poster03.png'
  ];

  const [imagenActual, setImagenActual] = useState(fotos[0]);

  const mostrarFoto1 = () => setImagenActual(fotos[0]);
  const mostrarFoto2 = () => setImagenActual(fotos[1]);
  const mostrarFoto3 = () => setImagenActual(fotos[2]);

  return (
    <div className="gallery">
      <h2>Ver distintas películas</h2>
      <div className="row">
        <Button handleClick={mostrarFoto1} text="Ver El Padrino" />
        <Button handleClick={mostrarFoto2} text="Ver Pulp Fiction" />
        <Button handleClick={mostrarFoto3} text="Ver Scarface" />
      </div>
      <img src={imagenActual} alt="Poster de película" width="350" height="500" />
    </div>
  );
}

export default Gallery;
