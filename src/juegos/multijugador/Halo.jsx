import React from "react";
import ReactPlayer from "react-player";

function Halo() {
  return (
    <div>
      <h1 className="home__h1-2">HALO INFINITE</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url="https://youtu.be/PyMlV5_HRWk"
            width="100%"
            height="78%"
            controls
            playing
            volume="0.5"
            loop
          />
        </div>
        <div className="contenedor__img">
          <img
            className="img__c"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/header.jpg?t=1683115079"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          Halo Infinite es un videojuego de disparos en primera persona de la franquicia de videojuegos de ciencia ficción creada por Bungie Studios y actualmente desarrollada por 343 Industries. Es exclusivo para las plataformas Xbox One, Microsoft Windows y Xbox Series X|S.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
        <a className="inf__a" href="https://store.steampowered.com/app/1240440/Halo_Infinite/" target="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Halo;
