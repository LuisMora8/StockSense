from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os

# Flask and Database configuaration
app = Flask(__name__)
load_dotenv()
app.secret_key = os.getenv('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///stocksense.sqlite"
db = SQLAlchemy(app)

# Stocks Model
class Stocks(db.Model):
    __tablename__ = 'stocks'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    symbol = db.Column(db.String)
    company_name = db.Column(db.String)

    def __init__(self, symbol, company_name):
        super.__init__()
        self.symbol = symbol
        self.company_name = company_name

# Periods Model
class Periods(db.Model):
    __tablename__ = 'periods'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    period = db.Column(db.String)

    def __init__(self, period):
        super.__init__()
        self.period = period