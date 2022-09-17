# 배열 : 여러 값이 하나의 변수에 들어가는 것 list (인덱스:밸류, 순서)
a = [1, 2, 3, 4, 34, 25]
print(a[-2])
b = ['a', 'b', 'c', 'd']
print(b[0])

# 배열의 추가
a.append(33)
a.append(44)
a = a+b
b = [1, 2, 3] + [4]

# 배열의 삭제
a.remove(34) # 밸류값으로 삭제
del a[-1] # 인덱스 기준으로 삭제

print(a)

# 배열과 if문 조합 : 검색
a = [12, 22, 13, 34, 55]
b = 11
if b in a:
    print('당첨!')
else:
    print('꽝!')
