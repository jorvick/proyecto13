import React from "react";
import ReactPlayer from "react-player";

function Concert2() {
  return (
    <div>
      <h1 className="home__h1-2">K-pop new years concert 2</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url="https://youtu.be/G2WzH2aLJmg"
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
            src="https://images.crazygames.com/k-pop-new-year-s-concert-2/20211229182024/k-pop-new-year-s-concert-2-cover?auto=format%2Ccompress&q=75&cs=strip&w=461&ch=DPR"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          la banda de K-pop más famosa del momento va a entretener a la reunión con sus geniales canciones, y estas mejores amigas están ansiosas por ver actuar a las chicas BlackPink. Tienen los boletos, y solo necesitan la apariencia adecuada, ¡y aquí es donde puedes ayudarlos! ¡Prepárense para demostrar sus habilidades de estilista, damas, y consíganles el aspecto correcto inspirado en BlackPink mientras juegan.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
        <a className="inf__a" href="https://www.1001juegos.com/juego/k-pop-new-years-concert" target="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Concert2;
