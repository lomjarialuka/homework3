import React from "react";
import "./StatsBar.css";

function StatsBar({ cards }) {
  const avgRating = Math.round(
    cards.reduce((sum, c) => sum + c.rating, 0) / cards.length
  );
  const topPlayer = cards.reduce((a, b) => (a.rating > b.rating ? a : b));
  const countries = [...new Set(cards.map((c) => c.country))].length;

  return (
    <div className="statsbar">
      <div className="stat-item">
        <span className="sval">{cards.length}</span>
        <span className="slabel">მოთამაშე</span>
      </div>
      <div className="stat-divider" />
      <div className="stat-item">
        <span className="sval">{avgRating}</span>
        <span className="slabel">საშ. რეიტინგი</span>
      </div>
      <div className="stat-divider" />
      <div className="stat-item">
        <span className="sval">{topPlayer.rating}</span>
        <span className="slabel">მაქს. რეიტინგი</span>
      </div>
      <div className="stat-divider" />
      <div className="stat-item">
        <span className="sval">{countries}</span>
        <span className="slabel">ქვეყანა</span>
      </div>
    </div>
  );
}

export default StatsBar;