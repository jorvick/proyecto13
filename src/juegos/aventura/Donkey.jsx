import React from "react";
import ReactPlayer from "react-player";

function Donkey() {
  return (
    <div>
      <h1 className="home__h1-2">Donkey kong</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url={require("../vid/6.mp4")}
            width="90%"
            height="100%"
            controls
            playing
            volume="0.5"
            loop
          />
        </div>
        <div className="contenedor__img">
          <img
            className="img__c"
            src="https://assets1.ignimgs.com/2019/06/09/donkey-kong-country-1---button-v1-1560099410346.jpg?width=300&crop=1%3A1%2Csmart"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          Donkey Kong Country, llamado Super Donkey Kong (en japonés: スーパードンキーコング) originalmente en Japón, es un videojuego desarrollado por la compañía Rare y Nintendo, que incluye la descendencia del popular personaje de videojuegos, Donkey Kong.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
        <a className="inf__a" href="https://www.nintendo.com/es-co/store/products/donkey-kong-country-tropical-freeze-switch/" arget="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Donkey;
