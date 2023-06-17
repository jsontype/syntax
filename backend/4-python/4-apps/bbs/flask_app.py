# -*- coding: utf-8 -*-

# pip install flask -> python -> import flask
from flask import Flask, render_template
import pymysql # pip install pymysql

app = Flask(__name__)

app.secret_key = b'zix7211'

# # 기존 A5M2를 이용한 로컬환경용 DB
# # conn = pymysql.connect(
# #     user='root',
# #     passwd='',
# #     host='127.0.0.1',
# #     db='mysql',
# #     charset='utf8'
# # )

# # ★pythonanywhere 디플로이환경용 DB
# conn = pymysql.connect(
#     user='ydhvocal',
#     passwd='zix7211!',
#     # host='127.0.0.1',
#     db='ydhvocal$azuma_flask1',
#     charset='utf8'
# )

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

if __name__ == '__main__':
	app.run(debug=True)
