import API_BASE_URL from "./api";

export async function getQuestions() {
  const response = await fetch(`${API_BASE_URL}/quests/`);

  if (!response.ok) {
    throw new Error("Unable to load quest questions");
  }

  return response.json();
}

export async function checkAnswer(questionId, answer) {
  const identity = localStorage.getItem("celestialBody");

  const response = await fetch(`${API_BASE_URL}/quests/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question_id: questionId,
      answer,
      identity,   // ✅ REQUIRED
    }),
  });

  return response.json();
}