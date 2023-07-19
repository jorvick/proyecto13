import React from "react";
import ReactPlayer from "react-player";

function Fashion() {
  return (
    <div>
      <h1 className="home__h1-2">Tic tok K-pop #fashion</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url={require("../vid/16.mp4")}
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
            src="https://images.crazygames.com/tictoc-kpop-fashion/20220727085336/tictoc-kpop-fashion-cover?auto=format%2Ccompress&q=75&cs=strip&w=461&ch=DPR"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          TicToc KPop Fashion es un juego de simulación en el que ayudas a uno de tus amigos a convertirse en una estrella en una famosa plataforma de redes sociales. Ayúdala a preparar publicaciones inolvidables eligiendo el maquillaje y la ropa adecuados.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
        <a className="inf__a" href="https://poki.com/es/g/tictoc-kpop-fashion" target="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Fashion;
