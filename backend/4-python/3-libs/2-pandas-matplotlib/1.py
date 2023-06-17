# 판다스 : DataFrame 다루는 라이브러리 (엑셀, csv file등과 비슷한 형태의 데이터)

# pip install pandas : DataFrame 자체
import pandas as pd
from pandas import DataFrame as df

# DataFrame을 df로 정의하기
df1=df(
        data={'Num':[1,2,3], 'Name':['Kim','Park','Lee'], 'Color':['red', 'blue', 'black']},
        columns=['Name', 'Num', 'Color'],
        index=['A', 'B', 'C']
)
print(df1)

# pip install numpy : DataFrame 배열 관련 함수
import numpy as np
df2 = df(
        data=np.arange(6).reshape(2,3),
        columns=['Number', 'Name', 'Color'],
        index=['A', 'B']
)
print(df2)

# 행, 열 개수를 튜플로 반환
print(df1.shape)

# 열 기준 데이터형태 반환
print(df1.dtypes)

# 행 이름을 리스트로 반환
print(df1.index)

# 열 이름을 리스트로 반환
print(df1.columns)

# 특정컬럼 반환
print(df1['Name'])

# 행, 열을 뒤집어서 반환
print(df1.T)
