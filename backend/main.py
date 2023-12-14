from fastapi import FastAPI

description = """
Goose project API.
"""

app = FastAPI(
    title="Goose API",
    description=description,
    version="0.0.1",
    contact={"name": "Tam Bureetes", "email": "thirawat.tam@gmail.com"},
)
