import React from 'react'
import "./Varios1.css"

function Varios1() {
  const users = [
    {
      id: 1,
      name: "The legend of Zelda",
      image:
        "https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2014/05/the-legend-of-zelda-games-minish-cap-wallpaper-HD.jpg?w=1920&ssl=1",
      informacion: "Zelda",
      texto:"Discount up to 15%",
    },
    {
      id: 2,
      name: "Terraria",
      image:
        "https://images.g2a.com/1024x768/1x1x0/terraria-steam-gift-europe-i10000000238023/591065f6ae653a5dcf684dca",
      informacion: "Terraria",
      texto:"Discount up to 10%",
    },
    {
      id: 3,
      name: "Undertale",
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/837/268/desktop-wallpaper-5-undertale-undertale.jpg",
      informacion: "Undertale",
      texto:"Discount up to 40%",
    },
    {
      id: 4,
      name: "Hollow knight",
      image:
        "https://static.wikia.nocookie.net/ultimatepopculture/images/c/c0/Hollow_Knight_cover.jpg/revision/latest?cb=20210617085413",
      informacion: "Hollow",
      texto:"Discount up to 25%",
    },
    {
      id: 5,
      name: "genshin impact",
      image:
        "https://imgeucdn.gamespress.com/cdn/files/Games%20Press/2022/07/021318-bb2ab14d/Key_art_EN.png?w=533&mode=max&otf=y&quality=90&format=png&bgcolor=transparent&ex=2023-08-01+03%3A00%3A00&sky=570562e77037b2c5e2612d27916aa19f9e24d6b8f921f18410411fa38a69278f",
      informacion: "Genshin",
      texto:"Free game",
    },
    {
      id: 6,
      name: "Donkey kong",
      image:
        "https://assets1.ignimgs.com/2019/06/09/donkey-kong-country-1---button-v1-1560099410346.jpg?width=300&crop=1%3A1%2Csmart",
      informacion: "Donkey",
      texto:"Discount up to 50%",
    },
  ];
  return users.map((user, i) => {
    return (
      <div className="img__div" key={i}>
        <div className="img__container-juegos">
          <a href={user.informacion}>
            <img className="img__juegos" src={user.image} alt="sorry not img" />
          </a>
          <p className='p__15'>{user.texto}</p>
        </div>
      </div>
    );
  });
}

export default Varios1