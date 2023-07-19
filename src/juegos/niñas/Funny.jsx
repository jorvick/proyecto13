import React from "react";
import ReactPlayer from "react-player";

function Funny() {
  return (
    <div>
      <h1 className="home__h1-2">Funny Haircut</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url="https://youtu.be/KgPHHc6ZNR4"
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
            src="https://images.crazygames.com/funny-haircut/20200623120252/funny-haircut-cover?auto=format%2Ccompress&q=75&cs=strip&w=461&ch=DPa"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          Funny Haircut es un juego de peluquería en el que les das a tus clientes cortes de pelo únicos en tu propio salón. Primero lave el cabello de su cliente y límpielo, luego use su equipo de peluquería profesional, como rulos, alisadores, secadores, tintes y laca para el cabello, para darle un peinado fresco.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
          <a className="inf__a" href="https://poki.com/es/g/funny-haircut#" target="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Funny;
