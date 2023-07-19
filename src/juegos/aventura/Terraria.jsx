import React from "react";
import ReactPlayer from "react-player";

function Terraria() {
  return (
    <div>
      <h1 className="home__h1-2">Terraria</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url="https://youtu.be/6nUvWkD8rAE"
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
            src="https://images.g2a.com/1024x768/1x1x0/terraria-steam-gift-europe-i10000000238023/591065f6ae653a5dcf684dca"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          Terraria es un videojuego de mundo abierto en 2D. Contiene elementos de construcción, exploración, aventura y combate, es un mundo abierto de muchas horas ya que presenta muchos jefes y muchas tematicas para no aburrirte,tambien sirve para jugar en multiplayer, con esto tendras una aventura completa con tus amigos.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
          <a
            className="inf__a"
            href="https://store.steampowered.com/app/105600/Terraria/?l=spanish" target="_blank" rel="noopener noreferrer"
          >
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Terraria;
