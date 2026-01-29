import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);
  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.querySelector(".sidebar");
      if (!sidebar) return;

      if (window.scrollY > 10) {
        sidebar.classList.add("scrolled");
      } else {
        sidebar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // limpieza 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  //  Cerrar menú con ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* SIDEBAR */}
      <aside className="sidebar">
        
        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <svg width="110" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00c6ff" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>

            <path
              d="M50 20 L150 20 L190 100 L150 180 L50 180 L10 100 Z"
              fill="none"
              stroke="url(#logoGradient)"
              strokeWidth="8"
            />

            <path
              d="M80 60 V140 H130"
              fill="none"
              stroke="url(#logoGradient)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle cx="140" cy="80" r="6" fill="#00c6ff" />
            <circle cx="155" cy="65" r="5" fill="#a855f7" />
          </svg>
        </Link>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* MENÚ DESKTOP */}
        <nav className="menu">
          <NavLink to="/sobre-mi">Sobre mí</NavLink>
          <NavLink to="/habilidades">Habilidades</NavLink>
          <NavLink to="/educacion">Educación</NavLink>
          <NavLink to="/experiencia">Experiencia</NavLink>
          <NavLink to="/portafolio">Proyectos</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>

        <div className="sidebar-social">
          <a href="https://www.linkedin.com/in/luis-david-espinal-720487363" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/LuisDavid-DeveloperSr" target="_blank">
            <FaGithub />
          </a>
          <a href="mailto:lde081003@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="sidebar-copy">© {new Date().getFullYear()} Luis David</p>
      </aside>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* MENÚ MÓVIL OVERLAY */}
      <nav className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <NavLink
          to="/sobre-mi"
          onClick={closeMenu}
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Sobre mí
        </NavLink>

        <NavLink
          to="/habilidades"
          onClick={closeMenu}
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Habilidades
        </NavLink>

        <NavLink
          to="/educacion"
          onClick={closeMenu}
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Educación
        </NavLink>

        <NavLink
          to="/experiencia"
          onClick={closeMenu}
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Experiencia
        </NavLink>

        <NavLink
          to="/portafolio"
          onClick={closeMenu}
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Proyectos
        </NavLink>

        <NavLink
          to="/blog"
          onClick={closeMenu}
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Blog
        </NavLink>

        <NavLink
          to="/contacto"
          onClick={closeMenu}
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Contacto
        </NavLink>
      </nav>

    </>
  );
}
