# 인사를 프린트한다.
# print('Hello World!')

# 주석(comment) : 메모

# 변수(variables) : 변하는 수
a = '사과'
b = 5
# print(a)
# print(b)
# print(a, '가', b, '개 있습니다.' )

# number 숫자변수 : 연산 가능
a = 1
b = 2
# print(a / b)
c = ((a-5)*3/5)+2
# print(c)

# string 문자열변수 : "", ''가 필요, 연산 불가능
a = 'My name is Yang' # character
b = "He said, " # string
c = """
    He said, "My name is 'Yang'."
    여러 긴 문자열을 넣을 수 있는
    공간이 생깁니다.
""" # text
# print(a)
# print(b)
# print(c)

# 논리 변수(boolean) : 참(true), 거짓(false)
a = True
b = False
a = 2
b = 1
c = (a > b)
# print(c)
# 논리변수로 변수의 "값"의 존재의 여부를 판단할 수도 있다.
c = bool('A')
# print(c)
a = 3
b = 2
# if (a > b): 
#     print('조건부합')

# None : 비어있는 값
a = None
# print(a)

# 배열변수 : list, dict, tuple이 있고, 하나의 변수에 여러개의 값을 넣을 때 쓴다.
# list 리스트 [] : 반복문 for 에서 사용
a = [1, 6, 7, 4, 5] # 인덱스 : 밸류
print(a)
print(a[0])
print(a[1])
print(a[2])
print(a[-2])
# dict 딕셔너리 {} : 복잡한 데이터 다룰 때
b1 = {"no": 153, "class": "vip", "name": "yang"} # 키 : 밸류
b2 = {"no": 154, "class": "vip", "name": "park"}
userData = [b1, b2]
print(userData[0]["name"])
# tuple 튜플 ()
c = (1, 2)
print(c)