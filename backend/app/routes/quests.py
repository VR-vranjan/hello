import json
from pathlib import Path
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

BASE_DIR = Path(__file__).resolve().parent.parent
QUESTIONS_FILE = BASE_DIR / "data" / "quests" / "questions.json"


class AnswerRequest(BaseModel):
    question_id: int
    answer: str
    identity: str | None = None


@router.get("/")
def get_questions():
    with open(QUESTIONS_FILE, "r", encoding="utf-8") as file:
        questions = json.load(file)

    safe_questions = [
        {
            "id": q["id"],
            "question": q["question"],
            "hint": q["hint"]
        }
        for q in questions
    ]

    return {"questions": safe_questions}


@router.post("/check")
def check_answer(request: AnswerRequest):
    with open(QUESTIONS_FILE, "r", encoding="utf-8") as file:
        questions = json.load(file)

    for q in questions:
        if q["id"] == request.question_id:

            if q["id"] == 1:
                is_correct = (
                    request.answer.strip().lower()
                    ==
                    request.identity.strip().lower()
                )
            else:
                is_correct = (
                    request.answer.strip().lower()
                    ==
                    q["answer"].strip().lower()
                )

            return {
                "correct": is_correct,
                "message": q["success"] if is_correct else q["hint"]
            }

    return {
        "correct": False,
        "message": "This star does not exist."
    }