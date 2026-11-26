# 파이썬 배열과 집합 다루는 법 복습

# # 집합(셋)을 이용해서 중복제거하기
# arr1 = ['LTE', 'LTE', '5G', '5G', '5G', 'WCDMA', 'WCDMA', 'LTE']
# arr2 = [4, 4, 5, 5, 5, 3, 3, 4]
# set1 = set(arr1)
# set2 = set(arr2)
# arr1 = list(set1)
# arr2 = list(set2)
# print(arr1)
# print(arr2)

# # 리스트와 셋에 요소(element) 추가
arr1 = [1, 2, 3]
arr1.append(4)
# print(arr1)
set1 = {1, 2, 3}
set1.add(4)
# print(set1)


# # 리스트와 셋에 요소(element) 삭제 : pop, remove, clear
# arr1.pop() # 마지막 요소를 리턴하면서 삭제
# arr1.remove(4) # 요소 삭제
# arr1.clear() # 모두 삭제
# set1.pop() # 첫번째 요소를 리턴하면서 삭제
# set1.remove(4) # 요소 삭제
# set1.clear() # 모두 삭제
# print(set1)


# 파일 읽고 쓰기
# 파일은 open() 함수로 열고, 파일객체 f = open(파일이름, 파일열기모드)
# 파일열기모드는 읽기모드(r), 쓰기모드(w), 추가모드(a)가 있습니다.
# 파일쓰기는 f.write('문자열')로 합니다.
# 마지막으로 f.close()를 통해서 닫습니다.

# 파일에 문자열 덮어씌우기
f = open("newfile.txt", "w")
txt = "Hello Agian, Python!"
f.write(txt)
f.close()


# 파일에 문자열 추가하기
f = open("newfile.txt", "a")
txt = "\nNice to see you! \nHow have you been? \n"
f.write(txt)
f.close()


# 파일에 배열 추가하기 'delimiter'.join(arr)
f = open("newfile.txt", "a")
arr1 = ['LTE', '5G', 'WCDMA']
f.write('\n'.join(arr1))
f.close()


# 파일에 배열 추가하기 (구분자 없이) f.writelines(arr)


# 파일 읽기 f.read()
# f = open("newfile.txt", "r")
# txt = f.read()
# f.close()
# print(txt)


# 파일 읽기 한줄씩
f = open("newfile.txt", "r")
txt = f.readline() # 한줄씩 순서대로 반환
print(txt)
txt = f.readline() # 한줄씩 순서대로 반환
print(txt)
f.close()


# 파일 읽기 한줄씩 + while문
f = open("newfile.txt", "r")
while 1:
    a = f.readline()
    if not a: # a가 더이상 없을 때까지 반복
        break
    print(a)
f.close()


# 파일 읽기 원하는 줄만 꺼내기 : f.readlines() # 배열로 반환
f = open("newfile.txt", "r")
txt = f.readlines()
f.close()
print(txt[2])
