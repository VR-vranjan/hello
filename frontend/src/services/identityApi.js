import API_BASE_URL from "./api";

export async function analyzeIdentity(celestialBody) {
  const response = await fetch(
    `${API_BASE_URL}/identity/analyze`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        celestial_body: celestialBody,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to analyze identity"
    );
  }

  return response.json();
}