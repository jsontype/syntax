from bs4 import BeautifulSoup
from urllib.request import urlopen

# string -> url -> html 파싱(분석할 수 있도록 소스를 추출)
url = urlopen('http://naver.com')
soup = BeautifulSoup(url, 'html.parser')

for items in soup.select('a'):
    link = items.get('href', '/')
    print(link)
