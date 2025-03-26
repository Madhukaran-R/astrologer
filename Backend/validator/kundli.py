from pydantic import BaseModel,Field,EmailStr
from uuid import uuid4,UUID

class Kundli(BaseModel):
    user_id: int
    user_name: str
    gender: str
    phone: str
    email: EmailStr
    dob: str
    tob: str
    latitude: float
    longitude: float
    city: str
    state: str
    country: str
    display_name: str
    language: str
    chart_style: str
    source: str
