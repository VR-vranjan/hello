import json
from pathlib import Path

from fastapi import APIRouter
from pydantic import BaseModel
#from app.rag.retriever import retrieve_memory

from app.utils.mistral import ask_mistral

router = APIRouter()

BASE_DIR = Path(__file__).resolve().parent.parent
MEMORIES_FILE = BASE_DIR / "data" / "memories" / "moments.json"


class MemoryNarrationRequest(BaseModel):
    memory_id: int


def load_memories():
    with open(MEMORIES_FILE, "r", encoding="utf-8") as file:
        return json.load(file)


@router.get("/")
def get_memories():
    memories = load_memories()
    return {"memories": memories}


@router.post("/narrate")
def narrate_memory(request: MemoryNarrationRequest):
    memories = load_memories()

    selected_memory = None

    for memory in memories:
        if memory["id"] == request.memory_id:
            selected_memory = memory
            break

    if not selected_memory:
        return {
            "narration": "This star is still waiting for its memory."
        }

    prompt = f"""
You are the Constellation Memory Agent for a romantic astronomy birthday website called Our Constellation.

Memory title:
{selected_memory["title"]}

Memory date:
{selected_memory["date"]}

Memory content:
{selected_memory["content"]}

Tags:
{", ".join(selected_memory["tags"])}

Write a beautiful 3-4 line narration for this memory.
Tone: warm, romantic, positive, emotional, astronomy-themed.
Do not make it sad.
Do not mention death, distance, breakup, or loss.
Do not invent facts outside the memory.
"""

    narration = ask_mistral(prompt)

    return {
        "memory_id": request.memory_id,
        "narration": narration
    }