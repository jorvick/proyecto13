import React from "react";
import ReactPlayer from "react-player";

function Wednesday() {
  return (
    <div>
      <h1 className="home__h1-2">Hair do desingn 2</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url={require("../vid/18.mp4")}
            width="82%"
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
            src="https://avatars.mds.yandex.net/get-games/3006389/2a0000018560511207f93fba47d7a185fb08/pjpg170x170"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          Dale el mejor estilo a Wednesday, demustra tu buen sentido de la moda
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
        <a className="inf__a" href="https://www.juegosarea.com/besties-on-wednesday.html" target="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Wednesday;
