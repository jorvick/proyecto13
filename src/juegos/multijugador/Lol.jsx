import React from "react";
import ReactPlayer from "react-player";
import "./Lol.css";

function Lol() {
  return (
    <div>
      <h1 className="home__h1-2">League of Legend</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url={require("../vid/7.mp4")}
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
            src="https://notagamer.net/wp-content/uploads/2023/01/Saint-League-of-Legends.jpeg"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          League of Legends es un juego de estrategia por equipos en el que dos equipos conformados por cinco poderosos campeones se enfrentan para destruir la base del otro. Elige de entre más de 140 campeones para realizar jugadas épicas, asegurar asesinatos y destruir torretas mientras avanzas hacia la victoria.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
          <a className="inf__a" href="https://signup.leagueoflegends.com/es-ar/signup/redownload?locale_referrer=es_MX" target="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Lol;
