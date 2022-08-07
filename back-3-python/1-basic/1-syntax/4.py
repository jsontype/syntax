# [메소드 만들기]






# 파라미터가 없는 메소드
def a_print():
    print('a')

def b_print():
    print('b')

a_print()
b_print()






# 파라미터가 있는 메소드1
def add(a, b):
   result = a + b
   print("{} = {} + {}".format(result, a, b)) # 프린트에 포맷 다는 법!
add(1, 3)
add(100, 400)

def add10(a):
    d = a + 10
    print(d)
add10(3)
add10(10)




# 파라미터가 있는 메소드2
def banolim(a):
    result = round(a)
    print(result)

banolim(2.2)
banolim(2.7)




# 파라미터가 있는 메소드3
def banolim2(a, b):
    result1 = round(a)
    result2 = round(b)
    print(result1)
    print(result2)

banolim2(2.2, 2.7)



