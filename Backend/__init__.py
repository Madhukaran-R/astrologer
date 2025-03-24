from flask import Blueprint,jsonify,request
from .user import createUser
from .utils.db import DB


API = Blueprint('api',__name__)
# Initialize the DB connection
DB().get_connection()

API.add_url_rule('/createUser', view_func=createUser, methods=['GET','POST'])


@API.route('/', methods=['GET'])
def hello():
    return jsonify({"message": "main from Sub-API!"})

@API.route('/about', methods=['GET'])
def data():
    return jsonify({"message": "about endpoint in Sub-API!"})


@API.before_request
def before_request():
    whitelisted_apis = ['/api/login']
    if request.path in whitelisted_apis:
        pass
    elif request.cookies.get('loggedin'):
        pass
    else:
        return jsonify({"message": "Not logged in!"}),401
    
    
@API.route('/login', methods=['POST'])
def login():
    response = jsonify({"message": "Logged in!", "errcode": 0})
    response.set_cookie('loggedin', 'true')
    return response

@API.route('/logout', methods=['POST'])
def logout():
    response = jsonify({"message": "Logged out!"})
    response.set_cookie('loggedin', '', expires=0)
    return response


# i need a long polloing endpoint where the connection should be kept open for 5 minutes till then if i get the response i should return the response
# if i dont get the response i should return a timeout message
@API.route('/longpoll', methods=['GET'])
def longpoll():
    import time
    time.sleep(5)
    return jsonify({"message": "Long Polling Timeout!"})