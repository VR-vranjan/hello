const API_BASE_URL = "http://127.0.0.1:8000/api";

export async function getMemories() {
  const response = await fetch(`${API_BASE_URL}/memories/`);

  if (!response.ok) {
    throw new Error("Unable to load memories");
  }

  return response.json();
}

export async function narrateMemory(memoryId) {
  const response = await fetch(`${API_BASE_URL}/memories/narrate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      memory_id: memoryId,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to narrate memory");
  }

  return response.json();
}