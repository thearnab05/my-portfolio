export default function ProjectCard({ title, description, tags, link }) {
    return (
        <div className="project-card glass">
            <div className="card-image"></div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <div className="card-tags">
                    {tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
            <style jsx>{`
        .project-card {
          overflow: hidden;
          transition: var(--transition);
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        .card-image {
          height: 200px;
          background: linear-gradient(135deg, var(--accent), #1a1a1e);
          position: relative;
        }
        .card-content {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .card-title {
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }
        .card-description {
          font-size: 0.95rem;
          opacity: 0.6;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }
        .tag {
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          background: var(--accent);
          border-radius: 4px;
          color: var(--primary);
          font-weight: 600;
        }
      `}</style>
        </div>
    );
}
