from flask import Blueprint,jsonify,request,make_response


AUTH = Blueprint('auth',__name__)


@AUTH.route('/login')
def login():
    resp = make_response(jsonify({"message": "Login successful", "status": "success"}))
    resp.set_cookie('loggedin', 'true',max_age=60*60*24*365)
    return resp


@AUTH.route('/logout')
def logout():
    resp = make_response(jsonify({"message": "logout successful", "status": "success"}))
    resp.delete_cookie('loggedin')
    return resp