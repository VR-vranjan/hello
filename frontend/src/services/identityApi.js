import API_BASE_URL from "./api";

export async function analyzeIdentity(celestialBody) {
  let retries = 5;

  while (retries > 0) {
    try {
      const controller = new AbortController();

      const timeout = setTimeout(() => {
        controller.abort();
      }, 20000); // wait max 20s

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
          signal: controller.signal,
        }
      );

      clearTimeout(timeout);

      const data = await response.json();

      return data;

    } catch (error) {
      retries--;

      if (retries === 0) {
        throw new Error("The universe is still waking up...");
      }

      await new Promise((resolve) =>
        setTimeout(resolve, 4000)
      );
    }
  }
}