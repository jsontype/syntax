"""
★ app2の学習目標：Login, Logout, session処理

# する前に。。。
# 1. /static/contactform.jsを消します。templateのjsの設計の上、return値がloginの中の小さい所に入れちゃうからです。
# 2. * 要注意! cssやjsなどのstaticsコードは、修正後、cashを削除しなければ変更されない場合があります。
# 3. /templates/login.htmlを修正します。('added'部分)
# 4. 1.pyを作成します。
# 5. /templates/lib/top.htmlを修正します。('added'部分)
"""

# url_for 使います! (dependency)
from flask import Flask, render_template, request, redirect, session, url_for
import pymysql

app = Flask(__name__)

app.secret_key = b'zix7211'

conn = pymysql.connect(
    user='root',
    passwd='',
    host='127.0.0.1',
    db='mysql',
    charset='utf8'
)

# '/'を'/index'に修正します。
@app.route('/index', methods=['GET', 'POST'])
def index():
  return render_template('index.html')

@app.route('/blog-single', methods=['GET', 'POST'])
def blogsingle():
  return render_template('blog-single.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
  return render_template('login.html')

@app.route('/loginpost', methods=['POST'])
def loginpost():
    #
    global member1
    # method post * username exist * password exist
    if request.method == 'POST' and 'id' in request.form and 'password' in request.form:
        id = request.form['id']
        password = request.form['password']
        # DB Search * select
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute('SELECT * FROM azuma_fm1_user1 WHERE id = %s AND password = %s', (id, password))
        # DB Search * select　の　Result → member1
        member1 = cursor.fetchone()
        # lOGIN SUCCESS
        if member1:
            session['member'] = True
            session['id'] = member1['id']
            session['realname'] = member1['realname']
            session['nickname'] = member1['nickname']
            session['gender'] = member1['gender']
            session['birth'] = member1['birth']
            session['email'] = member1['email']
            session['tel'] = member1['tel']
            session['phone'] = member1['phone']
            session['address'] = member1['address']
            return render_template('index.html')#/loginpostが出ます。
            # 下の方法もあります。(入れる変数がない場合)
            # return redirect(url_for('index'))#（getの変数入れられる#/loginが出ます。
            # return redirect('/index')#/loginが出ます。
        # lOGIN FAIL
        else:
            msg = 'Login failed.. Please check your ID or password.'
            return render_template('login.html', msg=msg)

if __name__ == '__main__':
	app.run(debug=True)
