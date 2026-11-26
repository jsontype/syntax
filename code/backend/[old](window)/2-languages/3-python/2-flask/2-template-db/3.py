# request, redirect, sessionも使います！ (dependency)
from flask import Flask, render_template, request, redirect, session
import pymysql

app = Flask(__name__)

# Sessionを使う時SessionのPasswordが要ります。大切にしてください。
app.secret_key = b'zix7211'

conn = pymysql.connect(
    user='root',
    passwd='',
    host='127.0.0.1',
    db='mysql',
    charset='utf8'
)

# DB呼ぶ方法の例
curs = conn.cursor(pymysql.cursors.DictCursor)
member1_sql = "select * from azuma_fm1_user1"
curs.execute(member1_sql)
member1_row = curs.fetchall() # fetchall : 全部付けて、fetchone :　一つ付けて

@app.route('/', methods=['GET', 'POST'])
def index():
  return render_template('index.html', member1=member1_row)

@app.route('/blog-single', methods=['GET', 'POST'])
def blogsingle():
  return render_template('blog-single.html', member1=member1_row)

@app.route('/login', methods=['GET', 'POST'])
def login():
  return render_template('login.html')

# get : 情報がアドレスバーに見えるように (localhost:5000/loginpost?id=test&pass=test)
# post : 情報がアドレスバーに見えないように (localhost:5000/loginpost)
@app.route('/loginpost', methods=['POST'])
def loginpost():
    # dbに入れていないmember1変数をsession化するため、ローカル変数member1を、グローバル変数に変更する。
        # ローカル変数 Local Variable 지역변수 : メソッドの中だけで作用する変数　さよう 작용
        # グローバル変数 Global Variable 전역변수 : 全ての所に作用する変数
    global member1
    # methodはpost, usernameは存在, passwordは存在 (and使う時はすべて充足しなければfalse)　そんざい 존재、じゅうそく 충족
    if request.method == 'POST' and 'id' in request.form and 'password' in request.form:
        id = request.form['id']
        password = request.form['password']
        # DBの情報を検索して、あったら、この情報を選択
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute('SELECT * FROM azuma_fm1_user1 WHERE id = %s AND password = %s', (id, password))
        # DBを探して選択した結果を変数member1に入れる
        member1 = cursor.fetchone()
        # lOGIN SUCCESS
        if member1:
            # Session : memberなどの情報を入れて、ある場合と、ない場合のページ表示を異にするためのもの い(こと)にする 달리하다
            session['member'] = True
            session['id'] = member1['id']
            return 'login success!'
        # lOGIN FAIL
        else:
            return 'login fail...'

if __name__ == '__main__':
	app.run(debug=True)
