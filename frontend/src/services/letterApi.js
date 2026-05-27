import API_BASE_URL from "./api";

export async function getLetters() {

  const response =
  await fetch(
    `${API_BASE_URL}/letters/`
  );

  if (!response.ok) {
    throw new Error(
      "Unable to load letters"
    );
  }

  return response.json();
}