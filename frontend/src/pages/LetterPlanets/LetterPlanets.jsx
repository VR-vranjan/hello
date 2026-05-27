import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import StarField from "../../components/stars/StarField";
import LetterPlanet from "../../components/planets/LetterPlanet";
import { getLetters } from "../../services/letterApi";

function LetterPlanets() {
  const [letters, setLetters] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    loadLetters();
  }, []);

  const loadLetters = async () => {
    const data = await getLetters();
    setLetters(data.letters);
  };

  return (
    <main className="page universe-bg">
      <StarField />

      <div className="glass-card center-card">
        <h1>Letter Planets</h1>

        <p className="subtitle">
          Some planets carry letters meant only for you.
        </p>

        <div className="planet-grid">
          {letters.slice(0, 3).map((letter) => (
            <LetterPlanet
              key={letter.id}
              letter={letter}
              onClick={setSelected}
            />
          ))}
        </div>

        {selected && (
          <div className="letter-popup">
            <h3>{selected.title}</h3>

            {selected.image && (
              <img
                src={selected.image}
                alt={selected.title}
                className="letter-image"
              />
            )}

            <p>{selected.content}</p>
          </div>
        )}

        <Link to="/quest" className="glow-button">
          Start Astronomy Quest
        </Link>
      </div>
    </main>
  );
}

export default LetterPlanets;