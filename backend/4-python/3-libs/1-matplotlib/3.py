# matplotlib(2) : 여러가지 그래프

import matplotlib.pyplot as plt
import numpy as np
# plt.xlabel('X')
# plt.ylabel('Y')


# 막대 그래프
# arr = np.arange(3)
# years = ['2017', '2018', '2019']
# values = [100, 400, 500]
# plt.xticks(arr, years) # 눈금바꾸기
# plt.bar(arr, values) # 수직
# plt.barh(arr, values) # 수평
# plt.show()


# # 2차원 산점도 그래프
# x = [100, 200, 300, 400, 500, 233, 255, 355, 411, 777, 666]
# # x = np.random.rand(5000)
# y = [700, 500, 200, 400, 300, 700, 500, 200, 255, 444, 222]
# # y = np.random.rand(5000)
# size = [50, 888, 200, 300, 400, 100, 120, 222, 111, 222, 333]
# # size = np.random.rand(5000)
# plt.scatter(x, y, s=size)
# plt.show()


# # 3차원 산점도 그래프 : x라벨, y라벨 있으면 안됨
# # 수동 
# xs = [2.35, 3.55, 5.32, 4.03, 1.15]
# ys = [4.81, 2.23, 3.34, 3.12, 1.91]
# zs = [7.86, 2.39, 9.39, 4.55, 6.12]
# # 랜덤
# # xmin, xmax, ymin, ymax, zmin, zmax = 0, 20, 0, 20, 0, 50
# # xs = (xmax- xmin) * np.random.rand(500) + xmin
# # ys = (xmax- xmin) * np.random.rand(500) + ymin
# # zs = (xmax- xmin) * np.random.rand(500) + zmin
# # alpha = np.random.rand(5000)
# plt.rcParams["figure.figsize"] = (10, 10)
# plt.figure().add_subplot(111, projection='3d').scatter(xs, ys, zs, marker='o', s=30, cmap='Greens')
# plt.show()


# # 히스토그램 그래프 : 도수분포표 (가로축 계급, 세로축 도수)
# weight = [55, 55, 60, 60, 60, 65, 65, 70, 70, 70, 70, 75, 75, 80, 80, 90, 90]
# plt.hist(weight)
# plt.show()


# # 여러개의 히스토그램 그래프 (임의)
# a = 2.0 * np.random.randn(10000) + 1.0
# b = np.random.standard_normal(10000)
# c = 20.0 * np.random.rand(5000) - 10.0
# plt.hist(a, bins=100, density=True, histtype='step')
# plt.hist(b, bins=50, density=True, histtype='stepfilled')
# plt.hist(c, bins=100, density=True, histtype='step')
# plt.show()


# # 에러바 그래프1 (대칭편차)
# x = [1, 2, 3, 4]
# y = [1, 4, 9, 16]
# yerr = [2, 3, 1, 2]
# plt.errorbar(x, y, yerr=yerr)
# plt.show()


# # 에러바 그래프2 (비대칭편차)
# x = [1, 2, 3, 4]
# y = [1, 4, 9, 16]
# yerr = [(2, 3, 1, 2), (1, 2, 0, 4)] # 아래, 위 오차
# plt.errorbar(x, y, yerr=yerr)
# plt.show()


# # 에러바 그래프3 (상하한 기호)
# x = [1, 2, 3, 4]
# y = [1, 4, 9, 16]
# yerr = [2, 3, 1, 2]
# upperlimits = [True, False, True, False] # True = 아래로 화살
# lowerlimits = [False, True, True, False] # True = 위로 화살
# plt.errorbar(x, y, yerr=yerr, uplims=upperlimits, lolims=lowerlimits)
# plt.show()


# # 파이챠트 그리기
# 필수
ratio = [34, 32, 16, 18]
labels = ['Apple', 'Microsoft', 'Samsung', 'SoftBank']
# 옵션
autopct = '%.1f%%' # 부채꼴 안의 표시숫자 형식
startangle = 260 # 시작 각도
counterclock = False # False가 시계방향 순서
explode = [0.05, 0.05, 0.05, 0.05] # 파이간 간격
shadow = True # 그림자
colors = ['gold', 'silver', 'lightgray', 'whitesmoke'] # 부채꼴색상
wedgeprops = {'width': 0.7, 'edgecolor': 'w', 'linewidth': 5 } # 부채꼴영역의 너비(=반지름에 대한 비율), 테두리색상, 테두리선너비
plt.pie(ratio, labels=labels, autopct=autopct, startangle=startangle, counterclock=counterclock, explode=explode, shadow=shadow, colors=colors, wedgeprops=wedgeprops)
# plt.pie(ratio, labels=labels, autopct=autopct, startangle=startangle, counterclock=counterclock, shadow=shadow, wedgeprops=wedgeprops)
plt.show()


# # 숙제
# 메모장 파일 읽어서 리스트에 담아 그래프로 그리기
# 엑셀파일 .csv, .xlsx 읽어서 리스트에 담아 그래프로 그리기
# 웹크롤러로 받은 데이터를 읽어서 리스트에 담아 그래프로 그리기