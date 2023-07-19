import React from "react";
import Slideshow from "../Slideshow";
import { Slide } from "../Slideshow";
import { TextoSlide } from "../Slideshow";

function Carrusel1() {
  return (
    <main>
      <Slideshow>
        <Slide>
          <a href="Zelda">
            <img
              src="https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2014/05/the-legend-of-zelda-games-minish-cap-wallpaper-HD.jpg?w=1920&ssl=1"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <p>15% discount</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Funny">
            <img
              src="https://images.crazygames.com/funny-haircut/20200623120252/funny-haircut-cover?auto=format%2Ccompress&q=75&cs=strip&w=461&ch=DPa"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <p>Free game</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Lol">
            <img
              src="https://notagamer.net/wp-content/uploads/2023/01/Saint-League-of-Legends.jpeg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <p>Free game</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Terraria">
            <img
              src="https://images.g2a.com/1024x768/1x1x0/terraria-steam-gift-europe-i10000000238023/591065f6ae653a5dcf684dca"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <p>10% discount</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Sweetdoll">
            <img
              src="https://is5-ssl.mzstatic.com/image/thumb/Purple116/v4/ed/2e/fa/ed2efa0f-dd02-2011-ec71-2ebf44a95c30/e137299f-0191-421b-8b3c-73b6b5475e3b_2_1242x2208.png/750x750bb.jpeg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <p>Free game</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Mario">
            <img
              src="https://esports.as.com/2019/01/22/super-smash-bros/Super-Smash-Bros-Ultimate-Norteamerica_1211588837_128681_1440x600.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <p>5% discount</p>
          </TextoSlide>
        </Slide>
      </Slideshow>
    </main>
  );
}

export default Carrusel1;
