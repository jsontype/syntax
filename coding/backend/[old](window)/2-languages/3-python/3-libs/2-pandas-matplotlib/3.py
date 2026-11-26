# 상관분석(산점도, 공분산, 상관계수, 검정)

# 1. import
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
from sklearn import datasets # pip install sklearn

data = datasets.load_diabetes()
print(data.keys()) # data = {'key':value}

data['data'].shape
data['target'].shape

len(data['feature_names'])
df=pd.DataFrame(data['data'], index=data['target'], columns=data['feature_names'])
print(df)

# # 이거만 바꾸면 상관도 나오는 거!
X = df.bmi.values # 체질량지수 값
Y = df.index.values # 당뇨병지수 값

# 1. 산점도로 육안으로 일단 확인
plt.scatter(X, Y)
plt.show()

# 2. 공분산(covariance) : 2개의 변수의 상관도를 나타내는 값
cov_value = (np.sum(X*Y)-len(X)*np.mean(X)*np.mean(Y))/len(X)
print('공분산:', cov_value) # 2.14... ? 양수의 의미는 상승시 상승

# 3. 상관계수(correlation coeffect) : 공분산을 0~1 사이로 표준화시킨 값 (0 상관없음, 0.3~0.7 뚜렷한 상관, 0.8 이상 절대적인 상관)
corr_value = cov_value/(np.std(X)*np.std(Y))
print('상관계수:', corr_value)

# 4. 검정(test) : 상관계수의 값이 유의미한지를 검정
import scipy.stats as stats # pip install scipy
corr_test = stats.pearsonr(X, Y)
print(corr_test) # 0.58.. 3.46...e-42 (뒷값이 0에 가까울수록 신뢰가능한데, 거의 0에 가까우므로 신뢰할 값입니다.)






# 다른 변수들 상관계수 확인해보자.
for item in ['age', 'sex', 'bp']:
    X = df[item].values
    print(item)
    print('공분산: {:.2f}'.format(np.cov(X, Y)[0, 1]))
    print('상관계수: {:.2f}'.format(stats.pearsonr(X, Y)[0]))
    print('검정: {:.4f}'.format(stats.pearsonr(X, Y)[1]))
    print('\n')



# 과제
# 다른 데이터를 가지고 상관관계를 분석해보기
# 엑셀데이터 csv파일 -> 판다스 -> 맷플롯립 시각화