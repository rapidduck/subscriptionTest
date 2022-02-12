import json
# SOME
from flask import Flask, render_template, request, send_from_directory
from sqlitedict import SqliteDict
from pywebpush import webpush


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
            print(f"len before add {len(db)}")
            file = json.loads(data)
            file["expirationTime"] = None
            db[f"endpoint{len(db)}"] = file
            db.commit()
            print(f"len after add {len(db)}")
            print("added to db")
        return "Success"

@app.route("/sw.js")
def sw_js():
    return send_from_directory(".", "sw.js")

@app.route("/notify", methods=["POST"])
def notify_all():
    if request.method == "POST":
        with SqliteDict("db.sqlite", "w") as db:
            print(len(db))
            for device, data in db.iteritems():
                webpush(data,
                        "Hey Hey",
                        vapid_private_key="-RMX3o_klK67WLgFA2vc6IURRwqxkUQzDkHyh4bWAEw",
                        vapid_claims={"sub": "mailto:testemail@gmail.com"})
                print(f"Pushed to {device}")
            return "Success"

@app.route("/clear", methods=["POST"])
def clear_everything():
    if request.method == "POST":
        with SqliteDict("db.sqlite", "w") as db:
            print("clearing")
            db.clear()
        return "CLEARED"

if __name__ == "__main__":
    app.run()