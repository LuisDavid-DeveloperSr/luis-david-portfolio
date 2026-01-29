import "./contacto.css";
import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Contacto() {
  return (
    <section className="section contact">
      <div className="contact-inner glass-container animated-container">
        {/* HEADER */}
        <header className="contact-header">
          <h1>Contacto</h1>
          <p>
            ¿Te interesa mi perfil o quieres hablar sobre una oportunidad?
            Puedes contactarme directamente por aquí.
          </p>
          <span className="contact-line"></span>
        </header>

        {/* CTA */}
        <div className="contact-cards">
          <a
            href="mailto:lde081003@gmail.com"
            className="contact-card"
          >
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <span>lde081003@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/luis-david-espinal-720487363"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaLinkedinIn className="contact-icon" />
            <h3>LinkedIn</h3>
            <span>Conecta conmigo</span>
          </a>

          <a
            href="https://github.com/LuisDavid-DeveloperSr"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaGithub className="contact-icon" />
            <h3>GitHub</h3>
            <span>Ver proyectos</span>
          </a>
        </div>

        {/* CIERRE */}
        <p className="contact-footer">
          Actualmente abierto a oportunidades como{" "}
          <strong>Junior Developer</strong>.
        </p>
      </div>
    </section>
  );
}
