function StarField() {
  const stars = Array.from({ length: 150 });

  return (
    <div className="star-container">
      {stars.map((_, index) => (
        <span
          key={index}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

export default StarField;