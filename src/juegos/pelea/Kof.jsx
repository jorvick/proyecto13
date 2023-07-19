import React from "react";
import ReactPlayer from "react-player";

function Kof() {
  return (
    <div>
      <h1 className="home__h1-2">The King of Fighters</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url={require("../vid/21.mp4")}
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
            src="https://static.13.cl/7/sites/default/files/esports/articulos/field-image/portadakof15.jpg"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          The King of Fighters, abreviada KOF, y traducida como El rey de los luchadores, es una saga de videojuegos de lucha inicialmente para el sistema Neo Geo desarrollada por la compañía SNK.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
        <a className="inf__a" href="https://store.steampowered.com/app/2193910/KOF_XV_Fighter_Pass/" target="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Kof;
