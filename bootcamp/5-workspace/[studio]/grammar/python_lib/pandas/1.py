# 판다스 : DataFrame(행렬) 라이브러리
# pip install pandas

import pandas as pd
from pandas import DataFrame as df

df1 = df(    
    data = {
        'No': [1, 2, 3],
        'Name': ['Kim', 'Park', 'Lee'],
        'Department': ['Dev', 'Dev', 'Infra']
    },
    # 열
    columns = ['No', 'Name', 'Department'],
    # 행
    index = ['A', 'B', 'C']
)
# print(df1)

# numpy : DF 배열 관련 메소드
import numpy as np
df2 = df(
    data=np.arange(6).reshape(2,3),
    columns=['No', 'Name', 'Department'],
    index=['A', 'B']
)
# print(df2)

# 행, 열, 개수를 튜플로 변환
print(df1.shape)
print(df1.dtypes)
print(df1.index)
print(df1.columns)
print(df1['Name'])
print(df1.T)