import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/home/Home";
import SobreMi from "./pages/sobreMi/SobreMi";
import Habilidades from "./pages/habilidades/Habilidades";
import Educacion from "./pages/educacion/Educacion";
import Experiencia from "./pages/experiencia/Experiencia";
import Portafolio from "./pages/portafolio/Portafolio";
import Blog from "./pages/blog/Blog";
import BlogDetalle from "./pages/blog/BlogDetalle";
import Contacto from "./pages/contacto/Contacto";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre-mi" element={<SobreMi />} />
          <Route path="habilidades" element={<Habilidades />} />
          <Route path="educacion" element={<Educacion />} />
          <Route path="experiencia" element={<Experiencia />} />
          <Route path="portafolio" element={<Portafolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogDetalle />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
