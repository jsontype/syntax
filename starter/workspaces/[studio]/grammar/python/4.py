# 메소드

def a():
    print('a')
    b()

def b():
    print('b')

a()

# 파라미터(Parameter), 아규먼트(Arguments, 인자값)

def c(value1, value2):
    print(value1, 'is', value2)

c('My name', 'Python!')

# 과제 : 
# a와 b를 더하는 메소드를 만드세요. add
# a - b minus
# a * b multiply
# a / b divide

def divide(a, b):
    # 예외(Exception)의 처리
    if b == 0:
        print('0으로 나눌 수 없습니다.')
    else:
        print(a / b)

divide(5, 5)