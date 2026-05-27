import os
from dotenv import load_dotenv
from mistralai.client import Mistral

load_dotenv()

api_key = os.getenv("MISTRAL_API_KEY")


def ask_mistral(prompt: str) -> str:
    with Mistral(api_key=api_key) as mistral:
        response = mistral.chat.complete(
            model="mistral-small-latest",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            stream=False,
            response_format={
                "type": "text"
            }
        )

    return response.choices[0].message.content