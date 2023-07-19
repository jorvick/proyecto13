import React from "react";

function Terror() {
  const users = [
    {
      id: 1,
      image:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/04/five-nights.jpg?tf=1200x",
      texto: "Descuento hasta del 15%",
      informacion:"Freddys",

    },
    {
      id: 2,
      image: "https://uvejuegos.com/img/caratulas/3828/the_thing_pc.jpg",
      texto: "Descuento hasta del 15%",
    },
    {
      id: 3,
      image:
        "https://cdnx.jumpseller.com/deus-digital/image/25980907/resize/540/540?1659306656",
      texto: "Descuento hasta del 15%",
    },
    {
      id: 4,
      image:
        "https://www.relyonhorror.com/wp-content/uploads/2017/10/EvilWithinHeader1024.jpg",
      texto: "Descuento hasta del 15%",
    },
    {
      id: 5,
      image: "https://i.blogs.es/872cf7/1366_2000/1366_2000.jpg",
      texto: "Descuento hasta del 15%",
    },
    {
      id: 6,
      image:
        "https://i0.wp.com/www.techarp.com/wp-content/uploads/2020/05/Amnesia-Dark-Descent-free-game.jpg?resize=1024%2C512&ampssl=1",
      texto: "Descuento hasta del 15%",
      informacion:"Amnesia",
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

export default Terror;
