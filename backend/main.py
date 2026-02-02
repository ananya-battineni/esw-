import os
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from dotenv import load_dotenv

import cloudinary
import cloudinary.uploader

# --------------------------------------------------
# Load environment variables
# --------------------------------------------------
load_dotenv()

# --------------------------------------------------
# App initialization
# --------------------------------------------------
app = FastAPI(title="E Swachha Green Tech Backend")

# --------------------------------------------------
# CORS configuration
# --------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:8080",
        "http://127.0.0.1:8080",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------------------------------------------------
# MongoDB connection
# --------------------------------------------------
MONGODB_URI = os.getenv("MONGODB_URI")

client = MongoClient(MONGODB_URI)
db = client["eswachha"]

products_collection = db["products"]
events_collection = db["events"]   # ✅ for Events & Gallery

# --------------------------------------------------
# Cloudinary configuration
# --------------------------------------------------
cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET"),
)

# --------------------------------------------------
# Health check
# --------------------------------------------------
@app.get("/")
def root():
    return {"status": "Backend running successfully"}

# --------------------------------------------------
# Products APIs
# --------------------------------------------------
@app.get("/products")
def get_products():
    products = list(products_collection.find({}, {"_id": 0}))
    return products

# --------------------------------------------------
# Events APIs (NEW)
# --------------------------------------------------
@app.get("/events")
def get_events():
    events = list(events_collection.find({}, {"_id": 0}))
    return events

@app.get("/events/{slug}")
def get_event(slug: str):
    event = events_collection.find_one({"slug": slug}, {"_id": 0})
    if not event:
        return {"error": "Event not found"}
    return event

# --------------------------------------------------
# Image upload (Cloudinary)
# --------------------------------------------------
@app.post("/upload-image")
async def upload_image(file: UploadFile = File(...)):
    result = cloudinary.uploader.upload(file.file)
    return {
        "imageUrl": result["secure_url"]
    }
