from flask import Blueprint,jsonify,request


API = Blueprint('api',__name__)


@API.route('/', methods=['GET'])
def hello():
    return jsonify({"message": "main from Sub-API!"})

@API.route('/about', methods=['GET'])
def data():
    return jsonify({"message": "about endpoint in Sub-API!"})


@API.before_request
def before_request():
    if request.cookies.get('loggedin'):
        pass
    else:
        return jsonify({"message": "Not logged in!"}),401