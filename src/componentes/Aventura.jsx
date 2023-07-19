import "./Item.css";

function Item() {
  const users = [
    {
      id: 1,
      image:
        "https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2014/05/the-legend-of-zelda-games-minish-cap-wallpaper-HD.jpg?w=1920&ssl=1",
      informacion: "Zelda",
      texto: "Descuento hasta del 15%",
    },
    {
      id: 2,
      image:
        "https://images.g2a.com/1024x768/1x1x0/terraria-steam-gift-europe-i10000000238023/591065f6ae653a5dcf684dca",
      informacion: "Terraria",
      texto: "Descuento hasta del 15%",
    },
    {
      id: 3,
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/837/268/desktop-wallpaper-5-undertale-undertale.jpg",
      informacion: "Undertale",
      texto: "Descuento hasta del 15%",
    },
    {
      id: 4,
      image:
        "https://monkeygamer.es/wp-content/uploads/2019/03/capsule_616x353.jpg",
      informacion: "Hollow",
      texto: "Descuento hasta del 15%",
    },
    {
      id: 5,
      image:
        "https://imgeucdn.gamespress.com/cdn/files/Games%20Press/2022/07/021318-bb2ab14d/Key_art_EN.png?w=533&mode=max&otf=y&quality=90&format=png&bgcolor=transparent&ex=2023-08-01+03%3A00%3A00&sky=570562e77037b2c5e2612d27916aa19f9e24d6b8f921f18410411fa38a69278f",
      informacion: "Genshin",
      texto: "Descuento hasta del 15%",
    },
    {
      id: 6,
      image:
        "https://assets1.ignimgs.com/2019/06/09/donkey-kong-country-1---button-v1-1560099410346.jpg?width=300&crop=1%3A1%2Csmart",
      informacion: "Donkey",
      texto: "Descuento hasta del 15%",
    },
  ];
  return users.map((user, i) => {
    return (
      <section className="img__div" key={i}>
        <a href={user.informacion}>
          <img className="img__juegos" src={user.image} alt="sorry not img" />
        </a>
      </section>
    );
  });
}

export default Item;
