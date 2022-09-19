# 반복문 For : 지정된 구간동안 계속됨

# numbers = [1, 2, 3, 4]
# for i in numbers:
#     print(i)

# for i in range(5): # range(5) : 0부터 순서대로 숫자를 넣은 5개 길이를 가진 배열을 만들어라.
#     print(i+1)

rainbow = ['빨', '주', '노', '초', '파', '남', '보']
# for i in range(len(rainbow)):
#     print(i+1, '번째 무지개의 색:', rainbow[i])

# for i, color in enumerate(rainbow):
#     print(i+1, '번째 무지개의 색:', color)

numbers = [(1,2),(5,4),(3,0),(5,7)]
# for a,b in numbers:
#     if b == 0:
#         print('0으로 나눌 수 없습니다.')
#     else:
#         print('결과값:', a/b)

user = [
    {"no": 153, "class": "vip", "name": "yang"},
    {"no": 154, "class": "normal", "name": "kim"},
    {"no": 155, "class": "vvip", "name": "lee"},
]
# for i in user:
#     print(i["no"], "넘버의 회원등급:", i["class"])

# break : for문을 나간다.
a = range(9999)
for i in a:
    if i != 5000:
        print(i)
    else:
        break

# continue : for문 내에서, 이하 코드를 실행하지 않고, 위로 다시 올라가서 반복한다.
for i in range(10):
    if i % 2 == 0:
        print(i, '는 2의 배수입니다.')
        continue
    print(i)

# while : 조건이 충족되는 한 반복하는 문
numbers = [1, 2, 3]
length = len(numbers)
i = 0
while i < length:
    print('실행')
    i = i + 1