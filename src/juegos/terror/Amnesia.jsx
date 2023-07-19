import React from "react";
import ReactPlayer from "react-player";

function Amnesia() {
  return (
    <div>
      <h1 className="home__h1-2">Amnesia</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url="https://youtu.be/u1nY_5-UrY4"
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
            src="https://i0.wp.com/www.techarp.com/wp-content/uploads/2020/05/Amnesia-Dark-Descent-free-game.jpg?resize=1024%2C512&ampssl=1"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          Amnesia: The Dark Descent es un videojuego de terror con toques de ciencia ficción desarrollado y lanzado exclusivamente para PC en 2010 y relanzado en 2018 en un recopilatorio llamado Amnesia Collection para PlayStation 4 y Xbox One.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
        <a className="inf__a" href="https://store.steampowered.com/app/57300/Amnesia_The_Dark_Descent/" target="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Amnesia;
