# [배열 변수 이용하기]





# 배열 변수의 의미
a = 1
b = 'string'
c = [1, 2, 3]
d = ['userNo', 'id', 'pw', 'userName']
rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']
# print(rainbow)




# 배열의 인덱스 : 0부터 시작
first = rainbow[0]
last = rainbow[-1] # = rainbow[6]
# print(first)
# print(last)
# print('무지개 첫번째 색깔은 {}, 마지막 색깔은 {}이네요.'.format(first, last))





# 배열은 arrayList 또는 array라고 불려요. 이제는 array라고 할께요.
# array 추가
list1 = [1, 2]
list1.append(3)
list1.append(4)
list1.append(5)
# print(list1)

list2 = []
a = 1
b = 2
list2.append(a)
list2.append(b)
# print(list2)

list3 = []
list3.append(list1)
list3.append(list1)
# print(list3)

list4 = []
list4 = list4 + [1, 2]
list4 = list4 + [3, 4, 5]
# print(list4)
# print(list4[4])

# array 삭제
list1 = [1,2,3,4,5,6,7,8,9,10]
del list1[-1] # 인덱스를 찾아서 삭제
# print(list1)
list1.remove(9) # 값을 찾아서 삭제
# print(list1)




# array의 종류
list1 = [1, 2, 3, 4] # 가장 일반적인 배열 (인덱스:밸류)
dict1 = { 'identity': 'lala', 'password': 'lalala', 'name': 'lee' } # Dictionary, 사전같이 하나씩 대응값을 추가 (키:밸류)
tuple1 = (1, 4) # 짝끼리 묶는 느낌의 배열 [[{(1 , 4), ()}, {(), ()}, {}]....]





# array와 if문의 조합 : 검색
list1 = [1, 2]
a = 3
if a in list1:
    print('있네')
else:
    print('없네')
# print(list1[0])
# print(list1[1])

