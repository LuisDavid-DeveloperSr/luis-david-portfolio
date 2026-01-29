import "./sobreMi.css";
import { FaBrain, FaProjectDiagram, FaUsers, FaRocket } from "react-icons/fa";

export default function SobreMi() {
  return (
    /* 👇 MISMA CLASE BASE QUE HABILIDADES */
    <section className="section about">
      {/* CONTENEDOR PRINCIPAL */}
      <div className="about-inner glass-container animated-container">
        {/* HEADER */}
        <header className="about-header">
          <h1>Sobre mí</h1>
          <span className="about-line"></span>
        </header>

        {/* CONTENIDO SUPERIOR */}
        <div className="about-content">
          {/* TEXTO */}
          <div className="about-text">
            <p>
              Soy <strong>Luis David</strong>, desarrollador junior con
              formación en Desarrollo de Aplicaciones Web y un enfoque claro en
              construir software bien estructurado.
            </p>

            <p>
              Me centro en entender el problema antes de escribir código,
              diseñando soluciones que sean mantenibles, escalables y fáciles de
              entender para otros desarrolladores.
            </p>

            <p>
              Disfruto trabajar en equipo, aprender de otros perfiles técnicos y
              seguir creciendo como developer en entornos profesionales
              reales.
            </p>
          </div>

          {/* BLOQUE DESTACADO */}
          <div className="about-highlight">
            <div className="developer-icon">
              <svg
                width="90"
                height="90"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* CÍRCULO EXTERIOR */}
                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  stroke="url(#devGrad)"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />

                {/* SÍMBOLOS DE CÓDIGO */}
                <path
                  d="M46 44L34 60L46 76"
                  stroke="url(#devGrad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M74 44L86 60L74 76"
                  stroke="url(#devGrad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* ANILLO GIRATORIO */}
                <circle
                  className="rotate-ring"
                  cx="60"
                  cy="60"
                  r="48"
                  stroke="url(#devGrad)"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />

                <defs>
                  <linearGradient id="devGrad" x1="0" y1="0" x2="120" y2="120">
                    <stop stopColor="#ff0055" />
                    <stop offset="1" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <h3>Mentalidad developer</h3>
            <p>Arquitectura · Código limpio · Escalabilidad</p>
          </div>
        </div>

        {/* TARJETAS */}
        <div className="about-cards">
          <div className="about-card">
            <FaBrain className="about-icon" />
            <h3>Cómo pienso</h3>
            <p>Analizar antes de programar y tomar decisiones con criterio.</p>
          </div>

          <div className="about-card">
            <FaProjectDiagram className="about-icon" />
            <h3>Cómo trabajo</h3>
            <p>Desarrollo iterativo, ordenado y enfocado en buenas prácticas.</p>
          </div>

          <div className="about-card">
            <FaUsers className="about-icon" />
            <h3>En equipo</h3>
            <p>Comunicación clara y colaboración constante.</p>
          </div>

          <div className="about-card">
            <FaRocket className="about-icon" />
            <h3>Objetivo</h3>
            <p>Seguir creciendo como developer profesional.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
