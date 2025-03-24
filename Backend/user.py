from flask import Blueprint, jsonify
from .utils.db import DB

def createUser():
    db = DB().get_connection()
    cursor = db.cursor()
    cursor.execute("INSERT INTO users (name) VALUES ('madhu')")
    db.commit
    return jsonify({"message": "User Created madhu!"})