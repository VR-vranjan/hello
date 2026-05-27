import json
from pathlib import Path
from fastapi import APIRouter

router = APIRouter()

BASE_DIR = Path(__file__).resolve().parent.parent

LETTERS_FILE = (
    BASE_DIR
    / "data"
    / "letters"
    / "letters.json"
)


@router.get("/")
def get_letters():

    with open(
        LETTERS_FILE,
        "r",
        encoding="utf-8"
    ) as file:

        letters = json.load(file)

    return {
        "letters": letters
    }