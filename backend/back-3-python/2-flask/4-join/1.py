"""
★ app3の学習目標：Join

# する前に。。。
1. /static/js/main.jsを修正します。Chrome(or IE)のcashを削除して適用します。('added'の部分)
2. /templates/login.htmlを修正します。('added'の部分)
3. /templates/register.htmlを作成します。
4. /templates/lib/top.htmlを修正します。('added'の部分)
5. 1.pyを修正します。('added'の部分)
"""

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
            session['facebook'] = member1['facebook']
            session['twitter'] = member1['twitter']
            session['instagram'] = member1['instagram']
            session['googleplus'] = member1['googleplus']
            session['tumblr'] = member1['tumblr']
            session['dribble'] = member1['dribble']
            session['dream1'] = member1['dream1']
            session['address'] = member1['address']
            return render_template('index.html')#/loginpostが出ます。
            # 下の方法もあります。(入れる変数がない場合)
            # return redirect(url_for('index'))#（getの変数入れられる#/loginが出ます。
            # return redirect('/index')#/loginが出ます。
        # lOGIN FAIL
        else:
            # return 'login failed'
            msg = 'Login failed.. Please check your ID or password.'
            return render_template('login.html', msg=msg)

@app.route('/logout', methods=['GET', 'POST'])
def logout():
    session.pop('member', None)
    session.pop('id', None)
    session.pop('realname', None)
    session.pop('nickname', None)
    session.pop('gender', None)
    session.pop('birth', None)
    session.pop('email', None)
    session.pop('tel', None)
    session.pop('phone', None)
    session.pop('facebook', None)
    session.pop('instagram', None)
    session.pop('twitter', None)
    session.pop('googleplus', None)
    session.pop('tumblr', None)
    session.pop('dribble', None)
    session.pop('dream1', None)
    session.pop('address', None)
    return redirect('login')



# <!-- added -->
# 下から新しい機能の開発
@app.route('/register', methods=['GET', 'POST'])
def register():
  return render_template('register.html')

@app.route('/registerpost', methods=['POST'])
def registerpost():
    # 会員の情報を生成
    id = request.form['id']
    password = request.form['password']
    passwordcheck = request.form['passwordcheck']
    realname = request.form['realname']
    nickname = request.form['nickname']
    gender = request.form['gender']
    birth = request.form['birth']
    email = request.form['email']
    tel = request.form['tel']
    phone = request.form['phone']
    facebook = request.form['facebook']
    twitter = request.form['twitter']
    instagram = request.form['instagram']
    googleplus = request.form['googleplus']
    tumblr = request.form['tumblr']
    dribble = request.form['dribble']
    dream1 = request.form['dream1']
    address = request.form['address']

    # 同じIDの存在のCheck
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute('SELECT * FROM azuma_fm1_user1 WHERE id = %s', (id))
    idcheck = cursor.fetchone()
    # 同じIDが存在する場合の処理
    if idcheck:
        return "<script>alert('もうあるIDです。');history.back();</script>"
    elif not (id and password and passwordcheck and realname and nickname and gender and birth and email) :
        return "<script>alert('必須項目を全部入れてください。');history.back();</script>"
    elif password != passwordcheck:
        return "<script>alert('Passwordを確認してください。');history.back();</script>"
    else: # 全ての必須項目が記入された場合、下の命令を実行（DBの中に入れる)
        # cursor
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        query = "INSERT INTO azuma_fm1_user1 (id, password, realname, nickname, gender, birth, email, tel, phone, facebook, twitter, instagram, googleplus, tumblr, dribble, dream1, address) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        value = (id, password, realname, nickname, gender, birth, email, tel, phone, facebook, twitter, instagram, googleplus, tumblr, dribble, dream1, address)
        cursor.execute(query, value)
        joincheck = cursor.fetchall()
        if not joincheck:
            conn.commit()
            # session = login処理
            session['member'] = True
            session['id'] = id
            session['realname'] = realname
            session['nickname'] = nickname
            session['gender'] = gender
            session['birth'] = birth
            session['email'] = email
            session['tel'] = tel
            session['phone'] = phone
            session['facebook'] = facebook
            session['twitter'] = twitter
            session['instagram'] = instagram
            session['googleplus'] = googleplus
            session['tumblr'] = tumblr
            session['dribble'] = dribble
            session['dream1'] = dream1
            session['address'] = address
            return render_template('index.html')
        else:
            conn.rollback()
            return "Register Failed"
















if __name__ == '__main__':
	app.run(debug=True)
