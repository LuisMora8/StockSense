import yfinance as yf
import pandas as pd

# df = pd.read_csv('apple 6.csv', parse_dates=['Date'])
# df['Date'] = pd.to_datetime(df['Date'], utc=True)
# df['Date'] = df['Date'].dt.strftime('%y-%m-%d')

# dates = df['Date'].to_json()
# print(dates)

# most_active_symbols = ['CCL', 'TSLA', 'SOFI', 'AAPL', 'LCID', 'MARA', 'NIO', 'AMZN', 'F', 'AMD', 'BAC', 'NVDA', 'XPEV', 'PLTR', 'T', 'RIVN', 'RIG', 'INTC', 'SWN', 'CSGP', 'PBR', 'MU', 'PFE', 'RIOT', 'JOBY']

selected_symbol = 'AAPL'
x_axis = '1y'
y_axis = 'auto'
stock_data_color = 'blue'

stock = yf.Ticker(selected_symbol)
info = dict(stock.info)

for key,value in info.items():
  print(str(key) + ':' + str(value)) 
data = stock.history(period='5y')
print(data)
