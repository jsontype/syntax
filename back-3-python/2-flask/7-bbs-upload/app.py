"""
★ app6の学習目標：file upload / detail view / mod / delete

# する前に。。。
1. pip versionをupgrade : python -m pip install --upgrade pip
2. WSGI(Web Server)の構築 : pip install -U Werkzeug
3. sqlの更新
4. uploads folderの生成
5. index.htmlを修正します。('added'の部分、enctype="multipart/form-data"追加)
6. bbs1view.htmlを作成します。
7. bbs1mod.htmlを作成します。
8. app.pyを修正します。('added'の部分)
"""

# added : send_file(download), send_from_directory(download)
from flask import Flask, render_template, request, redirect, session, url_for, send_file, send_from_directory
import pymysql
# added : time(file名を変更するため使う), os(os.path.join = upload folderの指定, os.stat = img sizeの測定)　してい 지정、そくてい 측정
import time
import os
# added : secure_filename(filenameの数字化)
from werkzeug.utils import secure_filename

app = Flask(__name__)

app.secret_key = b'zix7211'

# added : 拡張子の制限のための変数 / かくちょうし 확장자, せいげん 제한
allowed_extensions = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
# added : アップロードフォルダ
app.config['upload_folder'] = 'uploads'

conn = pymysql.connect(
    user='root',
    passwd='',
    host='127.0.0.1',
    db='mysql',
    charset='utf8'
)

@app.route('/index', methods=['GET', 'POST'])
def index():
    if session:
        id = session['id']
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute('SELECT * FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
        bbs1rows = cursor.fetchall()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute('SELECT DISTINCT category FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
        cate1rows = cursor.fetchall()
        return render_template('index.html', bbs1rows=bbs1rows, cate1rows=cate1rows)
    else:
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
            id = session['id']
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute('SELECT * FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
            bbs1rows = cursor.fetchall()
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute('SELECT DISTINCT category FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
            cate1rows = cursor.fetchall()
            return render_template('index.html', bbs1rows=bbs1rows, cate1rows=cate1rows)
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
            id = session['id']
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute('SELECT * FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
            bbs1rows = cursor.fetchall()
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute('SELECT DISTINCT category FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
            cate1rows = cursor.fetchall()
            return render_template('index.html', bbs1rows=bbs1rows, cate1rows=cate1rows)

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
# fileが許可した形態であるか検査
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in allowed_extensions

@app.route('/bbs1writepost', methods=['GET', 'POST'])
def bbs1writepost():
    category = request.form['category']
    title = request.form['title']
    content = request.form['content']
    nickname = request.form['nickname']

    id = session['id']

    # <!-- added Start : file uploads -->
    file = request.files['img_file1']
    if file and allowed_file(file.filename):
        filename = str(time.time())+secure_filename(file.filename)
        file.save(os.path.join(app.config['upload_folder'], filename))

        img_file1 = filename

        # image sizeを測定する　/ そくてい 측정
        bytes_img_size = os.stat('uploads/' + img_file1).st_size
        mb_img_size = bytes_img_size / 1000000
        img_size1 = round(mb_img_size,1)
        if img_size1 < 1:
            img_size1 = 1
    else:
        img_file1 = ''
        img_size1 = 0
    # <!-- added End -->

    if not (nickname and title and content) :
        return "<script>alert('必須項目を全部入れてください。');history.back();</script>"
    elif img_size1 > 10:
        return "<script>alert('10MB以上はuploadできません。');history.back();</script>"
    else:
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        query = "INSERT INTO azuma_fm1_bbs1 (no, id, category, title, content, nickname, reg_date, mod_date, img_file1, img_size1, del_flg) VALUES (NULL, %s, %s, %s, %s, %s, current_timestamp(), NULL, %s, %s, '0')"
        value = (id, category, title, content, nickname, img_file1, img_size1)
        cursor.execute(query, value)
        writecheck = cursor.fetchall()
        if not writecheck:
            conn.commit()
            if session:
                id = session['id']
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.execute('SELECT * FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
                bbs1rows = cursor.fetchall()
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.execute('SELECT DISTINCT category FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
                cate1rows = cursor.fetchall()
                return render_template('index.html', bbs1rows=bbs1rows, cate1rows=cate1rows)
                # 重複の除去 / ちょうふく 중복 じょきょ 제거　
            else:
                return render_template('index.html')
        else:
            return "bbs1writepost Failed"

@app.route('/bbs1deleteallpost', methods=['GET', 'POST'])
def bbs1deleteallpost():
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute('DELETE FROM azuma_fm1_bbs1 WHERE id = %s', (session['id']))
    # cursor.execute('UPDATE azuma_fm1_bbs1 SET `del_flg` = 1 WHERE id = %s', (session['id']))
    conn.commit
    return render_template('index.html')

@app.route('/bbs1view', methods=['GET', 'POST'])
def bbs1view():
    # <!-- get method(http://localhost:5000/bbs1view?no=104)の'104'のnumberを変数noに入れます。 Start -->
    parameter_dict = request.args.to_dict()
    if len(parameter_dict) == 0:
        return "<script>alert('掲示物のParameterが必要です。');history.back();</script>"
    parameters = ''
    for key in parameter_dict.keys():
        no = request.args[key]
    # <!-- get method(http://localhost:5000/bbs1view?no=104)の'104'のnumberを変数noに入れます。 End -->
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute('SELECT * FROM azuma_fm1_bbs1 WHERE no = %s', (no))
    bbs1viewrows = cursor.fetchall()
    return render_template('bbs1view.html', bbs1viewrows=bbs1viewrows)

@app.route('/bbs1delete', methods=['GET', 'POST'])
def bbs1deletepost():
    parameter_dict = request.args.to_dict()
    if len(parameter_dict) == 0:
        return "<script>alert('掲示物のParameterが必要です。');history.back();</script>"
    parameters = ''
    for key in parameter_dict.keys():
        no = request.args[key]
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute('DELETE FROM azuma_fm1_bbs1 WHERE no= %s', (no))
    # cursor.execute('UPDATE azuma_fm1_bbs1 SET `del_flg` = 1 WHERE no = %s', (no))
    conn.commit
    id = session['id']
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute('SELECT * FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
    bbs1rows = cursor.fetchall()
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute('SELECT DISTINCT category FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
    cate1rows = cursor.fetchall()
    return render_template('index.html', bbs1rows=bbs1rows, cate1rows=cate1rows)

@app.route('/bbs1mod', methods=['GET', 'POST'])
def bbs1mod():
    parameter_dict = request.args.to_dict()
    if len(parameter_dict) == 0:
        return "<script>alert('掲示物のParameterが必要です。');history.back();</script>"
    parameters = ''
    for key in parameter_dict.keys():
        no = request.args[key]
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute('SELECT * FROM azuma_fm1_bbs1 WHERE no = %s', (no))
    bbs1modrows = cursor.fetchall()
    return render_template('bbs1mod.html', bbs1modrows=bbs1modrows)

@app.route('/bbs1modpost', methods=['POST'])
def bbs1modpost():
    no = request.form['no']
    category = request.form['category']
    title = request.form['title']
    content = request.form['content']
    nickname = request.form['nickname']

    id = session['id']

    # file uploads
    file = request.files['img_file1']
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['upload_folder'], filename))

        img_file1 = filename
        bytes_img_size = os.stat('uploads/' + img_file1).st_size
        mb_img_size = bytes_img_size / 1000000
        img_size1 = round(mb_img_size,1)
        if img_size1 < 1:
            img_size1 = 1
    else:
        img_file1 = ''
        img_size1 = 0

    if not (nickname and title and content):
        return "<script>alert('必須項目を全部入れてください。');history.back();</script>"
    if img_size1 > 10:
        return "<script>alert('10MB以上はuploadできません。');history.back();</script>"
    else:
        if img_file1 != '':
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            query = "UPDATE azuma_fm1_bbs1 SET `category` = %s, `title` = %s, `content` = %s, `nickname` = %s, `mod_date` = current_timestamp(), `img_file1` = %s, `img_size1` = %s WHERE no = %s"
            value = (category, title, content, nickname, img_file1, img_size1, no)
            cursor.execute(query, value)
            conn.commit()
            id = session['id']
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute('SELECT * FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
            bbs1rows = cursor.fetchall()
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute('SELECT DISTINCT category FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
            cate1rows = cursor.fetchall()
            return render_template('index.html', bbs1rows=bbs1rows, cate1rows=cate1rows)
        else:
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            query = "UPDATE azuma_fm1_bbs1 SET `category` = %s, `title` = %s, `content` = %s, `nickname` = %s, `mod_date` = current_timestamp() WHERE no = %s"
            value = (category, title, content, nickname, no)
            cursor.execute(query, value)
            conn.commit()
            id = session['id']
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute('SELECT * FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
            bbs1rows = cursor.fetchall()
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute('SELECT DISTINCT category FROM azuma_fm1_bbs1 WHERE del_flg = %s and id = %s', (0, id))
            cate1rows = cursor.fetchall()
            return render_template('index.html', bbs1rows=bbs1rows, cate1rows=cate1rows)

@app.route('/download')
def download():
    parameter_dict = request.args.to_dict()
    if len(parameter_dict) == 0:
        return "<script>alert('掲示物のParameterが必要です。');history.back();</script>"
    parameters = ''
    for key in parameter_dict.keys():
        file = request.args[key]
    file_name = f"uploads\\"+file # Download File
    return send_file(file_name,
                     mimetype='text/csv',
                     attachment_filename=file,# Download File Name In Your PC
                     as_attachment=True)




if __name__ == '__main__':
	app.run(debug=True)
