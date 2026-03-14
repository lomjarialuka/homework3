import React, { useState } from "react";
import "./Card.css";

function Card({ title, subtitle, description, rating, country, category, image, accent }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-inner">
        {/* Front */}
        <div className="card-front">
          <div className="card-image-wrapper">
            <img
              src={image}
              alt={title}
              className="card-img"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(title)}&size=300&background=1a1a2e&color=fff&bold=true`;
              }}
            />
            <div className="card-overlay" style={{ background: `linear-gradient(to top, ${accent}cc, transparent)` }} />
          </div>
          <div className="card-badge" style={{ background: accent }}>
            {category}
          </div>
          <div className="card-info">
            <h3 className="card-title">{title}</h3>
            <p className="card-subtitle">{subtitle}</p>
            <div className="card-meta">
              <span className="card-country">{country}</span>
              <span className="card-rating" style={{ color: accent }}>
                ♟ {rating}
              </span>
            </div>
          </div>
          <div className="card-hint">შეეხეთ დეტალებისთვის →</div>
        </div>

        {/* Back */}
        <div className="card-back">
          <div className="card-back-accent" style={{ background: accent }} />
          <div className="card-back-content">
            <h3 className="card-back-title">{title}</h3>
            <p className="card-back-subtitle">{subtitle}</p>
            <p className="card-back-desc">{description}</p>
            <div className="card-back-stats">
              <div className="stat">
                <span className="stat-label">FIDE რეიტინგი</span>
                <span className="stat-value" style={{ color: accent }}>{rating}</span>
              </div>
              <div className="stat">
                <span className="stat-label">ქვეყანა</span>
                <span className="stat-value">{country}</span>
              </div>
              <div className="stat">
                <span className="stat-label">კატეგორია</span>
                <span className="stat-value">{category}</span>
              </div>
            </div>
          </div>
          <div className="card-hint back">← უკან</div>
        </div>
      </div>
    </div>
  );
}

export default Card;