import React from "react";
import ReactPlayer from "react-player";

function Sweetdoll() {
  return (
    <div>
      <h1 className="home__h1-2">Dress Up Sweet Doll</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url="https://youtu.be/_iwGTkzFXKI"
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
            src="https://is5-ssl.mzstatic.com/image/thumb/Purple116/v4/ed/2e/fa/ed2efa0f-dd02-2011-ec71-2ebf44a95c30/e137299f-0191-421b-8b3c-73b6b5475e3b_2_1242x2208.png/750x750bb.jpeg"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          ¡Puedes vestir a tu muñeca como una superestrella, convertirla en princesa o enviarla a la escuela! Siempre que quieras, puedes vestirla con cualquier estilo y disfrutar realmente del tiempo de maquillaje ASMR.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
        <a className="inf__a" href="https://cookieclickercity.com/dress-up-sweet-doll" target="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Sweetdoll;
