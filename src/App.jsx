import React from "react";
import { cards } from "./data.js";
import Card from "./components/card.jsx";
import Navbar from "./components/navbar.jsx";
import StatsBar from "./components/statsbar.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <div className="hero" id="cards">
          <p className="hero-tag">♟ შახმატის სამყარო</p>
          <h1 className="hero-title">Chess Masters</h1>
          <p className="hero-desc">
            ისტორიის საუკეთესო შახმატელები — დააჭირეთ ქარდს დეტალებისთვის
          </p>
          <button
            className="hero-btn"
            onClick={() => window.open("https://lichess.org", "_blank")}
          >
            <span>▶</span> Lichess-ზე თამაში დაიწყე
          </button>
        </div>
        <StatsBar cards={cards} />
        <div className="cards-grid">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              rating={card.rating}
              country={card.country}
              category={card.category}
              image={card.image}
              accent={card.accent}
            />
          ))}
        </div>
      </main>
      <footer className="footer">
        <p>♟ ChessMasters — შექმნილია React-ით</p>
      </footer>
    </div>
  );
}

export default App;