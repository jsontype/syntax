from flask import Flask, render_template, request # pip install flask
from bs4 import BeautifulSoup # pip install bs4
from urllib.request import urlopen

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/action', methods=['GET', 'POST'])
def action():
    # 에러처리
    try:
        # 사용자의 입력정보 받기
        url = request.form['url']
        fileName = request.form['fileName']

        # 메모장 초기화
        fileName = fileName+'.txt'
        f = open(fileName, 'w', encoding='utf-8')
        f.write('')
        f.close()

        # 사용자에게 입력값 받아서, http로 시작하지 않는 경우에는 추가해서 처리
        first7Chars = url[0:7]
        if (first7Chars != 'http://' and first7Chars != 'https:/'):
            url = 'http://'+url

        # url 파싱(컴퓨터가 이해할 수 있는 언어로 바꾸는 것)
        url = urlopen(url)
        # html 파싱
        soup = BeautifulSoup(url, 'html.parser')

        # a 태그 추출
        for i in soup.select('a'):
            link = i.get('href', '/')
            first7Chars = link[0:7]

            if (first7Chars != 'http://' and first7Chars != 'https:/'):
                continue

            print(link)

            # 메모장에 저장
            f = open(fileName, 'a', encoding='utf-8') # a는 이어붙이기 w는 덮어씌우기
            f.write(link + '\n')
            f.close

        # 인덱스화면으로 복귀
        return render_template('index.html')

    # 에러처리
    except Exception as log:
        print('에러발생. 원인:', log)

if __name__ == '__main__':
    app.run(debug=True)