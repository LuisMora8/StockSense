from flask import render_template, request, redirect, url_for, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

from db_models import Stocks, Periods, app, db

from stocks import historicalData

from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView

BASE_URL = "http://127.0.0.1:5000"
CORS(app)
print(type(Stocks))
class StocksView(ModelView):
    list_columns = ('symbol', 'company_name')
    form_columns = ('symbol', 'company_name')
print("\n")
print(type(Periods))
class PeriodsView(ModelView):
    list_columns = ('period',)
    form_columns = ('period',)

# Home Page
@app.route('/')
def index():
    return render_template('index.html')

# Get Available Symbols
@app.route('/symbols', methods=['GET'])
def getSymbols():
    # Find all the stocks available from the db
    stocks = Stocks.query.all()
    # Convert object to dict and return json
    data = {}
    for stock in stocks:
        data[stock.symbol] = stock.company_name
    return jsonify(data)

# Get available periods (x-axis scale)
@app.route('/periods', methods=['GET'])
def getPeriods():
    # Find all the periods from the db
    periods = Periods.query.all()
    # Convert object to dict and return json
    data = {}
    for period in periods:
        data[period.period] = period.period
    return jsonify(data)


# Get Historical Data from Symbol
@app.route('/<symbol>/historical/<period>', methods=['GET'])
def getHistoricalData(symbol, period):
    # Retreive the history for the specific period
    history = historicalData(symbol=symbol, period=period)
    # Return the history as json
    print(history)
    return jsonify(history)
    

# Driver Code
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        admin = Admin(app)
        admin.add_view(StocksView(Stocks, db.session))
        admin.add_view(PeriodsView(Periods, db.session))
    app.run(debug=True)