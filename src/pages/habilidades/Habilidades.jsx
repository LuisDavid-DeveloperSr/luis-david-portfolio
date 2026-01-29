import "./habilidades.css";
import {
  FaServer,
  FaDatabase,
  FaTools,
  FaCode,
  FaProjectDiagram,
  FaLaptopCode,
} from "react-icons/fa";

const skills = [
  {
    icon: <FaServer />,
    title: "Core Backend",
    description: "Lógica y servicios del sistema",
    items: ["Node.js", "JavaScript", "APIs REST",],
  },
  {
    icon: <FaDatabase />,
    title: "Datos",
    description: "Persistencia y consultas",
    items: ["MySQL", "Oracle", "MongoDB"],
  },
  {
    icon: <FaProjectDiagram />,
    title: "Arquitectura",
    description: "Cómo pienso el software",
    items: ["Código limpio", "Separación de capas", "Escalabilidad"],
  },
  {
    icon: <FaTools />,
    title: "Herramientas",
    description: "Trabajo colaborativo real",
    items: ["Git", "GitHub", "Linux"],
  },
  {
    icon: <FaCode />,
    title: "Frontend (support)",
    description: "Integración y UI",
    items: ["React", "HTML", "CSS"],
  },
   {
    icon: <FaLaptopCode />,
    title: "Flujo de desarrollo",
    items: ["Diseño y testeo de APIs","Logs y debugging", "Documentación técnica"],
  },
];

export default function Habilidades() {
  return (
    /* 👇 MISMA CLASE BASE QUE SOBRE MI */
    <section className="section skills">
      {/* CONTENEDOR GLASS ÚNICO */}
      <div className="skills-inner glass-container animated-container">
        {/* HEADER */}
        <header className="skills-header">
          <h1>Stack técnico</h1>
          <p>Tecnologías y enfoque que utilizo para construir software</p>
          <span className="skills-line"></span>
        </header>

        {/* GRID */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>

              <h3>{skill.title}</h3>
              <span className="skill-desc">{skill.description}</span>

              <ul>
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
