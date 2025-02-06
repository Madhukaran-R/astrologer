from flask import Flask,send_from_directory,jsonify,request,make_response
from Backend import API
from Auth import AUTH
from flask_cors import CORS

app = Flask(__name__,
            static_folder = "./frontend/build",
            static_url_path="/astrologer",
            )

app.register_blueprint(API,url_prefix='/api')
app.register_blueprint(AUTH,url_prefix='/auth')

CORS(app, supports_credentials=True, resources={r"/api/*": {"origins": "http://localhost:3000"},})

@app.route('/')
@app.route('/about')
@app.route('/<path:path>')
@app.route('/astrologer')
def serve():
    resp = make_response(send_from_directory(app.static_folder, 'index.html'))
    return resp


@app.errorhandler(404)
def not_found(e):
    return jsonify({"message": "404", "status": "error"}),404

if __name__ == '__main__':
    app.run(debug=True)

