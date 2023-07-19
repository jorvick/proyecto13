import React, { useRef} from "react";
import { VscChevronLeft,VscChevronRight } from "react-icons/vsc";
import { styled } from "styled-components";
const Slideshow = ({children}) => {
  const slideshow = useRef(null);
  
  const siguiente = () => {
    if (slideshow.current.children.length > 0) {
      const primerElemento = slideshow.current.children[0];

      slideshow.current.style.transition = `300ms ease-out all`;

      const tamañoSlide = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        slideshow.current.style.transition = `none`;
        slideshow.current.style.transform = `translateX(0)`;

        slideshow.current.appendChild(primerElemento);
        slideshow.current.removeEventListener("transitionend", transicion);
      };
      slideshow.current.addEventListener("transitionend", transicion);
    }
  };

  const anterior = () => {
    console.log("Anterior");
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";

      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `300ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };


  return (
    <ContenedorPrinciopal>
      <ContenedorSlideshow ref={slideshow}>
       {children}
      </ContenedorSlideshow>
      <Controles>
        <Boton onClick={anterior}>
          <VscChevronLeft/>
        </Boton>
        <Boton derecho onClick={siguiente}>
          <VscChevronRight/>
        </Boton>
      </Controles>
    </ContenedorPrinciopal>
  );
};
const ContenedorPrinciopal = styled.div`
  position: relative;
  background: rgba(67, 8, 186, 0.471);
  box-shadow: 0 0 25px rgba(127, 1, 254, 0.866);
  margin: auto;
  width: 90%;
  overflow: hidden;
`;

const ContenedorSlideshow = styled.div`
  display: flex;
  width: 50%;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  min-width: 420px;
  position: absolute;
  width: 50%;
  max-height: 350px;
  overflow: hidden;
  border: 12px groove rgb(232, 226, 226);
  transition: 0.3s ease all;
  z-index: 10;
  position: relative;
  margin-left: 10px;
  
  
  img {
    width: 100%;
    height: 100%;
    vertical-align: top;
    overflow: hidden;
    transition-duration: 1s;
  }
  img:hover {
    opacity: 65%;
  }
`;
const TextoSlide = styled.div`
  min-width: 520px;
  background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.5)'};
  color: ${props => props.colorTexto ? props.colorTexto : 'white'};
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  font-size: 25px;


 @media screen and (max-width: 900px) {
    position: absolute;
    background: ${props => props.colorFondo ? props.colorFondo : '#000'};
  }
`;
const Controles = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 96%;
  height: 50%;
  margin: 100px 32px;
  align-items: center;
  pointer-events: none;
`;

const Boton = styled.button`
  pointer-events: all;
  background: none;
  outline: none;
  border: none;
  color: deeppink;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;
  font-size: 80px;
  &:hover {
    transform: scale(1.3);
  }
  path{
    filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px blue)' : 'drop-shadow(2px 0px 0px blue)'};
  }
  ${props => props.derecho ? 'right:0' : 'left:0'}
`;
export {Slide,TextoSlide}
export default Slideshow;