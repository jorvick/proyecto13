import React from "react";
import ReactPlayer from "react-player";

function Broforce() {
  return (
    <div>
      <h1 className="home__h1-2">Broforce</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url="https://youtu.be/K6J5HnSLIBI"
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
            src="https://media.vandal.net/i/610x270/10-2015/20151015192512_1.jpg"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          La Broforce nombre que recibe el grupo comando al que pertenecen los personajes jugables incluye docenas de personajes que el jugador puede desbloquear rescatando el número de prisioneros de guerra necesario para cada uno. Estos personajes son, en su mayoría, parodias de héroes de acción ficticios.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
        <a className="inf__a" href="https://store.steampowered.com/app/274190/Broforce/" target="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Broforce;
