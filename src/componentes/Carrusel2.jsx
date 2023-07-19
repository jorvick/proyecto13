import React from "react";
import Slideshow from "../Slideshow";
import { Slide } from "../Slideshow";
import { TextoSlide } from "../Slideshow";


function Carrusel2() {
  return (
    <main>
      <p>segundo</p>
      <Slideshow>
        <Slide>
          <a href="Undertale">
            <img
              src="https://e1.pxfuel.com/desktop-wallpaper/837/268/desktop-wallpaper-5-undertale-undertale.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <p>40% discount</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Concert2">
            <img
              src="https://images.crazygames.com/k-pop-new-year-s-concert-2/20211229182024/k-pop-new-year-s-concert-2-cover?auto=format%2Ccompress&q=75&cs=strip&w=461&ch=DPR"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <p>Free game</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Broforce">
            <img
              src="https://media.vandal.net/i/610x270/10-2015/20151015192512_1.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <p>60% discount</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Hollow">
            <img
              src="https://monkeygamer.es/wp-content/uploads/2019/03/capsule_616x353.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <p>25% discount</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Fashion">
            <img
              src="https://images.crazygames.com/tictoc-kpop-fashion/20220727085336/tictoc-kpop-fashion-cover?auto=format%2Ccompress&q=75&cs=strip&w=461&ch=DPR"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <p>Free game</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Minecraft">
            <img
              src="https://www.eltiempo.com/files/article_main_1200/uploads/2023/03/31/642756e65c75c.png"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <p>45% discount</p>
          </TextoSlide>
        </Slide>
      </Slideshow>
    </main>
  );
}

export default Carrusel2;
