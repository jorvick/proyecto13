import React from "react";
import ReactPlayer from "react-player";

function Minecraft() {
  return (
    <div>
      <h1 className="home__h1-2">Minecraft</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url={require("../vid/10.mp4")}
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
            src="https://www.eltiempo.com/files/article_main_1200/uploads/2023/03/31/642756e65c75c.png"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          Minecraft es un videojuego de construcción de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson conocido comúnmente como Notch y posteriormente desarrollado por Mojang Studios actualmente parte de Microsoft.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
        <a className="inf__a" href="https://www.juegosdiarios.com/juegos/dragon-ball-fighting-3.html" target="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Minecraft;
