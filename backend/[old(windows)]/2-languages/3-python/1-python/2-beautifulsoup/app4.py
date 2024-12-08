# 웹크롤링(4) : 저장시 링크당 한줄씩 띄어지도록 하기

# 터미널 안에서 입력
# pip install bs4 : bs4를 설치한다.
from bs4 import BeautifulSoup
from urllib.request import urlopen

# url 파싱 : 분석할 수 있도록 소스를 추출하는 것
response = urlopen('http://naver.com')
soup = BeautifulSoup(response, 'html.parser')

# a태그에서 링크 추출
for anchor in soup.select('a'):
    link = anchor.get('href', '/')
    first7Chars = link[0:7]

    # http://외의 # 등의 링크가 딸려오는 문제해결하기
    if (first7Chars != 'http://' and first7Chars != 'https:/'):
        continue

    # 로그에 출력
    print(link)

    # 메모장에 저장
    fileName = 'output.txt'
    f = open(fileName, 'a', encoding='utf-8')  # 'w'는 덮어씌우기, 'a'는 이어붙이기
    data = link + '\n'
    f.write(data)
    f.close()
