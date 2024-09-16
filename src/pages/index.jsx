import Header from "@/components/Header";
import Image from 'next/image';
import Footer from "@/components/Footer";
import HeadComponent from "@/components/Head";
export default function Home() {

  return (
    <>
      <HeadComponent />
      <Header />
      <main>
        <section className="topo-do-site" id="inicio">
          <div className="interface">
            <div className="flex">
              <div className="txt-topo-site">
                <h1>MEU NOME É ELTO BORGES E ESTE SITE É UM DOS MEUS <span>PROJETOS.</span></h1>
                <p>Apaixonado por tecnologia, academia, café e filosofia. Este sou eu! Estou tentando aumentar meu portfólio de projetos práticos e este será o site inicial que servirá como vitrine.</p>
                
                <h2 id="hobbies">MEUS <span>HOBBIES</span></h2>
                <div className="btn-social">
                  <a href="#portfolio"><button><i className="bi bi-code"></i></button></a>
                  <a href="#gym"><button><i className="fa-solid fa-dumbbell"></i></button></a>
                  <a href="#livros"><button><i className="bi bi-book"></i></button></a>
                  <a href="#filmes"><button><i className="bi bi-camera-reels"></i></button></a>
                </div>
              </div>
              <div className="img-topo-site">
                <Image 
                  src="/img/WhatsApp_Image_2024-02-25_at_15.03.26-removebg-preview (1).png" 
                  alt="Imagem de Elto Borges" 
                  width={500} 
                  height={600} 
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="sobre" id="sobre">
          <div className="interface">
            <div className="flex">
              <div className="txt-sobre">
                <h2>PRAZER EM CONHECÊ-LO, <span>EU SOU ELTO BORGES.</span></h2>
                <p>Meu nome é Elto Borges, sou estudante do curso técnico em Informática no INSTITUTO FEDERAL DO PIAUÍ - IFPI (PICOS), atualmente no segundo ano do ensino médio...</p>
                <div className="btn-social">
                  <a href="https://www.instagram.com/eltobrgs/"><button><i className="bi bi-instagram"></i></button></a>
                  <a href="https://github.com/eltobrgs"><button><i className="bi bi-github"></i></button></a>
                  <a href="https://wa.me/+5589994042351"><button><i className="bi bi-whatsapp"></i></button></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr />

        <section className="portfolio" id="portfolio">
          <div className="interface">
            <h2 className="titulo">MEU <span>PORTFÓLIO.</span></h2>
            <div className="flexport">
              <div className="img-port" style={{ backgroundImage: `url(/img/logincadastro.png)` }}>
                <div className="overlay">Login e Cadastro - uGym</div>
              </div>
              <div className="img-port" style={{ backgroundImage: `url(/img/land.jpeg)` }}>
                <div className="overlay">Landing Page - uGym</div>
              </div>
              <div className="img-port" style={{ backgroundImage: `url(/img/carrossel.jpeg)` }}>
                <div className="overlay">Carrossel de Games</div>
              </div>
              <div className="img-port" style={{ backgroundImage: `url(/img/calc.jpeg)` }}>
                <div className="overlay">Calculadora de IMC</div>
              </div>
              <div className="img-port" style={{ backgroundImage: `url(/img/calcgeral.jpeg)` }}>
                <div className="overlay">Calculadora Matemática</div>
              </div>
              <div className="img-port" style={{ backgroundImage: `url(/img/net.jpeg)` }}>
                <div className="overlay">Tela de login NETFLIX</div>
              </div>
            </div>
          </div>
          <a className="btn-social" href="#hobbies"><button><i className="bi bi-arrow-up"></i></button></a>
        </section>

        <hr />

        <section className="tech" id="tech">
          <h2 className="titulo-tech">MINHAS <span>TECNOLOGIAS DE INTERESSE.</span></h2>
          <div className="body-slide">
            <div className="main-slide">
              <ul className="slider">
                <li className="item" style={{ backgroundImage: `url(/img/py.png)` }}>
                  <div className="content">
                    <h2 className="title">Python</h2>
                    <p className="description"> Consigo desenvolver programas simples e automatizar algumas tarefas...</p>
                    <button>Read More</button>
                  </div>
                </li>
                <li className="item" style={{ backgroundImage: `url(/img/html.png)` }}>
                  <div className="content">
                    <h2 className="title">HTML</h2>
                    <p className="description"> Tenho um conhecimento razoável em HTML...</p>
                    <button>Read More</button>
                  </div>
                </li>
                <li className="item" style={{ backgroundImage: `url(/img/css.png)` }}>
                  <div className="content">
                    <h2 className="title">CSS</h2>
                    <p className="description"> Atualmente, possuo um bom conhecimento na linguagem CSS...</p>
                    <button>Read More</button>
                  </div>
                </li>
                <li className="item" style={{ backgroundImage: `url(/img/js.png)` }}>
                  <div className="content">
                    <h2 className="title">JavaScript</h2>
                    <p className="description"> Estou no estágio inicial de aprendizado da linguagem JavaScript...</p>
                    <button>Read More</button>
                  </div>
                </li>
                <li className="item" style={{ backgroundImage: `url(/img/ard.png)` }}>
                  <div className="content">
                    <h2 className="title">Arduino</h2>
                    <p className="description"> Estou atualmente em processo de aprendizado da linguagem Arduino...</p>
                    <button>Read More</button>
                  </div>
                </li>
              </ul>
              <nav className="nav">
                <i className="btn prev" name="arrow-forward-outline">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </i>
                <i className="btn next" name="arrow-back-outline">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </i>

              </nav>
            </div>
          </div>
        </section>

        
      </main>
      <Footer />


    </>
  );
}
