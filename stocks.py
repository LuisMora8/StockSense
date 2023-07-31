import yfinance as yf
import pandas as pd

# df = pd.read_csv('apple 6.csv', parse_dates=['Date'])
# df['Date'] = pd.to_datetime(df['Date'], utc=True)
# df['Date'] = df['Date'].dt.strftime('%y-%m-%d')

# dates = df['Date'].to_json()
# print(dates)

# most_active_symbols = ['CCL', 'TSLA', 'SOFI', 'AAPL', 'LCID', 'MARA', 'NIO', 'AMZN', 'F', 'AMD', 'BAC', 'NVDA', 'XPEV', 'PLTR', 'T', 'RIVN', 'RIG', 'INTC', 'SWN', 'CSGP', 'PBR', 'MU', 'PFE', 'RIOT', 'JOBY']

# selected_symbol = 'AAPL'
# x_axis = '1y'
# y_axis = 'auto' 
# stock_data_color = 'blue'

# stock = yf.Ticker(selected_symbol)
# info = dict(stock.info)

# for key,value in info.items():
#   print(str(key) + ':' + str(value)) 
# data = stock.history(period='5y')
# print(data)

# // const data = {
# //   labels: labels,
# //   datasets: [
# //     {
# //       label: 'Price',
# //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
# //       borderColor: 'red',
# //     },
# //     {
# //       label: 'Sentiment',
# //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
# //       borderColor: 'orange',
# //     },
# //   ],
# // };

# stock = yf.Ticker('AAPL')
# info = dict(stock.info)
# history = stock.history(period='1y')
# print(info["shortName"])

def historicalData(symbol: str, period: str):
  # Fetch data from yfinance
  stock = yf.Ticker(symbol)
  history = stock.history(period=period)

  # Create labels from date index and convert to strings
  labels = history.index.date.tolist()
  for i in range(len(labels)):
    labels[i] = str(labels[i])

  # Create data from historical closing prices and remove date index
  closing_prices = history["Close"].tolist()

  # Company name
  info = dict(stock.info)
  name = info["shortName"]

  # Return as dictionary
  data = {
    "label": labels,
    "prices": closing_prices,
    "company": name
  }
  return data
