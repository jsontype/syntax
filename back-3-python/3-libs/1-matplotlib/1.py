# 파이썬 데이터분석 커리큘럼 : 맷플롯립 - 판다스 - 하둡 - 텐서플로우

# 통계
num_friends = [100, 40, 30, 30, 30, 40, 100, 100, 30, 30, 54, 54, 3, 3, 3, 25, 25, 30, 30, 54, 29, 29, 29, 77, 77, 99]
print('원본데이터:', num_friends)

# 동일한 친구수를 가진 사람을 모아서 보여주자
import collections
friends_count = collections.Counter(num_friends)
print('카운터:', friends_count)

# 가시화(visualization) // pip install matplotlib
# import matplotlib.pyplot as plt
# xs = range(101)
# ys = [friends_count[x] for x in xs]
# plt.bar(xs, ys)
# plt.axis([0,101, 0,10]) # x축시작점, 끝점, y축시작점, 끝점
# plt.xlabel("# of friends")
# plt.ylabel("# of people")
# plt.show()

# 총 조사대상 수는? (대상)
people_len = len(num_friends)

# 가장 많은 친구수는? 가장 적은 친구수는? (최대, 최소값)
max_value = max(num_friends)
min_value = min(num_friends)

# 두번째, 세번째로 적은 친구수는?
sorted_value = sorted(num_friends) # 오름차순 정리
second_value = sorted_value[1] 
third_value = sorted_value[2]

# 두번째, 세번째로 많은 친구수는?
second_value = sorted_value[-2]
third_value = sorted_value[-3]

# 회원들의 친구수 평균은?
def mean(x):
    return sum(x)/len(x)
average_value = mean(num_friends)
print('평균값: ', average_value)

# 회원들의 친구수 중앙값은?
def median(x):
    n = len(x)
    sorted_x = sorted(x)
    midpoint = n // 2

    if n % 2 == 1:
        return sorted_x(midpoint)
    else:
        lo = midpoint-1
        hi = midpoint
        return (sorted_x[lo] + sorted_x[hi] / 2)

median_value = median(num_friends)
print('중앙값: ', median_value)

# 친구수 분포는?
# 1. 최대와 최소 사이의 차이
range_value = max(num_friends) - min(num_friends)
# 2. 상하위 25% 차이 : 이상치를 제외한 평범한 데이터 사이 범위
def quantile_value(x, p):
    p_index = int(p * len(x))
    return sorted(x)[p_index]
range_value = quantile_value(num_friends, 0.75) - quantile_value(num_friends, 0.25)
print('상하위 25% 차이: ', range_value)
# 3. 데이터사이의 차이의 평균(=분산)
import math
def dot(v, w): # 제곱합계를 구하기 위한 패시브 로직
    return sum(v_i * w_i for v_i, w_i in zip (v, w))
def sum_of_squares(v): # 제곱의 합계를 구함
    return dot(v,v)
def de_mean(x): # 친구수들과 평균친구수와의 차이를 각각 넣은 배열로 변환
    x_bar = mean(x) # 3~100명 친구수 값의 평균값 44인데, [3-44, 7-44, 20-44, .... ,100-44]
    return [x_i - x_bar for x_i in x]
def variance(x):
    n = len(x)
    deviations = de_mean(x) # 각 값들의 편차값들을 모아놓은 배열
    return sum_of_squares(deviations)/(n-1) # 분산을 n-1으로 나누는 이유 : 정확도 향상 (위키검색)
variance_value = variance(num_friends)
print('분산: ', variance_value)
# 4. 표준편차
def sd(x):
    return math.sqrt(variance(x))
sd_value = sd(num_friends)
print('친구수 표준편차: ', sd_value)

# 구글 회원들의 접속시간
connect_time = [2000, 20000, 35000, 40000, 45000]
google_sd_value = sd(connect_time)
print('구글 접속시간 표준편차: ', google_sd_value)

