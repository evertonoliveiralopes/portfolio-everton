
import { useState } from 'react'
import './App.css'


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <div className="site">
      <header className="header">
        <div className="container header-content">
          <a href="#inicio" className="logo">
            Everton<span>.</span>
          </a>

          
          <div className="menu-wrapper">
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              aria-controls="menu-principal"
            >
              {menuOpen ? '✕' : '☰'}
            </button>

            <nav
              id="menu-principal"
              className={`navigation ${menuOpen ? 'navigation-open' : ''}`}
              aria-label="Menu principal"
            >
              <a href="#inicio" onClick={() => setMenuOpen(false)}>
                Início
              </a>
              <a href="#sobre" onClick={() => setMenuOpen(false)}>
                Sobre
              </a>
              <a href="#projetos" onClick={() => setMenuOpen(false)}>
                Projetos
              </a>
              <a href="#contato" onClick={() => setMenuOpen(false)}>
                Contato
              </a>
            </nav>
          </div>

        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-content">
            <div className="hero-text">
              <span className="eyebrow">
                PORTFÓLIO PROFISSIONAL
              </span>

              <h1>
                Olá, sou <span>Everton Oliveira.</span>
              </h1>

              <h2>
                Compras, tecnologia e inovação.
              </h2>
              
              <p>
                Profissional de compras com experiência no varejo,
                atuando na gestão de fornecedores, negociação comercial
                e análise de indicadores. Também desenvolvo soluções
                tecnológicas com foco em automação de processos,
                inteligência de dados e eficiência operacional,
                conectando conhecimento de negócios à inovação digital.
              </p>
        
              <div className="hero-buttons">
                <a href="#projetos" className="btn btn-primary">
                  Conhecer meus projetos
                </a>

                <a href="#contato" className="btn btn-outline">
                  Entre em contato
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-glow"></div>

              <div className="profile-card">
                <div className="profile-symbol">EO</div>
                <span>EVERTON OLIVEIRA</span>
                <strong>
                  Gestão & Tecnologia
                </strong>
                <div className="profile-line"></div>
                <p>
                  Soluções digitais para decisões
                  mais inteligentes.
                </p>
              </div>
            </div>
          </div>
        </section>

        
        <section className="next-section" id="sobre">
          <div className="container">
            <span className="eyebrow">SOBRE MIM</span>

            <div className="about-grid">
              <div className="about-text">
                <h2>
                  Experiência em negócios.
                  <br />
                  Visão orientada à tecnologia.
                </h2>

                <p>
                  Sou Everton Oliveira, profissional da área de
                  compras com atuação no varejo, experiência
                  em negociação com fornecedores, análise
                  comercial e gestão de processos.
                </p>

                <p>
                  Paralelamente à minha trajetória profissional,
                  desenvolvo aplicações e ferramentas digitais
                  destinadas à melhoria da produtividade,
                  organização de informações e apoio à
                  tomada de decisões.
                </p>

                <p>
                  Meu objetivo é unir experiência operacional,
                  visão estratégica e tecnologia para criar
                  soluções práticas que gerem resultados.
                </p>
              </div>

              <div className="skills-panel">
                <h3>Áreas de atuação</h3>

                <div className="skill-item">
                  <span>01</span>
                  <div>
                    <strong>Gestão de Compras</strong>
                    <p>Negociação, fornecedores e indicadores.</p>
                  </div>
                </div>

                <div className="skill-item">
                  <span>02</span>
                  <div>
                    <strong>Análise de Dados</strong>
                    <p>Indicadores e informações para decisões.</p>
                  </div>
                </div>

                <div className="skill-item">
                  <span>03</span>
                  <div>
                    <strong>Desenvolvimento Web</strong>
                    <p>React, Python, FastAPI e PostgreSQL.</p>
                  </div>
                </div>

                <div className="skill-item">
                  <span>04</span>
                  <div>
                    <strong>Automação de Processos</strong>
                    <p>Ferramentas para otimização de rotinas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        
        <section className="projects-section" id="projetos">
          <div className="container">
            <span className="eyebrow">MEU PORTFÓLIO</span>

            <div className="projects-heading">
              <h2>Projetos desenvolvidos</h2>
              <p>
                Soluções que conectam tecnologia, gestão
                e necessidades reais do ambiente empresarial.
              </p>
            </div>

            <div className="projects-grid">
              <article className="project-card featured">
                
                <div className="project-image">
                  <img
                    src="/images/compra360-dashboard.webp"
                    alt="Dashboard do Compra360 com indicadores,
                    gráficos e alertas de gestão de compras"
                    loading="lazy"
                  />
                </div>


                <div className="project-content">
                  <span className="project-category">
                    SISTEMA WEB • FULL STACK
                  </span>
                  <h3>Compra360</h3>
                  <p>
                    Plataforma web para gestão estratégica de
                    compras no varejo, reunindo informações de
                    produtos, fornecedores, compras e indicadores
                    em um ambiente integrado.
                  </p>

                  <div className="project-tags">
                    <span>React</span>
                    <span>Python</span>
                    <span>FastAPI</span>
                    <span>PostgreSQL</span>
                  </div>
                </div>
              </article>

              <article className="project-card">
                
                <div className="project-image app-preview">
                  <div className="phone-frame">
                    <img
                      src="/images/validade-na-mao.webp"
                      alt="Tela principal do aplicativo Validade na Mão"
                      loading="lazy"
                    />
                  </div>
                </div>


                <div className="project-content">
                  <span className="project-category">
                    APLICATIVO ANDROID
                  </span>
                  <h3>Validade na Mão</h3>
                  <p>
                    Aplicativo para controle de validade de
                    produtos, permitindo organizar itens,
                    acompanhar vencimentos e gerar relatórios
                    para compartilhamento.
                  </p>

                  <div className="project-tags">
                    <span>Android</span>
                    <span>Gestão de Validade</span>
                    <span>Relatórios</span>
                  </div>
                </div>
              </article>

              <article className="project-card">
                <div className="project-image desktop-preview">
                  <img
                    src="/images/comparador-csv.webp"
                    alt="Tela do sistema Comparador de CSV com filtros, tabela comparativa e opções de exportação"
                    loading="lazy"
                  />
                </div>

                <div className="project-content">
                  <span className="project-category">
                    APLICAÇÃO DESKTOP
                  </span>
                  <h3>Comparador de CSV</h3>
                  <p>
                    Ferramenta para comparação de arquivos
                    CSV, facilitando a identificação de
                    diferenças e a análise de informações
                    em rotinas operacionais.
                  </p>

                  <div className="project-tags">
                    <span>Python</span>
                    <span>CSV</span>
                    <span>Automação</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>


        
        <section className="contact-section" id="contato">
          <div className="container">
            <div className="contact-content">
              <span className="eyebrow">VAMOS CONVERSAR?</span>

              <h2>
                Vamos transformar ideias
                <span> em soluções.</span>
              </h2>

              <p>
                Estou aberto a conexões profissionais,
                oportunidades e conversas sobre gestão,
                tecnologia, inovação e desenvolvimento
                de soluções digitais.
              </p>

              <div className="contact-links">
                <a
                  href="https://www.linkedin.com/in/evertonooliveira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://github.com/evertonoliveiralopes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  GitHub ↗
                </a>
                
                <a
                  href="mailto:evertonoliveira@outlook.com"
                  className="contact-link"
                >
                  Enviar e-mail ✉
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

export default App
