from flask import Flask, jsonify
from scriptures import get_random_verse

app = Flask(__name__)

@app.route('/random_verse/')
def return_verse():
    return get_random_verse()


if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')