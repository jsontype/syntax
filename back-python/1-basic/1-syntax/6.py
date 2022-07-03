# 반복문 For : 지정된 구간동안 계속됨

numbers = [1, 2, 3, 4, 5, 6, 7]
# for i in numbers:
#     print(i)

# for j in range(5):
#     print(j+1)

# 이름 열거하기
names = ['lee', 'yang', 'kim', 'park']
for i, name in enumerate(names): # enumerate는 결과값으로 "인덱스, 값" 두개를 리턴한다. 
    print(i+1,'번째 사람은 '+name+'입니다.')

# 배열 길이 꺼내기
print(len(names))

# 배열 길이 꺼내서 그만큼 값 따로 꺼내기
rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']
for i in range(len(rainbow)):
    color = rainbow[i]
    # print(color)
    print('무지개의',i+1,'번째 색은 '+color+'이에요.')

# 이중배열
numbers = [(1,2),(10,0),(3,3),(5,7)]
for a,b in numbers:
    if b == 0:
        print('왜 0으로 나눠요?')
    else:
        print(a,'를',b,'로 나누면',a/b,'가 돼요.')

# break
list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for i in list1:
    if i % 3 == 0:
        print(i)
        # break

sizes = [33, 32, 31, 30, 29, 28, 33, 32, 30]
for i, size in enumerate(sizes):
    if size == 32:
        print(i+1,"번째 바지, 이건 내꺼")
        break

# continue
for i in range(10):
    if i % 2 == 0:
        # print('2는 건너뛰자')
        continue
    print(i)







# 반복문 while : 조건이 충족되는 한 반복
numbers = [1, 2, 3]
length = len(numbers)
i = 0
while i < length:
    print('안녕') # 정지하려면 ctrl + c
    print(numbers[i])
    i = i + 1
