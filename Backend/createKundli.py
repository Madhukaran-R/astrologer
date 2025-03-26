from flask import jsonify,request
from .utils.db import DB
from.validator.kundli import Kundli



def generateKundli():
    try:    
        data = request.get_json()
        Kundli(**data)
        db = DB().get_connection()
        cursor = db.cursor()
        query = """INSERT INTO kundli_master SET 
                    id = uuid(),
                    user_id = %s,
                    status = %s,
                    payment_status = %s,
                    user_name = %s,
                    gender = %s,
                    phone = %s,
                    email = %s,
                    dob = %s,
                    tob = %s,
                    latitude = %s,
                    longitude = %s,
                    city = %s,
                    state = %s,
                    country = %s,
                    display_name = %s,
                    language = %s,
                    chart_style = %s,
                    source = %s
        """
        cursor.execute(query,(
            data['phone'],
            "created",
            "initiated",
            data['user_name'],
            data['gender'],
            data['phone'],
            data['email'],
            data['dob'],
            data['tob'],
            data['latitude'],
            data['longitude'],
            data['city'],
            data['state'],
            data['country'],
            data['display_name'],
            data['language'],
            data['chart_style'],
            data['source']
        ))
        res = cursor.fetchall()
        if res:
            db.rollback()
            return jsonify({"message": "User Creation Failed!"}),500
        else:
            res = cursor.lastrowid
            db.commit()
            return jsonify({"message": "User Created Successfully!", "id": res}),200
    except Exception as e:
        print(e)
        return jsonify({"message": str(e)}),500