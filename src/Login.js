import React, { useState } from "react";
import Title from "./componentes/Title";
import Label from "./componentes/Label";
import Input from "./componentes/Input";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Login.css";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [hasError, setHasError] = useState(false);

  function handleChange(name, value) {
    if (name === "usuario") {
      setUser(value);
      setHasError(false);
    } else {
      if (value.length <= 6) {
        setPasswordError(true);
        setHasError(false);
      } else {
        setPasswordError(false);
        setPassword(value);
        setHasError(false);
      }
    }
  }

  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (param.user === "jorvick" && param.password === "jorvick123") {
        const { user, password } = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem("account", account);
        setIsLogin(true);
      } else {
        setIsLogin(false);
        setHasError(true);
      }
    } else {
      setIsLogin(false);
      setHasError(true);
    }
  }

  function handleSubmit() {
    let account = { user, password };
    if (account) {
      ifMatch(account);
    }
  }
  return (
    <div className="div__container-l">
      {isLogin ? (
        <div className="div__l">
          <h1 className="home__h1">Hello, {user}</h1>
          <label className="l__label">
            <h3 className="home__h1-1">Congratulations, you are logged in.</h3>
          </label>
          <img
            className="l__img"
            src="https://img.freepik.com/vector-premium/pantalla-juego-victoria_313905-135.jpg?w=900"
            alt="sorry not img"
          />
          <div className="correr">
            <button className="div__nav-button-1">
              <Link className="div__nav-link-1" to="/">
                <span id="span1-1"></span>
                <span id="span2-2"></span>
                <span id="span3-3"></span>
                <span id="span4-4"></span>
                Exit
              </Link>
            </button>
          </div>
          <div className="aud-l">
          <ReactPlayer
            url={require("./aud/3.mp3")}
          width="100%"
          height="50px"
          controls
          playing
          volume="0.8"
          loop
          />
          </div>
        </div>
      ) : (
        <div className="div__container-co">
          <div className="co__container">
            <Title text="!Welcome¡" />
            <div>
              {hasError && (
                <label className="co__label">
                  Su contraseña o usuario son incorrectos, o no existen en
                  nuestra plataforma.
                </label>
              )}
            </div>
            <Label text="User" />
            <Input
              attribute={{
                id: "usuario",
                name: "usuario",
                type: "text",
                placeholder: "Username",
              }}
              handleChange={handleChange}
            />
            <Label text="Password" />
            <Input
              attribute={{
                id: "contraseña",
                name: "contraseña",
                type: "password",
                placeholder: "Password",
              }}
              handleChange={handleChange}
              param={passwordError}
            />
            <div className="con__in">
              {passwordError && (
                <label className="label__in">
                  Contraseña invalida o incompleta
                </label>
              )}
            </div>
            <div className="correr">
              <button className="div__nav-button-1" onClick={handleSubmit}>
                <span id="span1-1"></span>
                <span id="span2-2"></span>
                <span id="span3-3"></span>
                <span id="span4-4"></span>
                <p className="div__nav-link-1">Login</p>
              </button>
            </div>
          </div>
          <div className="aud-l">
          <ReactPlayer
            url={require("./aud/2.mp3")}
          width="100%"
          height="50px"
          controls
          playing
          volume="0.2"
          loop
          />
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
