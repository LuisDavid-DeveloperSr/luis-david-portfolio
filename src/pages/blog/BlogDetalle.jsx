import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../../data/blogPosts";
import "./blog.css";

export default function BlogDetalle() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="section blog">
        <div className="blog-inner glass-container">
          <p>Artículo no encontrado</p>
          <Link to="/blog">Volver al blog</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section blog">
      <div className="blog-inner glass-container">
        <Link to="/blog" className="blog-back">
          ← Volver al blog
        </Link>

        <span className="blog-category">{post.category}</span>
        <h1 className="blog-title">{post.title}</h1>
        <span className="blog-date">{post.date}</span>

        <div className="blog-content">
          {post.content.trim().split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
