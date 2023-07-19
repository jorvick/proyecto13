import Carrusel1 from "./componentes/Carrusel1";
import Carrusel2 from "./componentes/Carrusel2";
import Carrusel3 from "./componentes/Carrusel3";
import Carrusel4 from "./componentes/Carrusel4";
import Varios1 from "./componentes/Varios1";
import Varios2 from "./componentes/Varios2";
import Varios3 from "./componentes/Varios3";
import Varios4 from "./componentes/Varios4";
import ReactPlayer from "react-player";
import "./Home1.css";


function Home1() {
  return (
    <>
      <div className="home__div">
        <div className="div__h">
          <h1 className="home__h1">HELLO GAMER WHAT DO YOU WANT TO PLAY?</h1>
        </div>
        <Carrusel1 />
        <Varios1 />
        <Carrusel4 />
        <Carrusel2 />
        <Varios2 />
        <Carrusel3 />
        <Varios3 />
        <Varios4 />
        <div className="aud">
        <ReactPlayer
          url={require("./aud/1.mp3")}
          width="100%"
          height="50px"
          controls
          playing 
          volume="0.2"
          loop
        />
        </div>
      </div>
    </>
  );
}

export default Home1;
