import json

from flask import Flask, render_template, request, send_from_directory
from sqlitedict import SqliteDict

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/endpoint", methods=["POST"])
def save_endpoint():
    if request.method == "POST":
        print("reached endpoint")
        data = request.args.get("data")
        with SqliteDict("db.sqlite", "w") as db:
            file = json.loads(data)
            file["expirationTime"] = None
            db[f"endpoint{len(db)}"] = file
            db.commit()
            print("added to db")
        return "Success"

@app.route("/sw.js")
def sw_js():
    return send_from_directory(".", "sw.js")

if __name__ == "__main__":
    app.run(debug=True)