# dependency : render_templateだというdependencyを追加しました。
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello():
	return '<h1>Hello world!</h1>'

@app.route('/user/<name>')
def user(name):
	return render_template('user.html', name=name)

if __name__ == '__main__':
	app.run(debug=True)
