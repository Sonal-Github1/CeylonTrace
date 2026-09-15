from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from sqlalchemy.orm import Session
from database import get_db, Base, engine
from sqlalchemy import text

app = FastAPI(title="CeilonTrace AI Engine", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TravelRequest(BaseModel):
    prompt: str
    groupType: Optional[str] = "Solo"
    budgetLevel: Optional[int] = 3

@app.post("/api/recommend")
def generate_recommendation(request: TravelRequest, db: Session = Depends(get_db)):
    try:
        # Query destinations from PostgreSQL (fallback to raw SQL text if models aren't mapped yet)
        result = db.execute(text("SELECT id, name, category, latitude, longitude FROM \"Destination\" LIMIT 3;"))
        destinations = [
            {"id": row[0], "name": row[1], "category": row[2], "lat": row[3], "lng": row[4]}
            for row in result
        ]
        
        if not destinations:
            # Fallback sample if table is empty before seeding
            destinations = [
                {"name": "Sigiriya Rock Fortress", "category": "Culture", "lat": 7.9570, "lng": 80.7603},
                {"name": "Nine Arches Bridge, Ella", "category": "Adventure", "lat": 6.8742, "lng": 81.0620}
            ]

        return {
            "query": request.prompt,
            "groupType": request.groupType,
            "optimizedItinerary": [
                {"dayNumber": 1, "stopOrder": i+1, "destination": dest["name"]}
                for i, dest in enumerate(destinations)
            ]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))