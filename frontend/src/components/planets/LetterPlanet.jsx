function LetterPlanet({ letter, onClick }) {
  return (
    <div
      className="planet-card"
      onClick={() => onClick(letter)}
    >
      <div className="planet-icon">
        🪐
      </div>

      <h3>
        {letter.planet}
      </h3>

      <p>
        {letter.title}
      </p>
    </div>
  );
}

export default LetterPlanet;