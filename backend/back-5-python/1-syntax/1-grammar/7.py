# error 처리 : try except
try:
    a = 3/0
    print(a)
except Exception as log:
    print("에러의 이유는 :", log)