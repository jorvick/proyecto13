import React from "react";
import ReactPlayer from "react-player";

function Hair() {
  return (
    <div>
      <h1 className="home__h1-2">Hair do desingn 2</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url={require("../vid/17.mp4")}
            width="93%"
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
            src="https://img.gamepix.com/games/hair-do-design-2/cover/hair-do-design-2.webp?width=320&height=180&fit=cover&quality=90"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          Hair Do Design 2, es tu primer día en la universidad y quieres desafiarte a ti mismo para ser el mejor estilista del campus. Para hacer esto, tendrás que probar algunos estilos únicos e interesantes. Comenzarás lavando el cabello del cliente antes de intentar peinarlo. Quién sabe, ¡incluso puedes descubrir un nuevo estilo que te encantaría usar en tu propio cabello!
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
        <a className="inf__a" href="https://gameforge.com/es-CO/littlegames/hair-do-design-2/#" target="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Hair;
