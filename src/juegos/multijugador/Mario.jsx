import React from "react";
import ReactPlayer from "react-player";

function Mario() {
  return (
    <div>
      <h1 className="home__h1-2">Super Smash Bros. ultimate</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url="https://youtu.be/WShCN-AYHqA"
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
            src="https://esports.as.com/2019/01/22/super-smash-bros/Super-Smash-Bros-Ultimate-Norteamerica_1211588837_128681_1440x600.jpg"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          Al contrario que en los juegos de lucha tradicionales, el objetivo en Super Smash Bros. Ultimate consiste en lanzar al rival fuera del escenario y de la pantalla. Utiliza todo tipo de ataques para que el oponente acumule daño y después lánzalo fuera del escenario.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
        <a className="inf__a" href="https://www.nintendo.com/es-co/store/products/super-smash-bros-ultimate-switch/" target="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Mario;
