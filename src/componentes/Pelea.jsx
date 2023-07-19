import React from "react";

function Pelea() {
  const users = [
    {
      id: 1,
      image:
        "https://static.13.cl/7/sites/default/files/esports/articulos/field-image/portadakof15.jpg",
      texto: "Descuento hasta del 15%", informacion:"Kof",
    },
    {
      id: 2,
      image: "https://img-9gag-fun.9cache.com/photo/a3QnWjm_700bwp.webp",
      texto: "Descuento hasta del 15%",    
    },
    {
      id: 3,
      image:
        "https://www.latercera.com/resizer/wh7nUeb56UfsO2IJLKwfVWNrmvM=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/HWW2NZ62SFARBNTLBEMLHUQIEU.jpg",
      texto: "Descuento hasta del 15%",
      informacion:"Mortal",
    },
    {
      id: 4,
      image:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/07/street-fighter-1984165.jpg?tf=1200x",
      texto: "Descuento hasta del 15%",
    },
    {
      id: 5,
      image:
        "https://www.ozeros.com/wp-content/uploads/2012/09/callofduty-black-ops2.jpeg",
      texto: "Descuento hasta del 15%",
      informacion:"Callduty",
    },
    {
      id: 6,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/header.jpg?t=1683115079",
      texto: "Descuento hasta del 15%",
      informacion:"Halo",
    },
  ];
  return users.map((user, i) => {
    return (
      <div className="img__div" key={i}>
        <div className="img__container-juegos">
        <a href={user.informacion}>
          <img className="img__juegos" src={user.image} alt="sorry not img" />
          </a>
        </div>
      </div>
    );
  });
}

export default Pelea;
