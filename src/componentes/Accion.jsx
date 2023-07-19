import React from "react";

function Accion() {
  const users = [
    {
      id: 1,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1671485009",
      texto: "Descuento hasta del 15%",
    },
    {
      id: 2,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg?t=1650554420",
      texto: "Descuento hasta del 15%",
      informacion:"/Gow",
      
    },
    {
      id: 3,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/628540/header.jpg?t=1553555311",
      texto: "Descuento hasta del 15%",
    },
    {
      id: 4,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/201870/header.jpg?t=1687890475",
      texto: "Descuento hasta del 15%",
    },
    {
      id: 5,
      image:
        "https://gametarget.ru/wp-content/uploads/2021/03/last-island-of-survival-unknown-gt-375x211.jpg",
      texto: "Descuento hasta del 15%",
      informacion:"Lastisland",
    },
    {
      id: 6,
      image: "https://mediamaster.vandal.net/m/11-2022/20221121142822_1.jpg",
      texto: "Descuento hasta del 15%",
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

export default Accion;
