from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

from dotenv import load_dotenv
import os
from db_models import Stocks, app, db

from stocks import historicalData

from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView

BASE_URL = "http://127.0.0.1:5000"
CORS(app)

class StocksView(ModelView):
    column_display_pk = True
    column_hide_backrefs = False
    list_columns = ('symbol', 'company_name')
    form_columns = ('symbol', 'company_name')

# Home Page
@app.route('/')
def index():
    return render_template('index.html')

# Get Available Symbols
@app.route('/symbols', methods=['GET'])
def getSymbols():
    # Find all the posts from the user
    stocks = Stocks.query.all()
    # Convert to dict and return json
    data = {}
    for stock in stocks:
        data[stock.symbol] = stock.company_name
    return jsonify(data)

# Get Historical Data from Symbol
@app.route('/<symbol>/historical/<period>', methods=['GET'])
def getHistoricalData(symbol, period):
    # Retreive the history for the specific period
    history = historicalData(symbol=symbol, period=period)
    # Return the history as json
    print(history)
    return jsonify(history)
    
admin = Admin(app)
admin.add_view(StocksView(Stocks, db.session))

# Driver Code
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)