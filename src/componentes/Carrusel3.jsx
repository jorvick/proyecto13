import React from 'react'
import Slideshow from "../Slideshow";
import { Slide } from "../Slideshow";
import { TextoSlide } from "../Slideshow";

function Carrusel3() {
  return (
    <main className="hola">
      
            <p>tercero</p>
      <Slideshow>
        <Slide>
          <a href="Genshin">
            <img
              src="https://imgeucdn.gamespress.com/cdn/files/Games%20Press/2022/07/021318-bb2ab14d/Key_art_EN.png?w=533&mode=max&otf=y&quality=90&format=png&bgcolor=transparent&ex=2023-08-01+03%3A00%3A00&sky=570562e77037b2c5e2612d27916aa19f9e24d6b8f921f18410411fa38a69278f"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <p>Free game</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Hair">
            <img
              src="https://img.gamepix.com/games/hair-do-design-2/cover/hair-do-design-2.webp?width=320&height=180&fit=cover&quality=90"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <p>Free game</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Callduty">
            <img
              src="https://www.ozeros.com/wp-content/uploads/2012/09/callofduty-black-ops2.jpeg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <p>14% discount</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Donkey">
            <img
              src="https://assets1.ignimgs.com/2019/06/09/donkey-kong-country-1---button-v1-1560099410346.jpg?width=300&crop=1%3A1%2Csmart"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <p>50% discount</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Wednesday">
            <img
              src="https://avatars.mds.yandex.net/get-games/3006389/2a0000018560511207f93fba47d7a185fb08/pjpg170x170"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <p>Free game</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="Halo">
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/header.jpg?t=1683115079"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <p>4% discount</p>
          </TextoSlide>
        </Slide>
      </Slideshow>
    </main>
  )
}

export default Carrusel3