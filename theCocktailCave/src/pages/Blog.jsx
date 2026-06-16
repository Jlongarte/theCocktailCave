import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { posts } from "../posts";
import "./Blog.css";

const Blog = () => {
  // Estado exclusivo para el Visor (Desktop)
  const [selectedSlug, setSelectedSlug] = useState(posts[0]?.slug || "");

  // Estado exclusivo para el Acordeón (Móvil/Tablet)
  const [activeAccordionSlug, setActiveAccordionSlug] = useState(null);

  const handlePostClick = (slug) => {
    // Desktop: Cambia el visor derecho
    setSelectedSlug(slug);

    // Móvil: Abre/Cierra el acordeón
    setActiveAccordionSlug(activeAccordionSlug === slug ? null : slug);
  };

  const selectedPost =
    posts.find((post) => post.slug === selectedSlug) || posts[0];

  return (
    <section className="blog-section">
      <div className="blog-container">
        {/* COLUMNA IZQUIERDA */}
        <div className="blog-sidebar">
          <h2 className="blog-main-title">News</h2>
          <p className="blog-main-subtitle">
            Stories, recipes and nocturne thoughts.
          </p>

          <div className="blog-posts-list">
            {posts.map((post) => {
              const isSelectedDesktop = post.slug === selectedSlug;
              const isAccordionOpen = post.slug === activeAccordionSlug;

              return (
                <div
                  key={post.slug}
                  className={`blog-post-item-wrapper ${isAccordionOpen ? "acc-is-open" : ""}`}
                >
                  <button
                    onClick={() => handlePostClick(post.slug)}
                    className={`blog-post-card ${isSelectedDesktop ? "is-selected" : ""}`}
                  >
                    <div className="blog-header-text">
                      <span className="blog-post-date">{post.date}</span>
                      <h3 className="blog-post-title">{post.title}</h3>
                      <p className="blog-post-desc">{post.description}</p>
                    </div>

                    {/* El icono solo se mostrará en versión móvil por CSS */}
                    <span className="blog-accordion-icon">
                      {isAccordionOpen ? "✕" : "＋"}
                    </span>
                  </button>

                  {/* CONTENIDO ACORDEÓN DESPLEGABLE */}
                  <AnimatePresence initial={false}>
                    {isAccordionOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="blog-accordion-content"
                      >
                        <div className="reader-markdown-body">
                          <ReactMarkdown>{post.content}</ReactMarkdown>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* COLUMNA DERECHA: Visor Fijo Editorial */}
        <div className="blog-content-viewer">
          {selectedPost ? (
            <article className="blog-article-reader">
              <span className="reader-date">{selectedPost.date}</span>
              <h2 className="reader-title">{selectedPost.title}</h2>
              <div className="reader-markdown-body">
                <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
              </div>
            </article>
          ) : (
            <p className="blog-empty-state">
              Select an entry from the journal.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
