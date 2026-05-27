from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import identity, memories, letters, quests, ending

app = FastAPI(title="Our Constellation API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(identity.router, prefix="/api/identity", tags=["Identity"])
app.include_router(memories.router, prefix="/api/memories", tags=["Memories"])
app.include_router(letters.router, prefix="/api/letters", tags=["Letters"])
app.include_router(quests.router, prefix="/api/quests", tags=["Quests"])
app.include_router(ending.router, prefix="/api/ending", tags=["Ending"])


@app.get("/")
def home():
    return {"message": "Our Constellation backend is running 🌌"}