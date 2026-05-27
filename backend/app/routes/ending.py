from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def ending_home():
    return {"message": "Ending route working"}