import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import StarField from "../../components/stars/StarField";
import { getQuestions, checkAnswer } from "../../services/questApi";

function AstronomyQuest() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    const data = await getQuestions();
    setQuestions(data.questions);
  };

  const handleCheck = async () => {
    const currentQuestion = questions[currentIndex];

    const data = await checkAnswer(currentQuestion.id, answer);
    setMessage(data.message);

    if (data.correct) {
      if (currentIndex + 1 < questions.length) {
        setTimeout(() => {
          setCurrentIndex(currentIndex + 1);
          setAnswer("");
          setMessage("");
        }, 1200);
      } else {
        setCompleted(true);
      }
    }
  };

  const currentQuestion = questions[currentIndex];

  return (
    <main className="page universe-bg">
      <StarField />

      <div className="glass-card center-card">
        <p className="eyebrow">Astronomy Quest</p>

        <h1>Answer the Stars</h1>

        {!completed && currentQuestion && (
          <>
            <p className="subtitle">{currentQuestion.question}</p>

            <input
              className="cosmic-input"
              placeholder="Type your answer..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />

            <br />

            <button className="glow-button" onClick={handleCheck}>
              Check Answer
            </button>

            {message && <p className="identity-preview">{message}</p>}
          </>
        )}

        {completed && (
          <>
            <p className="subtitle">
              The stars have opened the path to the final galaxy.
            </p>

            <Link to="/final" className="glow-button">
              Unlock Final Galaxy
            </Link>
          </>
        )}
      </div>
    </main>
  );
}

export default AstronomyQuest;