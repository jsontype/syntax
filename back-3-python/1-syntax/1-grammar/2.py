# [조건문]


# 조건문 if
people = 5
apple = 6

print(people == apple) # false

# if true: 실행, if false: 실행하지 않음
if people == apple:
    print('딱 맞네')
if people > apple:
    print('사람이 너무 많아서 사과 부족해 ㅠㅠ')
if people < apple:
    print('사과가 남았옹')

people = 5
banana = 5
if people == banana:
    print('뇸뇸')
banana = 4
if people != banana:
    print('not ok')
if not people == banana:
    print('not ok')

people = 3
banana = 3
apple = 4
if people == banana and people == apple:
    print("all ok")
if people == banana or people == apple:
    print("one ok")

# if , elif , else
from datetime import datetime
hour = datetime.now().hour

if hour < 12:
    print('am')
if hour >= 12:
    print('pm')

hour = 14
if hour < 12:
    print('am')
elif hour == 12:
    print('12')
elif hour == 15:
    print('15')
else:
    print('pm')









# 변수 초기화 : 무조건 해야함
a = None
b = None
c = None

# 변수값 입력
a = 2
b = 1
c = 3
# camel case : 낙타형 변수지정방법
firstRankMessage = 'congratulation !'

if a and b and c:
    if a == 1 and b == 1 and c == 1:
        print('a, b, c = 1')
    # elif a !=1 and b != 1 and c != 1:
    #     print('none')
    else:
        if a == 1:
            print('a = 1', firstRankMessage)
        else:
            print('a =', a)
        if b == 1:
            print('b = 1', firstRankMessage)
        else:
            print('b =', b)
        if c == 1:
            print('c = 1', firstRankMessage)    
        else:
            print('c =', c)
else:
    print('변수가 없는 게 있나봐요.')
