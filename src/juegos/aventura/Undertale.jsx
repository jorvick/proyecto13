import React from "react";
import ReactPlayer from "react-player";

function Undertale() {
  return (
    <div>
      <h1 className="home__h1-2">Undertale</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url={require("../vid/3.mp4")}
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
            src="https://e1.pxfuel.com/desktop-wallpaper/837/268/desktop-wallpaper-5-undertale-undertale.jpg"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          Undertale es un juego de rol que utiliza una perspectiva de arriba hacia abajo. En el juego, los jugadores controlan a un niño y completan objetivos para avanzar en la historia. Los jugadores exploran un mundo subterráneo lleno de pueblos y cuevas donde deben resolver numerosos acertijos en su viaje.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
        <a className="inf__a"
            href="https://store.steampowered.com/app/391540/Undertale/" target="_blank" rel="noopener noreferrer"
          >
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Undertale;
