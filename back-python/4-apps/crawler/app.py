# -*- encoding: utf-8 -*-
from flask import Flask, render_template, request # pip install flask
from bs4 import BeautifulSoup # pip install bs4
from urllib.request import urlopen
from os import name
import sqlite3
# *** 3. 데이트타임 클래스 임포트 : 데이트타임 포맷을 수정하기 위함
from datetime import datetime # 참조 : import datetime만 할 경우, datetime.datetime.now()로 호출해야함.

app = Flask(__name__)


# DB Mapper
def setDB():
    conn = sqlite3.connect("result.db")
    return conn

def setCursor(conn):
    cursor = conn.cursor()
    return cursor

def createNewFile(FileName):
    conn = setDB()
    cursor = setCursor(conn)
    print(FileName)
    cursor.execute("INSERT INTO `result` VALUES('"+FileName+"', CURRENT_TIMESTAMP)")
    if cursor.rowcount == 1: print("1개의 레코드가 추가되었습니다.")
    conn.commit()  

def deleteAllFile():
    conn = setDB()
    cursor = setCursor(conn)
    cursor.execute("DELETE FROM `result` WHERE 1")
    if cursor.rowcount >= 0: print(cursor.rowcount, "개의 레코드가 삭제되었습니다.")
    conn.commit()

def selectAll():
    conn = setDB()
    cursor = setCursor(conn)
    cursor.execute("SELECT * FROM `result` WHERE 1")
    fList = cursor.fetchall()
    print(fList)
    conn.commit()    
    return fList

# *** 2. 인자값과 같은 파일명이 있는지 조사
def searchSameFile(fileName):
    conn = setDB()
    cursor = setCursor(conn)
    cursor.execute("SELECT * FROM `result` WHERE `FileName`='"+fileName+"'")
    sfList = cursor.fetchall()
    print(sfList)
    conn.commit()    
    return sfList

# Controller
@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')  

@app.route('/history', methods=['GET', 'POST'])
def history():
    result = selectAll()
    print(result)
    return render_template('history.html', result=result)

@app.route('/clear', methods=['GET', 'POST'])
def clear():
    deleteAllFile()
    result = selectAll()
    return render_template('history.html', result=result)

@app.route('/actionFromHistory', methods=['GET', 'POST'])
def actionFH():
    # 에러처리
    try:
        fileName = request.form['fileName']
        # 파일 보기 화면으로 이동
        f = open('templates/'+fileName, 'r', encoding='utf-8')
        f = f.readlines()
        print(f)
        return render_template('result.html', f=f, fileName=fileName)        

    # 에러처리
    except Exception as log:
        print('에러발생. 원인:', log)

        # 인덱스화면으로 복귀
        return render_template('index.html', log=log)        
    
@app.route('/action', methods=['GET', 'POST'])
def action():
    # 에러처리
    try:
        # 사용자의 입력정보 받기
        url = request.form['url']
        fileName = request.form['fileName']

        # *** 1. 같은 파일명이 존재하는 지를 조사
        sameFile = searchSameFile(fileName+'.txt')
        if sameFile:
            print('같은 파일명 존재:', sameFile)
            # *** 4. 같은 파일명일 경우 현재 날짜를 추가
            now = datetime.now() # now() : "현재시간"을 데이트타임 형태로 반환
            nowTimeStamp = now.timestamp() # timestamp() : 데이트타임 형태를 float 숫자의 형태로 반환
            fileName = fileName+'_'+str(nowTimeStamp)
        else:
            print('같은 파일명 안존재')

        # 메모장 초기화
        fileName = fileName+'.txt'
        f = open('templates/'+fileName, 'w', encoding='utf-8')
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
            f = open('templates/'+fileName, 'a', encoding='utf-8') # a는 이어붙이기 w는 덮어씌우기
            f.write(link + '\n')
            f.close

        # 파일 보기 화면으로 이동
        f = open('templates/'+fileName, 'r', encoding='utf-8')
        f = f.readlines()
        print(f)
        createNewFile(fileName)
        return render_template('result.html', f=f, fileName=fileName)        

    # 에러처리
    except Exception as log:
        print('에러발생. 원인:', log)

        # 인덱스화면으로 복귀
        return render_template('index.html', log=log)        

if __name__ == '__main__':
    app.run(debug=True)