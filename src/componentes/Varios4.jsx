import React from 'react'

function Varios4() {
    const users = [
      {
        id: 1,
        image:
          "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/04/five-nights.jpg?tf=1200x",
        texto: "Discount up to 2%",
        informacion:"Freddys",
  
      },
      {
        id: 2,
        image:
          "https://i0.wp.com/www.techarp.com/wp-content/uploads/2020/05/Amnesia-Dark-Descent-free-game.jpg?resize=1024%2C512&ampssl=1",
        texto: "Discount up to 3%",
        informacion:"Amnesia",
      },
      {
        id: 3,
        image:
          "https://static.13.cl/7/sites/default/files/esports/articulos/field-image/portadakof15.jpg",
        texto: "Discount up to 55%", informacion:"Kof",
      },
      {
        id: 4,
        image:
          "https://www.latercera.com/resizer/wh7nUeb56UfsO2IJLKwfVWNrmvM=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/HWW2NZ62SFARBNTLBEMLHUQIEU.jpg",
        texto: "Discount up to 32%",
        informacion:"Mortal",
      },
      {
        id: 5,
        image:
          "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg?t=1650554420",
        texto: "Discount up to 13%",
        informacion:"/Gow",
        
      },
      {
        id: 6,
        image:
          "https://gametarget.ru/wp-content/uploads/2021/03/last-island-of-survival-unknown-gt-375x211.jpg",
        texto: "Free game",
        informacion:"Lastisland",
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

export default Varios4