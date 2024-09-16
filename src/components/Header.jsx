import ImageSlider from "@/components/Slider"; // Componente do slider
import { useState } from "react";

export default function Header() {

  const [isActive, setActive] = useState(false);

  return (
    <>
      <header>
        <nav id="navbar">
          <h1 id="nav_logo">
            <a href="">ELTO BORGES</a>
          </h1>

          <ul id="nav_list">
            <li className="nav-item active">
              <a href="#inicio">INICIO</a>
            </li>
            <li className="nav-item">
              <a href="#sobre">SOBRE</a>
            </li>
            <li className="nav-item active">
              <a href="#portfolio">PORTFÓLIO</a>
            </li>
            <li className="nav-item">
              <a href="#formulario">CONTATO</a>
            </li>
          </ul>

          <button
          onClick={() => setActive(!isActive)}
            id="mobile_btn"
            aria-label="Icone de Três barrinhas - menu hamburguer"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </nav>

        <div id="mobile_menu" className={`${isActive ? "active" : ""}`}>
          <ul id="mobile_nav_list">
            <li className="nav-item">
              <a href="#inicio">INICIO</a>
            </li>
            <li className="nav-item">
              <a href="#sobre">SOBRE</a>
            </li>
            <li className="nav-item active">
              <a href="#portfolio">PORTFÓLIO</a>
            </li>
            <li className="nav-item">
              <a href="#formulario">CONTATO</a>
            </li>
          </ul>
        </div>
      </header>

      {/* Importar o componente do menu hambúrguer */}

      {/* Importar o componente do slider de imagens */}
      <ImageSlider />
    </>
  );
}
