import "./educacion.css";

export default function Educacion() {
  return (
    <section className="section education">
      <div className="education-inner glass-container animated-container">
        {/* HEADER */}
        <header className="education-header">
          <h1>Educación</h1>
          <p>Formación académica y técnica en desarrollo de software</p>
          <span className="education-line"></span>
        </header>

        {/* TIMELINE */}
        <div className="education-timeline">
          {/* ITEM 1 */}
          <div className="education-item">
            <div className="education-content">
              <span className="education-date">2024 · Actualidad</span>
              <h3>Grado en Ciencia de Datos Online</h3>
              <h4>Universitat Oberta de Catalunya (UOC)</h4>
              <p>
                Formación universitaria enfocada en análisis de datos,
                estadística y programación, compatible con jornada completa.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="education-item">
            <div className="education-content">
              <span className="education-date">2022 · 2024</span>
              <h3>Desarrollo de Aplicaciones Web (DAW)</h3>
              <h4>MEDAC</h4>
              <p>
                Formación técnica en desarrollo backend y frontend, bases de
                datos, APIs REST y buenas prácticas de programación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
