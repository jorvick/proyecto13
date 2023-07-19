import React from "react";
import ReactPlayer from "react-player";

function Lastisland() {
  return (
    <div>
      <h1 className="home__h1-2">Last Island of Survival- Unknown 15 Days</h1>
      <div className="contenedor">
        <div className="contenedor__vid">
          <ReactPlayer
            url="https://youtu.be/5OUa59ve_GY"
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
            src="https://gametarget.ru/wp-content/uploads/2021/03/last-island-of-survival-unknown-gt-375x211.jpg"
            alt="sorry no img"
          />
        </div>
        <div className="contenedor__inf">
          <h1 className="inf__h1">
          Last Island of Survival te lleva a una isla post-apocalíptica ocupada por los muertos vivientes. Jugarás como uno de los últimos humanos en la carrera por sobrevivir. Además de matar zombis espantosos, también tendrás que soportar el hambre y el agotamiento mientras buscas comida, armas y otros recursos.
          </h1>
        </div>
      </div>
      <form>
        <fieldset className="div__nav-button-2">
        <a className="inf__a" href="https://play.google.com/store/apps/details?id=com.herogame.gplay.lastdayrulessurvival&hl=en_US" target="_blank" rel="noopener noreferrer">
            Descargar
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Lastisland;
