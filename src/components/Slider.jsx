import { useEffect } from "react";

export default function ImageSlider() {
  useEffect(() => {
    const slider = document.querySelector(".slider");

    function activate(e) {
      const items = document.querySelectorAll(".item");
      if (e.target.matches(".next")) {
        slider.append(items[0]);
      }
      if (e.target.matches(".prev")) {
        slider.prepend(items[items.length - 1]);
      }
    }

    // Adiciona o event listener para os botões de navegação
    document.addEventListener("click", activate, false);

    // Cleanup para remover o event listener quando o componente for desmontado
    return () => {
      document.removeEventListener("click", activate);
    };
  }, []);

  return null;
}
