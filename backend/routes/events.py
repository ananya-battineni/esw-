from fastapi import APIRouter, HTTPException
from database import events_collection

router = APIRouter(prefix="/events", tags=["Events"])


@router.get("/")
def get_events():
    events = list(events_collection.find({}, {"_id": 0}))
    return events


@router.get("/{slug}")
def get_event(slug: str):
    event = events_collection.find_one({"slug": slug}, {"_id": 0})

    if not event:
        raise HTTPException(status_code=404, detail="Event not found")

    return event
