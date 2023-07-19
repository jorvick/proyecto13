import React from "react";
import ReactPlayer from "react-player";

function Zelda() {
  return (
    <div>
      <h1 className="home__h1-2">The legend of Zelda</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url={require("../vid/1.mp4")}
            width="100%"
            height="78%"
            //controls es para que pueda reproducir el video
            controls
            //playing es para que el video tengo autoplay
            playing
            //volume es para controlar el volumen
            volume="0.5"
            //muted sirve para mutear el video
            //muted
            //loop sirve para que el video se reprodusca infinitamente
            loop
          />
        </div>
        <div className="contenedor__img">
          <img
            className="img__c"
            src="https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2014/05/the-legend-of-zelda-games-minish-cap-wallpaper-HD.jpg?w=1920&ssl=1"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
            Hace muchos años... El mundo de los hombres estuvo a punto de
            sumergirse en las tinieblas... Pero los minish bajaron del cielo
            para ayudarles y le dieron la luz dorada y una espada a uno de sus
            héroes. Y el héroe venció a la oscuridad... Los hombres recuperaron
            la paz y guardaron la espada como un tesoro.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
          <a className="inf__a"
            href="https://www.nintendo.es/Juegos/Game-Boy-Advance/The-Legend-of-Zelda-The-Minish-Cap-267486.html#Informaci_n" target="_blank" rel="noopener noreferrer"
          >
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Zelda;
