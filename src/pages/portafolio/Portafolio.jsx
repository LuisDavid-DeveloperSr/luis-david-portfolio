import "./portafolio.css";

const proyectos = [
  {
    slug: "arimcrea-identidad-visual",
    title: "Arimcrea",
    description:
      "Sitio Web sobre diseño e identidad de marca para Arimcrea",
    tech: ["UI/UX", "Vercel / Hosting", "HTTP / HTTPS/UX"],
    demoUrl: "https://arimcrea.vercel.app", 
    repoUrl: NULL
  },
  {
    slug: "estadisticas-laborales",
    title: "Dashboard de Estadísticas Laborales (Eurostat)",
    description:
      "Aplicación full-stack para consultar y visualizar estadísticas oficiales de desempleo en Europa.",
    tech: ["React", "Node.js", "Eurostat API"],
    demoUrl: "https://labor-stats-frontend.vercel.app/",
    repoUrl: "https://github.com/LuisDavid-DeveloperSr/labor-stats-frontend",
  },
  {
    slug: "analisis-rendimiento",
    title: "Dashboard de Rendimiento Universitario",
    description:
      "Dashboard que analiza el rendimiento académico y la tasa de abandono universitario en Cataluña a partir de datos oficiales.",
    tech: ["Python", "Streamlit", "Pandas"],
    demoUrl: "https://university-performance-analysis-v4yyylcpfginmumyk6ic2a.streamlit.app/",
    repoUrl: "https://github.com/LuisDavid-DeveloperSr/university-performance-analysis.git",
  },

];

export default function Portafolio() {
  return (
    <section className="section portfolio">
      <div className="portfolio-inner glass-container animated-container">
        {/* HEADER */}
        <header className="portfolio-header">
          <h1>Proyectos</h1>
          <p>Proyectos desarrollados y soluciones técnicas implementadas</p>
          <span className="portfolio-line"></span>
        </header>

        {/* GRID */}
        <div className="portfolio-grid">
          {proyectos.map((project) => {
            const link = project.demoUrl || project.repoUrl;

            return (
              <a
                key={project.slug}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card"
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul className="portfolio-tech">
                  {project.tech.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>

                <span className="portfolio-cta">
                  Ver proyecto →
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
