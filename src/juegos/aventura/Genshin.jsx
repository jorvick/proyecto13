import React from "react";
import ReactPlayer from "react-player";

function Genshin() {
  return (
    <div>
      <h1 className="home__h1-2">Genshin impact</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url={require("../vid/5.mp4")}
            width="100%"
            height="79%"
            controls
            playing
            volume="0.5"
            loop
          />
        </div>
        <div className="contenedor__img">
          <img
            className="img__c"
            src="https://imgeucdn.gamespress.com/cdn/files/Games%20Press/2022/07/021318-bb2ab14d/Key_art_EN.png?w=533&mode=max&otf=y&quality=90&format=png&bgcolor=transparent&ex=2023-08-01+03%3A00%3A00&sky=570562e77037b2c5e2612d27916aa19f9e24d6b8f921f18410411fa38a69278f"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          Genshin Impact es un JRPG gratuito de mundo abierto en el que podremos explorar un mundo vasto lleno de mazmorras, secretos y aventuras que vivir.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
        <a className="inf__a" href="https://genshin.hoyoverse.com/es/home" arget="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Genshin;
