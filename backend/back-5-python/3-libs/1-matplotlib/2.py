# matplotlib(1) : 선형 그래프

import matplotlib.pyplot as plt # 시각화
import numpy as np # 배열 처리

# # 1. 배열 축 레이블 지정
plt.xlabel('x Label Name')
plt.ylabel('Y Label Name')


# # 1. 배열의 y값 지정 : x는 인덱스, y는 값 [(0,1) (1,4), (2,9), (3,16)]
# plt.plot([1, 4, 9, 16])
# plt.show()

# # 1. 배열 x, y값 지정
# plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
# plt.show()


# # 1. 배열 x, y눈금 지정
# plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
# plt.axis([0, 6, 0, 20]) # x축 처음값, 마지막값, y축 처음값, 마지막값
# plt.show()


# # 1 . 그래프 스타일 지정
# plt.plot([1, 2, 3, 4], [1, 4, 9, 16], 'ro', color="springgreen", marker="*", linewidth=20, markersize=20, alpha=0.5)
# plt.axis([0, 6, 0, 20])
# plt.show()
# # 첫째 글자는 색(color), red=r, blue=b, green=g, yellow=y, white=w, black=k, 없으면 기본값
# # 둘째 글자는 모양(marker), 없으면 선
# # - = solid line, -- =dashed line, -. =dahsed and dotted line 
# # o = circle, . = point, , = = pixel 
# # ^ v < > = triangle
# # 1 2 3 4 = tri-shape
# # s p h H = square, pentagon, hexagon1, hexagon2
# # * + x d D | _
# # alpha = 0~1 색투명도
# # color = "#e35f62" 또는 "springgreen" 등으로 색 지정 가능
# # marker = "*"
# # markersize = 9
# # linewidth = 2


# # 1. 그래프 영역 채우기
# x = [1, 2, 3, 4]
# y = [1, 4, 9, 16]
# plt.axis([0, 5, 0, 20])
# plt.plot(x, y)
# plt.fill_between(x, y)
# # plt.fill_between(x[0:4], y[0:4]) # x[0], x[3] 사이, 즉 전체
# # plt.fill_between(x[0:3], y[0:3]) # x[0], x[2] 사이
# # plt.fill_between(x[0:2], y[0:2]) # x[0], x[1] 사이
# # plt.fill_between(x[1:4], y[1:4]) # x[1], x[3] 사이
# # plt.fill_between(x[2:4], y[2:4]) # x[2], x[3] 사이
# # plt.fill_betweenx(y, x)
# # plt.fill_betweenx(y[0:4], x[0:4]) # y[0], y[3] 사이, 즉 전체
# # plt.fill_betweenx(y[0:3], x[0:3]) # y[0], y[2] 사이
# # plt.fill_betweenx(y[1:4], x[1:4]) # y[1], y[3] 사이
# # plt.fill(x, y)
# plt.show()


# # 그래프와 그래프 사이 채우기
# x = [1, 2, 3, 4]
# y1 = [1, 4, 9, 16]
# y2 = [1, 2, 4, 8]
# plt.plot(x, y1)
# plt.plot(x, y2)
# plt.fill_between(x[1:3], y1[1:3], y2[1:3])
# plt.show()



# # 한번에 여러 곡선 그리기
# a = np.arange(0, 2, 0.2) # 0.2 0.4 0.6... 2.0
# plt.plot(a, a, 'r--', a, a**2, 'bo', a, a**3, 'g-.')
# # 그리드
# plt.grid(True, color='red', alpha=0.1, linestyle='--')
# plt.show()