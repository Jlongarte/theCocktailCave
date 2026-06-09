import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { posts } from "../posts";
import "./Blog.css";

const Blog = () => {
  const [selectedSlug, setSelectedSlug] = useState(posts[0]?.slug || "");

  const selectedPost =
    posts.find((post) => post.slug === selectedSlug) || posts[0];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-sidebar">
          <h1 className="blog-main-title">News</h1>

          <p className="blog-main-subtitle">
            Stories, recipes and nocturne thoughts.
          </p>

          <div className="blog-posts-list">
            {posts.map((post) => {
              const isSelected = post.slug === selectedSlug;

              return (
                <button
                  key={post.slug}
                  onClick={() => setSelectedSlug(post.slug)}
                  className={`blog-post-card ${isSelected ? "is-selected" : ""}`}
                >
                  <span className="blog-post-date">{post.date}</span>

                  <h3 className="blog-post-title">{post.title}</h3>

                  <p className="blog-post-desc">{post.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="blog-content-viewer">
          {selectedPost ? (
            <article className="blog-article-reader">
              <span className="reader-date">{selectedPost.date}</span>

              <h2 className="reader-title">{selectedPost.title}</h2>

              {selectedPost.image && (
                <div className="blog-reader-image-container">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="blog-reader-image"
                  />

                  <div className="blog-reader-image-overlay"></div>
                </div>
              )}

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
