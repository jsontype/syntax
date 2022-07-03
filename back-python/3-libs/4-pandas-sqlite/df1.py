import pandas as pd
from pandas import Series, DataFrame
import sqlite3

# DB연동
conn = sqlite3.connect("kospi.db")

# 2차원 데이터프레임 객체
raw_data = { 'col0': [1,2,3,4],
             'col1': [10,20,30,40],
             'col2': [100,200,300,400] }

# 행열 처리
df = DataFrame(raw_data)

# 2차원 값을 INSERT한다. : to_sql문의 파라미터 정의는 다음과 같다. = DataFrame.to_sql(name, con, flavor='sqlite', schema=None, if_exists='fail', index=True, index_label=None, chunksize=None, dtype=None)
df.to_sql('test', conn)

# 2차원 값을 SELECT한다.
df = pd.read_sql("SELECT * FROM test", conn, index_col=None) # index를 0 1 2 3 ... 자동생성
df = pd.read_sql("SELECT * FROM test", conn, index_col='index') # index를 `index` 컬럼으로 생성

# SELECT한 값을 출력 : ide에서 F5를 눌러 실행해보자. 제대로 프린트가 되었으면 A5M2에서 DB에 잘 들어갔는지도 체크해보자.
print(df)
