# 조건문

# people = 5
# apple = 5

# if, else
# if people == apple: # 이 명제는 boolean 값이다.
#     print('사과 수가 딱 맞아요.') # true일때만 실행
# else: # 아니면,
#     print('사과 수가 딱 맞지 않아요.') # false일때는 여기로 넘어간다.

# if, elif, else
# if people == apple: # 이 명제는 boolean 값이다.
#     print('사과 수가 딱 맞아요.') # true일때만 실행
# elif people > apple:
#     print('사과가 부족해요.')
# else:
#     print('사과가 넘쳐나요.')

# 다수의 if문
# if people == 5:
#     print('A')
# if apple == 5:
#     print('A')

# 비교연산자
# ==, !=, >, >=, <, <=

# Tab은 Hierarchy 위계를 표현한다. 반대로 위로 올라갈때는 shift + tab
# if people >= apple:
#     if people == apple:
#         print('A')        
#     if people > apple:
#         print('B')

# 라이브러리 추가
from datetime import datetime
hour = datetime.now().hour
# print(hour)

# hour = 1
# if hour < 12:
#     print('am')
# elif hour >= 12:
#     print('pm')

# am, noon, pm
hour = 13
if hour < 12:
    print('am')
elif hour > 12:
    print('pm')
else:
    print('noon')