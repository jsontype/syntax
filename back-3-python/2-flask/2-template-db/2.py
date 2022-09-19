from flask import Flask, render_template

import pymysql

app = Flask(__name__)

conn = pymysql.connect(
    user='root',
    passwd='',
    host='127.0.0.1',
    db='mysql',
    charset='utf8'
)

curs = conn.cursor(pymysql.cursors.DictCursor)
member1_sql = "select * from azuma_fm1_user1"
curs.execute(member1_sql)
member1_row = curs.fetchall()

@app.route('/', methods=['GET', 'POST'])
def index():
  return render_template('index.html', member1=member1_row)

@app.route('/blog-single', methods=['GET', 'POST'])
def blogsingle():
  return render_template('blog-single.html', member1=member1_row)

if __name__ == '__main__':
	app.run(debug=True)
