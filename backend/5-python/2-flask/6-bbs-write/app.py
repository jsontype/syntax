"""
★ app5の学習目標：write / category / delete all

# する前に。。。
1. 1.py → app.py / blog-single.html → bbs1view.html/bbs1mod.html
2. index.htmlを修正します。('added'の部分)
3. app.pyを修正します。('added'の部分)
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
    # added Start
    if session:
        id = session['id']
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute('SELECT * FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
        bbs1rows = cursor.fetchall()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        # 重複の除去 / ちょうふく 중복 じょきょ 제거　
        cursor.execute('SELECT DISTINCT category FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
        cate1rows = cursor.fetchall()
        return render_template('index.html', bbs1rows=bbs1rows, cate1rows=cate1rows)
    else:
    # added End
        return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
  return render_template('login.html')

@app.route('/loginpost', methods=['POST'])
def loginpost():
    global member1
    if request.method == 'POST' and 'id' in request.form and 'password' in request.form:
        id = request.form['id']
        password = request.form['password']
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute('SELECT * FROM azuma_fm1_user1 WHERE id = %s AND password = %s', (id, password))
        member1 = cursor.fetchone()
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
            # added start
            id = session['id']
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute('SELECT * FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
            bbs1rows = cursor.fetchall()
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            # 重複の除去 / ちょうふく 중복 じょきょ 제거　
            cursor.execute('SELECT DISTINCT category FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
            cate1rows = cursor.fetchall()
            return render_template('index.html', bbs1rows=bbs1rows, cate1rows=cate1rows)
            # added end
        else:
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

@app.route('/register', methods=['GET', 'POST'])
def register():
  return render_template('register.html')

@app.route('/registerpost', methods=['POST'])
def registerpost():
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

    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute('SELECT * FROM azuma_fm1_user1 WHERE id = %s', (id))
    idcheck = cursor.fetchone()
    if idcheck:
        return "<script>alert('もうあるIDです。');history.back();</script>"
    elif not (id and password and passwordcheck and realname and nickname and gender and birth and email) :
        return "<script>alert('必須項目を全部入れてください。');history.back();</script>"
    elif password != passwordcheck:
        return "<script>alert('Passwordを確認してください。');history.back();</script>"
    else:
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        query = "INSERT INTO azuma_fm1_user1 (id, password, realname, nickname, gender, birth, email, tel, phone, facebook, twitter, instagram, googleplus, tumblr, dribble, dream1, address) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        value = (id, password, realname, nickname, gender, birth, email, tel, phone, facebook, twitter, instagram, googleplus, tumblr, dribble, dream1, address)
        cursor.execute(query, value)
        joincheck = cursor.fetchall()
        if not joincheck:
            conn.commit()
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

@app.route('/memberinfo', methods=['GET', 'POST'])
def memberinfo():
  return render_template('memberinfo.html')

@app.route('/membermod', methods=['GET', 'POST'])
def membermod():
  return render_template('membermod.html')

@app.route('/membermodpost', methods=['POST'])
def membermodpost():
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

    if not (id and password and passwordcheck and realname and nickname and gender and birth and email) :
        return "<script>alert('必須項目を全部入れてください。');history.back();</script>"
    elif password != passwordcheck:
        return "<script>alert('変更するPasswordを確認してください。');history.back();</script>"
    else:
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        query = "UPDATE azuma_fm1_user1 SET `password` = %s, `realname` = %s, `nickname` = %s, `gender` = %s, `birth` = %s, `email` = %s, `tel` = %s, `phone` = %s, `facebook` = %s, `twitter` = %s, `instagram` = %s, `googleplus` = %s, `tumblr` = %s, `dribble` = %s, `dream1` = %s, `address` = %s WHERE `azuma_fm1_user1`.`id` = %s"
        value = (password, realname, nickname, gender, birth, email, tel, phone, facebook, twitter, instagram, googleplus, tumblr, dribble, dream1, address, id)
        cursor.execute(query, value)
        membermodcheck = cursor.fetchall()
        if not membermodcheck:
            conn.commit()
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
            # added start
            id = session['id']
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute('SELECT * FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
            bbs1rows = cursor.fetchall()
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute('SELECT DISTINCT category FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
            cate1rows = cursor.fetchall()
            return render_template('index.html', bbs1rows=bbs1rows, cate1rows=cate1rows)
            # added end
        else:
            conn.rollback()
            return "Membermod Failed"

@app.route('/memberout', methods=['GET', 'POST'])
def memberout():
  return render_template('memberout.html')

@app.route('/memberoutpost', methods=['POST'])
def memberoutpost():
    if request.method == 'POST' and 'id' in request.form and 'password' in request.form:
        password = request.form['password']
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute('SELECT * FROM azuma_fm1_user1 WHERE id = %s AND password = %s', (session['id'], password))
        memberout = cursor.fetchone()
        if memberout:
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute('DELETE FROM azuma_fm1_user1 WHERE id = %s AND password = %s', (session['id'], password))
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
            return render_template('login.html')
        else:
            msg = 'Delete failed.. Please check your ID or password.'
            return render_template('memberout.html', msg=msg)







# added Start
# 下から新しい機能の開発
@app.route('/bbs1writepost', methods=['POST'])
def bbs1writepost():

    category = request.form['category']
    title = request.form['title']
    content = request.form['content']
    nickname = request.form['nickname']

    id = session['id']
    mod_date = ''# また後でしよう！
    img_file1 = request.form['img_file1']
    img_size1 = ''# また後でしよう！

    if not (nickname and title and content) :
        return "<script>alert('必須項目を全部入れてください。');history.back();</script>"
    else:
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        query = "INSERT INTO azuma_fm1_bbs1 (no, id, category, title, content, nickname, reg_date, mod_date, img_file1, img_size1, del_flg) VALUES (NULL, %s, %s, %s, %s, %s, current_timestamp(), NULL, %s, %s, '0')"
        value = (id, category, title, content, nickname, img_file1, img_size1)
        cursor.execute(query, value)
        writecheck = cursor.fetchall()
        if not writecheck:
            conn.commit()
            # added Start
            if session:
                id = session['id']
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.execute('SELECT * FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
                bbs1rows = cursor.fetchall()
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                # 重複の除去 / ちょうふく 중복 じょきょ 제거　
                cursor.execute('SELECT DISTINCT category FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
                cate1rows = cursor.fetchall()
                return render_template('index.html', bbs1rows=bbs1rows, cate1rows=cate1rows)
            # added End
            else:
                return render_template('index.html')
        else:
            return "bbs1writepost Failed"







@app.route('/bbs1deleteallpost', methods=['GET', 'POST'])
def bbs1deleteallpost():
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute('DELETE FROM azuma_fm1_bbs1 WHERE id = %s', (session['id']))
    conn.commit
    return render_template('index.html')






@app.route('/bbs1view', methods=['GET', 'POST'])
def bbs1view():
  return render_template('bbs1view.html')

@app.route('/bbs1deletepost', methods=['POST'])
def bbs1deletepost():
  return render_template('index.html')

@app.route('/bbs1mod', methods=['GET', 'POST'])
def bbs1mod():
  return render_template('bbs1mod.html')

@app.route('/bbs1modpost', methods=['POST'])
def bbs1modpost():
  return render_template('bbs1view.html')










if __name__ == '__main__':
	app.run(debug=True)
