function MemoryStar({
  memory,
  onClick
}) {
  return (
    <div
      className="memory-star"
      onClick={() => onClick(memory)}
    >
      ⭐

      <span>
        {memory.title}
      </span>

    </div>
  );
}

export default MemoryStar;