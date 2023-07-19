import React from "react";
import ReactPlayer from "react-player";

function Freddys() {
  return (
    <div>
      <h1 className="home__h1-2">Five Nights at Freddy's</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url={require("../vid/19.mp4")}
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
            src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/04/five-nights.jpg?tf=1200x"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          Five Nights at Freddy's es una franquicia de medios basada en una serie de videojuegos de terror independientes, creada, diseñada, desarrollada y publicada por Scott Cawthon. La serie se centra en la historia de un restaurante llamado Freddy Fazbear's Pizza.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
        <a className="inf__a" href="https://store.steampowered.com/app/319510/Five_Nights_at_Freddys/?l=spanish" target="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Freddys;
