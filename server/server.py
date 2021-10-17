from flask import Flask, json

app = Flask(__name__)

@app.route("/")
def default_route():
    data = "Welcome to Paintsplat APIs"
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response

@app.route("/hit")
def hit_event():
    data = "hit event received!"
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response