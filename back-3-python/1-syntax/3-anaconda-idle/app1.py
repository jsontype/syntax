def cal_upper(price):
    increment = price * 0.3
    upper_price = price + increment
    return upper_price

def cal_lower(price):
    decrement = price * 0.3
    lower_price = price - decrement
    return lower_price

author = "pystock"

# 모듈을 실행하면 아래의 결과 값이 뜸
# print(cal_upper(10000))
# print(cal_lower(10000))
# print(__name__)

# 모듈을 run할 때만 실행하고 import 할때는 실행하지 않게 하기 : 모듈을 import 할때에는 __name__이 stock이 되고, import 안할 때에는 __main__이 됨을 이용함.
if __name__ == "__main__":
    print(cal_upper(10000))
    print(cal_lower(10000))
    print(__name__)

    