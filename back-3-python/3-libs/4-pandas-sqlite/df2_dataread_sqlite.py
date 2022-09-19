import pandas as pd
import pandas_datareader.data as web # pip install pandas_datareader
import datetime
import sqlite3

# DB연동
conn = sqlite3.connect("kospi.db")

# DataReader를 통해 GS 종목(종목 코드: '078930.KS')의 일별 데이터를 DataFrame 형태로 다운로드합니다.
start = datetime.datetime(2020, 1, 1)
end = datetime.datetime(2021, 6, 12)
df = web.DataReader("078930.KS", "yahoo", start, end)

# DB에 종목 결과 INSERT하기
df.to_sql('078930', conn, if_exists='replace') # 테이블이 존재할 경우, 값을 교체

# DB로부터 종목 결과 불러들이기
readed_df = pd.read_sql("SELECT * FROM '078930'", conn, index_col = 'Date')

# 로그에 출력
print('검색결과\n', readed_df)
