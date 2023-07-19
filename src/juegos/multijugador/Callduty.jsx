import React from "react";
import ReactPlayer from "react-player";

function Callduty() {
  return (
    <div>
      <h1 className="home__h1-2">Call OF DUTY BLACK OPS II</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url="https://youtu.be/x3tedlWs1XY"
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
            src="https://www.ozeros.com/wp-content/uploads/2012/09/callofduty-black-ops2.jpeg"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          Call of Duty: Black Ops II ofrece un sistema multijugador basado en el progreso de nivel, recompensas y personalización, manteniendo las bases de anteriores entregas, este incluye nuevos prestigios, un modo Liga único y nuevos modos de juegos que hacen del modo multijugador un modo completamente frenético según mucho de sus jugadores.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
        <a className="inf__a" href="https://store.steampowered.com/app/202970/Call_of_Duty_Black_Ops_II//" target="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Callduty;
