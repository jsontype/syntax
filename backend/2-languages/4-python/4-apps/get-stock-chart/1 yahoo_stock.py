# 이동평균계산 (pandas.Series.rolling)
# 데이터 분석을 하다보면 일정 범위에서 규칙적으로 연산을 해야할 일이 있다. 
# 예를 들면, 날마다 일주일간 주가 평균을 알고 싶을 때, 매일 일일이 다 계산하는 것은 매우 비효율적.
# 이 때, 유용하게 쓸 수 있는 함수가 .rolling()이다.
import datetime
import pandas_datareader as web

# 1. 우선 주가 정보를 종가 기준으로 불러오기
#005380.KS 현대차
ticker='005380.KS'
online_source='yahoo'
start=datetime.datetime(2021, 1, 1)
end=datetime.datetime.today()
hd=web.DataReader(ticker, online_source, start, end)
hd_close=hd['Close'] # 종가 기준
print(hd_close.head()) #.head() 처음 몇개 데이터만 출력

# 1. df.rolling().mean() : 옵션에 맞추어서 이동평균을 구하는 기능
# window=12 옵션 : 순차적으로 12개씩 DataFrame의 이동평균을 내라.
# 처음 11개는 Nan이 나온다. 이는 이전 12개의 데이터가 모이지 않았기 때문!
# 즉, 데이터가 12개 미만인 값들은 NaN으로 표시되었다.
hd_close_12mean=hd_close.rolling(window=12).mean()
print(hd_close_12mean)
# min_periods=1 옵션 : 데이터가 1개라도 존재하면 평균을 내라고 하고 싶을 때 사용한다.
# 이전 출력값과 달리 이번에는 데이터가 1개 이상이면 모두 평균하여 계산된다.
hd_close_12mean=hd_close.rolling(window=12, min_periods=1).mean()
print(hd_close_12mean)
# center=True 옵션 : 지금까지는 순차적으로 window 개수에 따라 평균 계산되었으나, 중간을 기준으로 이동평균하고 싶을 때는 center 기능을 이용하면 된다.
# 앞선 결과와 비교했을 때, 출력값을 보면 NaN의 개수는 모두 11개로 같지만, center 기능을 통해 자동으로 중간을 중심으로 12개씩 계산되었다.
hd_close_12mean=hd_close.rolling(window=12, center=True).mean()
print(hd_close_12mean)

# 1. df.rolling().std() : 옵션에 맞추어서 이동분산을 구하는 기능
# hd_close_12std=hd_close.rolling(window=12).std()
# print(hd_close_12std)
