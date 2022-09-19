# [라이브러리, 클래스, 메소드, 파라미터]





# library : 다른 사람이 만든 코드를 불러오는 것
from datetime import datetime

a = datetime.now()
b = datetime.now().hour
c = datetime.now().minute
print(a)
print("현재시간은",b,"시",c,"분","입니다.")




# math library 를 써보자. math라는 클래스 안에 있는 변수, 메소드를 쓸 수 있다.
import math

a = math.pi
print(a)

b = math.floor(2.6)
print(b)





# random library를 쓴다. = random class를 불러온다.
import random

rainbow = ['빨', '주', '노', '초', '파', '남', '보']
a = random.choice(rainbow) # random 클래스의 choice 메소드를 사용했고, 얘는 파라미터로 rainbow를 가져갔다.
b = random.choice(rainbow)
if a == b:
    b = random.choice(rainbow)
print(a,b)

random.shuffle(rainbow)
print(rainbow)

dice = ['1','2','3','4','5','6']
a = random.choice(dice)
print (a)
print ('주사위값은' ,a,'입니다')