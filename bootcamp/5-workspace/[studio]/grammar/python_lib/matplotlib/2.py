import matplotlib.pyplot as plt
import numpy as np

# 수직 막대 그래프
x = np.arange(3)
years = ['2021', '2022', '2023']
values = [100, 400, 900]
# plt.bar(x, values)
# plt.xticks(x, years)

# 수직 막대 그래프 스타일
# plt.bar(x, values, width=0.6, align='center', alpha=0.5, color='red', edgecolor='black', linewidth=1, tick_label=years, log=True)

# 수평 막대 그래프
y = np.arange(3)
# plt.barh(y, values)

# 2차원 산점도 그래프
# np.random.seed(20210312)
# N = 50
# x = np.random.rand(N)
# y = np.random.rand(N)
# colors = np.random.rand(N)
# area = (30 * np.random.rand(N))**2
# plt.scatter(x, y, s=area, c=colors, alpha=0.5)

# 2차원 산점도 수동
# x = [123, 432, 1235, 646, 125, 234]
# y = [777, 666, 555, 444, 333, 222]
# size = [50, 20, 30, 44, 120, 300]
# colors = ['red', 'red', 'red', 'red', 'red', 'orange']
# plt.scatter(x, y, s=size, c=colors, alpha=0.5)

# 3차원 산점도 그래프
# n = 100
# xmin, xmax, ymin, ymax, zmin, zmax = 0, 20, 0, 20, 0, 50
# cmin, cmax = 0, 2

# x = [2.35, 3.55, 5.32, 4.03, 1.15]
# y = [4.81, 2.23, 3.34, 3.13, 1.91]
# z = [7, 9, 4, 6, 2]
# color = ['red', 'red', 'red', 'red', 'orange']

# fig = plt.figure()
# ax = fig.add_subplot(111, projection='3d')
# ax.scatter(x, y, z, c=color, marker='o', s=100, cmap='Greens')

# 히스토그램 그리기
# weight = [60, 77, 85, 44, 44, 55, 85, 60, 60, 71, 77, 77, 77, 77, 60, 60, 45]
# plt.hist(weight)
a = 2.0 * np.random.randn(10000) + 1.0
b = np.random.standard_normal(10000)
c = 20.0 * np.random.rand(5000) - 10.0
# plt.hist(a, bins=100, density=True, histtype='step')
# plt.hist(b, bins=50, density=True, histtype='stepfilled')
# plt.hist(c, bins=100, density=True, histtype='step')

# 파이차트 그리기
ratio = [34, 32, 16, 18]
labels = ['Apple', 'Samsung', 'Amazon', 'Google']
color = ['red', 'red', 'red', 'orange']
explode = [0.05, 0.05, 0.05, 0.05]
# plt.pie(ratio, labels=labels, colors=color, autopct='%.1f%%', explode=explode, shadow=True)

# 에러바
x = [1, 2, 3, 4]
y = [1, 4, 9, 16]
yerr = [2.3, 3.1, 1.7, 2.5]
plt.errorbar(x, y, yerr=yerr, uplims=[True, True, True, True], lolims=[False, False, False, False])

plt.show()