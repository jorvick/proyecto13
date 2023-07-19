import React from "react";
import ReactPlayer from "react-player";

function Mortal() {
  return (
    <div>
      <h1 className="home__h1-2">Mortal Kombat </h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url={require("../vid/22.mp4")}
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
            src="https://www.latercera.com/resizer/wh7nUeb56UfsO2IJLKwfVWNrmvM=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/HWW2NZ62SFARBNTLBEMLHUQIEU.jpg"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          Mortal Kombat es una franquicia de videojuegos de lucha creada por Ed Boon y John Tobias en 1992. Las cuatro primeras entregas fueron distribuidas por Midway Games y lanzadas principalmente en máquinas arcade; posteriormente estuvieron disponibles en consolas domésticas.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
        <a className="inf__a" href="https://store.steampowered.com/app/976310/Mortal_Kombat11/" target="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Mortal;
