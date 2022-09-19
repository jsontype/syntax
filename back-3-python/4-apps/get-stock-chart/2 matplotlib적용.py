# # 주식 정보 시각화 앱
# 메모장 파일 읽어서 리스트에 담아 그래프로 그리기
# 엑셀파일 .csv, .xlsx 읽어서 리스트에 담아 그래프로 그리기
# 웹크롤러로 받은 데이터를 읽어서 리스트에 담아 그래프로 그리기

# pip install pandas_datareader
# pip install mpl_finance

import pandas_datareader.data as web
import datetime
import matplotlib.pyplot as plt
import mpl_finance # pip install mpl_finance
import matplotlib.ticker as ticker
from dateutil.relativedelta import relativedelta

krCode = input('KR코드를 입력해주세요 (6자리): ')[:6]
#005930
KrCodeks = krCode+".ks"

startDate = input('시작지점 년, 월, 일을 입력해주세요 (6자리): ')[:6] # 미입력시 "한달전"
endDate = input('종료지점 년, 월, 일을 입력해주세요 (6자리): ')[:6] # 미입력시 "오늘"
nowDate = datetime.datetime.now()

# 시작지점의 처리
if startDate == '':
    # 한달전으로 시간 지정
    start = datetime.datetime.now()-relativedelta(months=1)
else:
    year1 = int("20"+str(startDate[0:2]))
    month1 = int(startDate[2:4])
    day1 = int(startDate[4:6])
    start = datetime.datetime(year1, month1, day1)
# 종료지점의 처리
if endDate == '':
    end = datetime.datetime.now()
else:
    year2 = int("20"+str(endDate[0:2]))
    month2 = int(endDate[2:4])
    day2 = int(endDate[4:6])
    end = datetime.datetime(year2, month2, day2)

StockData = web.DataReader(KrCodeks, "yahoo", start, end)

fig = plt.figure(figsize=(12, 8))
ax = fig.add_subplot(111)

day_list = []
name_list = []
for i, day in enumerate(StockData.index):
    if day.dayofweek == 0:
        day_list.append(i)
        name_list.append(day.strftime('%y-%m-%d') + '(Mon)')

ax.xaxis.set_major_locator(ticker.FixedLocator(day_list))
ax.xaxis.set_major_formatter(ticker.FixedFormatter(name_list))

mpl_finance.candlestick2_ohlc(ax, StockData['Open'], StockData['High'], StockData['Low'], StockData['Close'], width=0.5, colorup='r', colordown='b')
plt.grid()
plt.show()