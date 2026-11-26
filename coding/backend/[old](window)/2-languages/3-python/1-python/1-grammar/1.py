# [변수와 데이터타입]

# 주석(comment) : # 입력 또는 ctrl + / 로 표현한다. 메모같은 것

# 변수(variable) : 변하는 수
id = "pencil"
print(id)
print("뭐로 쓸까요? - ",id,"으로 쓰죠.")


# 숫자 변수 : ""를 입력하지 않으며, 숫자. 연산가능. 데이터타입이 숫자인 변수.
num = 10
plus = 1
minus = 2
multiply = 3
divide = 5
print(num + plus)
print(num - minus)
print(num * multiply) # 30
print(num / divide) # 2

# int 정수 : 1, 2, 3, 4
# float 실수 : 1.0, 1.1 ...
num2 = 1.0
print(num2 + 2)

a = 5 # int
b = 1.1 # float
c = 'hello' # string
print(c/b) # error
a = a + 2
a = a + 3
a = ((a-5)*3/5) + 2
print(a)
print(c,a+b)




# 문자열 변수 : ""안에 입력하며, 문자. 연산불가
a = 'hello' # character
b = "world!" # string
c = "안녕하세요, 저는 'D.Yang'입니다."
d = """ 
안녕하세요, 저는 "D.Yang"입니다. """ # long string
e = """ 
안녕하세요, 
저는 "D.Yang"입니다. 
긴 글을 작성할 때도 이런식으로 스트링 지정을 
해줄 수 있습니다.
줄 바꿈이 적용이 되니깐요.
"""
print(a,b,c,d,e)




# 논리 변수 boolean
a = 0
b = 2
c = bool(a < b)
print(c)

# null값(비어있는 값) = false, 그 외에는 전부 true
a = bool(a) # false
b = bool("") # false
c = bool([]) # false
d = bool(None) # false
print(a,b,c,d)




# 배열 변수 list > dict > tuple
# list 리스트 a = []
# dict 딕셔너리 a ={}
# tuple 튜플 a = ()

a = [1, 2, 3]
b = {1, 2, 3}
c = (1, 2, 3)
print(a)
print(b)
print(c)

b2 = {"no": 153, "class": "vip", "username": "yangdonghwa"}
print(b2)
print(b2['username'])




# 총정리! : 변수의 데이터타입
# int 정수 1
# float 실수 0.1, 1.0
# string 문자열 "", ''
# boolean 참, 거짓 true, flase 
# list 리스트 a = []
# dict 딕셔너리 a ={}
# tuple 튜플 a = ()




