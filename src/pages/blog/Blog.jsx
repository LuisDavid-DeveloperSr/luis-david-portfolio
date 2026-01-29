import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blogPosts";
import "./blog.css";

export default function Blog() {
  return (
    <section className="section blog">
      <div className="blog-inner glass-container">
        <header className="blog-header">
          <h1>Blog</h1>
          <p>Notas técnicas sobre backend, frontend y bases de datos</p>
          <span className="blog-line"></span>
        </header>

        <div className="blog-list">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <span className="blog-category">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>

              <Link to={`/blog/${post.slug}`} className="blog-cta">
                Leer más →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
