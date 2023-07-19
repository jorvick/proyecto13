import React from 'react'

function Varios3() {
    const users = [
      {
        id: 1,
        image:
          "https://images.crazygames.com/funny-haircut/20200623120252/funny-haircut-cover?auto=format%2Ccompress&q=75&cs=strip&w=461&ch=DPR",
        informacion:"Funny",
        texto:"Free game",
      },
      {
        id: 2,
        image:
          "https://is5-ssl.mzstatic.com/image/thumb/Purple116/v4/ed/2e/fa/ed2efa0f-dd02-2011-ec71-2ebf44a95c30/e137299f-0191-421b-8b3c-73b6b5475e3b_2_1242x2208.png/750x750bb.jpeg",
        informacion:"Sweetdoll",
        texto:"Free game",
      },
      {
        id: 3,
        image:
          "https://images.crazygames.com/k-pop-new-year-s-concert-2/20211229182024/k-pop-new-year-s-concert-2-cover?auto=format%2Ccompress&q=75&cs=strip&w=461&ch=DPR",
        informacion:"Concert2",
        texto:"Free game",
      },
      {
        id: 4,
        image:
          "https://images.crazygames.com/tictoc-kpop-fashion/20220727085336/tictoc-kpop-fashion-cover?auto=format%2Ccompress&q=75&cs=strip&w=461&ch=DPR",
        informacion:"Fashion",
        texto:"Free game",
      },
      {
        id: 5,
        image:
          "https://img.gamepix.com/games/hair-do-design-2/cover/hair-do-design-2.webp?width=320&height=180&fit=cover&quality=90",
        informacion:"Hair",
        texto:"Free game",
      },
      {
        id: 6,
        image:
          "https://avatars.mds.yandex.net/get-games/3006389/2a0000018560511207f93fba47d7a185fb08/pjpg170x170",
        informacion:"Wednesday",
        texto:"Free game",
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

export default Varios3