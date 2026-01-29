# Portafolio – Luis David

Portafolio web personal desarrollado con React, enfocado en mostrar mi perfil como Junior Developer, mis proyectos, experiencia y enfoque técnico.

El objetivo del proyecto es presentar de forma clara y profesional mi trabajo, mis habilidades y mi manera de pensar el desarrollo de software.

# Sitio Web
 Ver portafolio web online:
 https://luisdavidespinal.com

# Características principales

- SPA desarrollada con React + Vite

- Navegación mediante React Router

- Diseño responsive (desktop & mobile)

- Sidebar fija con navegación y menú móvil

- Animaciones suaves y efecto glassmorphism

# Secciones independientes y escalables

- Home / Hero
- Sobre mí
- Habilidades
- Educación
- Experiencia
- Proyectos 
- Blog técnico
- Contacto
Blog gestionado mediante datos estáticos (blogPosts.js)
Código organizado por páginas y componentes

# Tecnologías utilizadas

* Frontend
- React
- Vite
- React Router DOM
- JavaScript (ES6+)
- HTML5
- CSS3 (custom, sin frameworks)

* UI / UX
- Diseño responsive
- Glassmorphism
- Animaciones CSS
- Iconos con react-icons

* Herramientas
- Git & GitHub
- Vercel (deploy)
- ESLint

# Estructura del proyecto
src/
├── assets/
├── components/
│   └── layout/
│       ├── Layout.jsx
│       └── Sidebar.jsx
├── data/
│   └── blogPosts.js
├── pages/
│   ├── home/
│   ├── sobreMi/
│   ├── habilidades/
│   ├── educacion/
│   ├── experiencia/
│   ├── portafolio/
│   ├── blog/
│   └── contacto/
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx

# Arquitectura y enfoque

- Componentes desacoplados por responsabilidad

- Cada sección tiene: su propio JSX y su propio archivo CSS

- Uso de un Layout general para mantener la estructura

- Reutilización de clases base como: .section .glass-container .animated-container

- Enfoque en: Código limpio, Escalabilidad y Mantenibilidad

# Blog técnico

El blog se alimenta desde un archivo estático:
src/data/blogPosts.js


Cada entrada contiene:

- slug
- categoría
- título
- fecha
- resumen
- contenido completo

Esto permite escalar fácilmente a una API o CMS en el futuro.

# Instalación y uso local
- Clonar el repositorio
git clone https://github.com/LuisDavid-DeveloperSr/luis-david-portfolio.git
cd luis-david-portfolio

- Instalar dependencias
npm install

- Ejecutar en desarrollo
npm run dev


El proyecto se abrirá en:

http://localhost:5173

# Despliegue en Vercel

- Subir el repositorio a GitHub

- Ir a https://vercel.com

- Importar el repositorio

- Configuración automática:

Framework: Vite

Build command: npm run build

Output directory: dist

Deploy 

# Contacto

- Email: lde081003@gmail.com

- LinkedIn:
https://www.linkedin.com/in/luis-david-espinal-720487363

- GitHub:
https://github.com/LuisDavid-DeveloperSr

# Estado del proyecto

✅ Activo
🔧 En mejora continua
🎯 Abierto a oportunidades como Junior Developer