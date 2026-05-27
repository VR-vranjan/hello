from fastapi import APIRouter
from pydantic import BaseModel

from app.utils.mistral import ask_mistral

router = APIRouter()


class IdentityRequest(BaseModel):
    celestial_body: str


@router.post("/analyze")
def analyze_identity(request: IdentityRequest):
    prompt = f"""
You are the Celestial Identity Agent for a romantic astronomy birthday website called Our Constellation.

The person chose this celestial body:
{request.celestial_body}

Write a short, beautiful, positive response in 2-3 lines.
Tone: warm, romantic, poetic, hopeful.
Do not make it sad.
Do not mention death, distance, breakup, or loss.
"""

    message = ask_mistral(prompt)

    return {
        "celestial_body": request.celestial_body,
        "message": message
    }