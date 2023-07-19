import React from 'react';
import Slideshow from "../Slideshow";
import { Slide } from "../Slideshow";
import { TextoSlide } from "../Slideshow";

function Prueba() {
  return (
    <main>
    <p>Categorias</p>
        <Slideshow>
        <Slide>
          <a href="Aventura">
            <img
              src="https://www.hd-tecnologia.com/imagenes/articulos/2022/04/Top-10-de-los-mejores-juegos-de-aventura.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide colorFondo="rgba(31,112,66,.5)">
            <p>Aventura</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Niñas">
            <img
              src="https://ibi.gsstatic.es/sfAttachPlugin/1828549.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide colorFondo="rgba(255,0,128,.5)">
            <p>Para niñas</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Multijugador">
            <img
              src="https://www.dexerto.es/cdn-cgi/image/width=640,quality=75,format=auto/https://editors.dexerto.es/wp-content/uploads/sites/3/2022/12/28/juegos-multijugador.jpeg"
              alt="no imagen"
            />
          </a>
          <TextoSlide colorFondo="rgba(0, 0, 255,.5)">
            <p>Multijugador</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Terror">
            <img
              src="https://sm.ign.com/t/ign_es/screenshot/default/top12besthorrorgamespc-blogroll-1634151240868_8p9t.1280.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide colorFondo="rgba(155,155,155,.5)">
            <p>Terror</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Pelea">
            <img
              src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/12/juegos-lucha.jpg?tf=1200x"
              alt="no imagen"
            />
          </a>
          <TextoSlide colorFondo="rgba(255, 0, 0,.5)">
            <p>Pelea</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Accion">
            <img
              src="https://f.rpp-noticias.io/2019/12/28/videojuegos_880873.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide colorFondo="rgba(255, 102, 0,.5)">
            <p>Accion</p>
          </TextoSlide>
        </Slide>
      </Slideshow>
    </main>
  )
}

export default Prueba