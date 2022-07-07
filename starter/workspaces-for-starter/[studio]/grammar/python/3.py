# 라이브러리 호출 : 다른 사람이 만든 클래스를 불러오는 것

from datetime import datetime as dt
print(dt.now())
a = dt.now().hour
b = dt.now().minute
print('현재 시간은',a,'시',b,'분입니다')


# 클래스 : 관련성이 있는 "메소드, 변수"의 집합

import math
a = math.pi # math 클래스 안에 있는 pi 라는 변수
print(a)
b = math.floor(2.6) # math 클래스 안에 있는 floor 라는 메소드 (내림함수)
print(b)

import random
rainbow = ['빨', '주', '노', '초', '파', '남', '보']
a = random.choice(rainbow)
print(a)
random.shuffle(rainbow)
print(rainbow)

# 과제 : 주사위 프로그램
dice = [1, 2, 3, 4, 5, 6]
print(random.choice(dice))


