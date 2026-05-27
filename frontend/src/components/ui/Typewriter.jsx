import { useEffect, useState } from "react";

function Typewriter({ text, speed = 70 }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText("");

    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayText}</span>;
}

export default Typewriter;