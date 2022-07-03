# [해당 사이트에 들어가서, 클릭 등의 조작 후에 정보를 가져옴]
# ISIN정보조회해서 채권 기본정보 받아오기

# pip install selenium
from bs4 import BeautifulSoup as bs
from selenium import webdriver # pip install selenium

#여러개 Isin 받아야할때 (1)
# isinNumber = int(input('ISIN 숫자를 입력해주세요: '))

# list = []
# n = 1

# for i in range(isinNumber):
#     i = input('ISIN을 입력해주세요: ')  
##        break


# CSV 초기화
folderName = 'KR_bond.csv'
f = open(folderName, "w", encoding = "UTF-8")
data = ''
f.write(data)
f.close()

# 예 : KR103501GA68
isin = input('ISIN을 입력해주세요: ')

path = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
driver = webdriver.Chrome(path)
driver.get("https://isin.krx.co.kr/srch/srch.do?method=srchList")

element = driver.find_element_by_id("isur_nm1")
element.send_keys(isin)

driver.find_element_by_link_text("조회").click()
driver.find_element_by_link_text(isin).click()

# 새창으로 띄워진 윈도우로 넘어가기
driver.switch_to_window(driver.window_handles[-1])




# BS를이용한 HTML parser
html = driver.page_source
soup = bs(html, 'html.parser')
# tables = soup.find_all('table')

# (핵심!!) type-01 클래스를 가진 테이블만 추출
tables = soup.select('table.type-01')

# 저장할 파일명 지정
folderName = 'KR_bond.csv'
# excel에서 볼수있게 언어변환
f = open(folderName, "a", encoding = "UTF-8-sig")

for table in tables:
    trs = table.find_all('tr')
    for tr in trs:
        th = tr.find('th')
        td = tr.find('td') 
        # (숙제) : th, td를 가공해서 (<td><th> 벗겨내기) text화
        s = "{} , {}\n".format(th , td)
        print(s)


        #csv로 저장
        f.write(str(s))

f.close()

# txt 파일로 저장
# folderName = 'KR_bond.txt'
# f = open(folderName, 'a', encoding='utf-8')
# f.write(str(result))
# f.close()


# tr td 나눠주는 코드  from https://m.blog.naver.com/hjinha2/221830387511
# tables = driver.find_element_by_xpath("""//*[@id="wrapper-pop"]/div/table[1]""")
# for tr in tables.find_elements_by_tag_name("tr"):
#     td = tr.find_elements_by_tag_name("td")
#     s = "{} , {}\n".format(tr[1].text , td[2].text)
#     print (s)
#     # fp.write(s)

driver.close()

