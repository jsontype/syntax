# 웹크롤링(1) : 웹 검색해서 기본적인 파이썬 웹크롤러 만들기

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

    # 로그에 출력
    print(link)