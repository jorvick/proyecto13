import { VscHome, VscAccount } from "react-icons/vsc";
import { Outlet, Link } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
  return (
    <div className="div__container-m">
      <nav className="nav__1">
        <button className="div__nav-button">
          <Link className="div__nav-link" to="/">
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
            <VscHome />
            Home
          </Link>
        </button>
      </nav>
      <nav className="nav__2">
        <button className="div__nav-button">
          <Link className="div__nav-link" to="/Aventura">
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
            🌏 Adventure
          </Link>
        </button>

        <button className="div__nav-button">
          <Link className="div__nav-link" to="/Multijugador">
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
            🧑‍🤝‍🧑 multiplayer
          </Link>
        </button>
        <button className="div__nav-button">
          <Link className="div__nav-link" to="/Niñas">
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
            👧 for girl
          </Link>
        </button>
        <button className="div__nav-button">
          <Link className="div__nav-link" to="/Terror">
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
            😱 terror 
          </Link>
        </button>
        <button className="div__nav-button">
          <Link className="div__nav-link" to="/Pelea">
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
            🤼 fight
          </Link>
        </button>
        <button className="div__nav-button">
          <Link className="div__nav-link" to="/Accion">
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
           🕵️‍♂️ action
          </Link>
        </button>
        <button className="div__nav-button">
          <Link className="div__nav-link" to="/Login">
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
            <VscAccount />
            Login
          </Link>
        </button>
      </nav>
      <div className="div__container2">
        <nav className="nav__3">
          <ul className="div__ul">
            <li className="div__nav-li">
              <button className="div__nav-button">
                <Link className="div__nav-link" to="/">
                  <VscHome />
                  Home
                </Link>
              </button>
            </li>
            <li>
              <button className="div__nav-button">
                <Link className="div__nav-link" to="/Aventura">
                  🌏Adventure
                </Link>
              </button>
            </li>
            <li>
              <button className="div__nav-button">
                <Link className="div__nav-link" to="/Multijugador">
                  🧑‍🤝‍🧑 multiplayer
                </Link>
              </button>
            </li>
            <li>
              <button className="div__nav-button">
                <Link className="div__nav-link" to="/Niñas">
                  👧 for girl
                </Link>
              </button>
            </li>
            <li>
              <button className="div__nav-button2">
                <Link className="div__nav-link" to="/Login">
                  <VscAccount />
                  Login
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};
export default Menu;
