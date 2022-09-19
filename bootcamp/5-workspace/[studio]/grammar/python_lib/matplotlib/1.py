import matplotlib.pyplot as plt

# 1. 배열 축 레이블 지정
plt.xlabel('X-Label')
plt.ylabel('Y-Label')

# 1. 배열의 y값 지정
# plt.plot([1, 4, 9, 16])

# 1. 배열의 x값 함께 지정
# plt.plot([1, 2, 3, 4], [1, 4, 9, 16])

# 1. 배열의 x, y축 범위를 수동으로 지정
# plt.axis([1, 6, 0, 16])

# 1. 도트그래프
# plt.plot([1, 2, 3, 4], [1, 4, 9, 16], 'bx')

# 1. 그래프 영역 채우기
x = [1, 2, 3, 4]
y = [1, 4, 9, 16]
# plt.plot(x, y)

# 그래프 x축 밑으로 채우기
# plt.fill_between(x[0:4], y[0:4], alpha=0.5) #x[0], x[3] 사이를 채움
# plt.fill_between(x[0:2], y[0:2], alpha=0.5) #x[0], x[1] 사이를 채움
# plt.fill_between(x[2:4], y[2:4], alpha=0.5) #x[2], x[3] 사이를 채움

# 그래프 y축 왼쪽으로 채우기
# plt.fill_betweenx(y[0:4], x[0:4], alpha=0.5) #x[0], x[3] 사이를 채움
# plt.fill_betweenx(y[0:2], x[0:2], alpha=0.5) #x[0], x[1] 사이를 채움
# plt.fill_betweenx(y[2:4], x[2:4], alpha=0.5) #x[2], x[3] 사이를 채움

# 그래프 꼭지점을 따라 도형을 그리고 채움
# plt.fill(x[0:4], y[0:4], color='red', alpha=0.5) #x[0], x[3] 사이를 채움

# 다양한 스타일 옵션 추가
plt.plot(x, y, color="red", alpha=0.5, marker="*", linewidth=5)

# 그리드
plt.grid(True)

# 눈금에 레이블 직접 지정
plt.xticks([1, 2, 3, 4, 5])
plt.yticks([0, 5, 10, 15], ('0GB', '5GB', '10GB', '15GB'))

# 타이틀 지정
title_font = {
    'fontsize': 16,
    'fontweight': 'bold',
    'fontfamily': 'Roboto'    
}
plt.title('Used Data', fontdict=title_font, loc='right', pad=20)

plt.show()
