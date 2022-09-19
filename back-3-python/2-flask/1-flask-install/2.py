# dependency : importするpluginだちを意味します。
from flask import Flask　# Serverを構築する命令

app = Flask(__name__)

# route : mappingの処理する事
# mapping : clientが要請したurlに対応する事

# / : トップディレクトリです。"http://localhost:5000"のmapping
@app.route('/')
def hello():
	return '<h1>Hello world!</h1>'

# /user/<name> : "http://localhost:5000/user/flask"のmapping
@app.route('/user/<name>')
def user(name):
	return '<h1>Hello, %s!</h1>' % name

# debug=True : Debugモードだから、Serverに入れる時は、削除
if __name__ == '__main__':
	app.run(debug=True)
