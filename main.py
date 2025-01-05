from flask import Flask,send_from_directory,jsonify


app = Flask(__name__,
            static_folder = "./frontend/build",
            static_url_path="/",
            )

@app.route('/')
@app.route('/about')
@app.route('/<path:path>')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


@app.errorhandler(404)
def not_found(e):
    return jsonify({"message": "404", "status": "error"}),404

if __name__ == '__main__':
    app.run(debug=True)

