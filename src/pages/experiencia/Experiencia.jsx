import "./experiencia.css";

export default function Experiencia() {
  return (
    <section className="section experience">
      <div className="experience-inner glass-container animated-container">
        {/* HEADER */}
        <header className="experience-header">
          <h1>Experiencia</h1>
          <p>Experiencia profesional y práctica en desarrollo web</p>
          <span className="experience-line"></span>
        </header>

        {/* TIMELINE */}
        <div className="experience-timeline">
          {/* ITEM 1 */}
          <div className="experience-item">
            <div className="experience-content">
              <span className="experience-date">Mar 2024 · Jun 2024</span>
              <h3>Junior Developer Web</h3>
              <h4>Grupo Oro España</h4>

              <ul>
                <li>
                  Desarrollo de funcionalidades web mediante APIs REST con Node.js, utilizadas por distintos equipos internos.
                </li>
                <li>
                  Implementación de lógica backend y conexión con bases de datos SQL (MySQL y Oracle).
                </li>
                <li>
                  Colaboración en la integración entre backend y frontend, asegurando el correcto flujo de datos.
                </li>
                <li>
                  Gestión, consultas y optimización básica de datos.
                </li>
                <li>
                  Soporte y mantenimiento de aplicaciones web en entornos Apache y Node.js.
                </li>
                <li>Trabajo en equipo utilizando Git y GitHub como sistema de control de versiones.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
