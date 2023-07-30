from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy

BASE_URL = "http://127.0.0.1:5000"
# Flask and SQLDatabase configuaration
app = Flask(__name__)
#app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///stocksense.db"
db = SQLAlchemy(app)

# Home Page
@app.route('/')
def index():
    return render_template('index.html')

# Get Historical Data from Symbol
@app.route('/<symbol>/historical/<period>')
def getHistoricalData():
    print('hi')

# Driver Code
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)