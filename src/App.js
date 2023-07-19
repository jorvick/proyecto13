import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Home1 from "./Home1";
import Aventura from "./componentes/Aventura"
import Multijugador from "./componentes/Multijugador";
import Niñas from "./componentes/Niñas";
import Terror from "./componentes/Terror";
import Pelea from "./componentes/Pelea";
import Accion from "./componentes/Accion";
import Login from "./Login";
import Zelda from "./juegos/aventura/Zelda";
import Terraria from "./juegos/aventura/Terraria";
import Undertale from "./juegos/aventura/Undertale";
import Hollow from "./juegos/aventura/Hollow";
import Genshin from "./juegos/aventura/Genshin";
import Donkey from "./juegos/aventura/Donkey";
import Lol from "./juegos/multijugador/Lol";
import Mario from "./juegos/multijugador/Mario";
import Broforce from "./juegos/multijugador/Broforce";
import Minecraft from "./juegos/multijugador/Minecraft";
import Callduty from "./juegos/multijugador/Callduty";
import Halo from "./juegos/multijugador/Halo";
import Funny from "./juegos/niñas/Funny";
import Sweetdoll from "./juegos/niñas/Sweetdoll";
import Concert2 from "./juegos/niñas/Concert2";
import Fashion from "./juegos/niñas/Fashion";
import Hair from "./juegos/niñas/Hair";
import Wednesday from "./juegos/niñas/Wednesday";
import Freddys from './juegos/terror/Freddys'
import Amnesia from "./juegos/terror/Amnesia";
import Kof from "./juegos/pelea/Kof";
import Mortal from "./juegos/pelea/Mortal";
import Gow from "./juegos/accion/Gow";
import Lastisland from "./juegos/accion/Lastisland";
import "./Home1.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="/" element={<Home1 />}></Route>
          <Route path="/Aventura" element={<Aventura />}></Route>
          <Route path="/Multijugador" element={<Multijugador />}></Route>
          <Route path="/Niñas" element={<Niñas />}></Route>
          <Route path="/Terror" element={<Terror/>}></Route>
          <Route path="/Pelea" element={<Pelea/>}></Route>
          <Route path="/Accion" element={<Accion/>}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Zelda" element={<Zelda />}></Route>
          <Route path="/Terraria" element={<Terraria />}></Route>
          <Route path="/Undertale" element={<Undertale />}></Route>
          <Route path="/Hollow" element={<Hollow />}></Route>
          <Route path="Genshin" element={<Genshin />}></Route>
          <Route path="/Donkey" element={<Donkey />}></Route>
          <Route path="/Lol" element={<Lol />}></Route>
          <Route path="/Mario" element={<Mario />}></Route>
          <Route path="/Broforce" element={<Broforce />}></Route>
          <Route path="/Minecraft" element={<Minecraft />}></Route>
          <Route path="/Callduty" element={<Callduty />}></Route>
          <Route path="/Halo" element={<Halo />}></Route>
          <Route path="/Funny" element={<Funny />}></Route>
          <Route path="/Sweetdoll" element={<Sweetdoll />}></Route>
          <Route path="/Concert2" element={<Concert2 />}></Route>
          <Route path="/Fashion" element={<Fashion />}></Route>
          <Route path="/Hair" element={<Hair />}></Route>
          <Route path="/Wednesday" element={<Wednesday />}></Route>
          <Route path="/Freddys" element={<Freddys/>}></Route>
          <Route path="/Amnesia" element={<Amnesia/>}></Route>
          <Route path="/Kof" element={<Kof/>}></Route>
          <Route path="/Mortal" element={<Mortal/>}></Route>
          <Route path="/Gow" element={<Gow/>}></Route>
          <Route path="/Lastisland" element={<Lastisland/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
