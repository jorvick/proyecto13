import React from 'react'

function Varios2() {
    const users = [
      {
        id: 1,
        image:
          "https://notagamer.net/wp-content/uploads/2023/01/Saint-League-of-Legends.jpeg",
        informacion:"Lol",
        texto:"Free game",
      },
      {
        id: 2,
        image:
          "https://i.ebayimg.com/images/g/GwwAAOSwQz1bKscR/s-l500.jpg",
        informacion:"Mario",
        texto:"Discount up to 5%",
      },
      {
        id: 3,
        image: "https://media.vandal.net/i/610x270/10-2015/20151015192512_1.jpg",
        informacion:"Broforce",
        texto:"Discount up to 60%",
      },
      {
        id: 4,
        image:
          "https://www.eltiempo.com/files/article_main_1200/uploads/2023/03/31/642756e65c75c.png",
        informacion:"Minecraft",
        texto:"Discount up to 45%",
      },
      {
        id: 5,
        image:
          "https://www.ozeros.com/wp-content/uploads/2012/09/callofduty-black-ops2.jpeg",
        informacion:"Callduty",
        texto:"Discount up to 14%",
      },
      {
        id: 6,
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/header.jpg?t=1683115079",
        informacion:"Halo",
        texto:"Discount up to 4%",  
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

export default Varios2