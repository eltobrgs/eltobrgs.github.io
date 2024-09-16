import { useEffect } from "react";

export default function HamburgerMenu() {

  const [isActive, setActive] = useState(false);
  
  useEffect(() => {
    const mobileBtn = document.getElementById("mobile_btn");
    const mobileMenu = document.getElementById("mobile_menu");

    if (mobileBtn) {
      mobileBtn.addEventListener("click", () => {
        console.log('oiiiii')
        mobileMenu.classList.toggle("active");

        // Alterna a rotação do ícone
        const icon = mobileBtn.querySelector("i");
        if (icon) {
          icon.style.transform =
            icon.style.transform === "rotate(90deg)"
              ? "rotate(0deg)"
              : "rotate(90deg)";
        }
      });
    }

    // Cleanup para remover o event listener quando o componente for desmontado
    return () => {
      if (mobileBtn) {
        mobileBtn.removeEventListener("click", () => {});
      }
    };
  }, []); // [] garante que o efeito só seja executado uma vez

  return null;
}