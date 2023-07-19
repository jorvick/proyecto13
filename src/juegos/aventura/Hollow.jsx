import React from "react";
import ReactPlayer from "react-player";

function Hollow() {
  return (
    <div>
      <h1 className="home__h1-2">Hollow knight</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url={require("../vid/4.mp4")}
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
            src="https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg?t=1667006028"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          Hollow Knight es una aventura de acción clásica en 2D ambientada en un vasto mundo interconectado. Explora cavernas tortuosas, ciudades antiguas y páramos mortales. Combate contra criaturas corrompidas, haz nuevas amistades con extraños insectos y resuelve los antiguos misterios que yacen en el corazón del reino.
          </h1>
        </div>
      </div>
      <form>
      <fieldset className="div__nav-button-2">
          <a className="inf__a" href="https://store.steampowered.com/app/367520/Hollow_Knight/" arget="_blank" rel="noopener noreferrer">
            Descargar
          </a>

        </fieldset>
      </form>
    </div>
  );
}

export default Hollow;
