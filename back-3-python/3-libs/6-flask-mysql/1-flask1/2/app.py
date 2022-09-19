# flask 설치하기
# pip install flask
# python
# >>> import flask
# >>> exit()

from flask import Flask, render_template
app = Flask(__name__)

# Controller = localhost:5000/
@app.route('/', methods=['GET', 'POST'])
# model
def getIndex():
    return render_template('index.html')

# Controller = localhost:5000/login
@app.route('/login', methods=['GET', 'POST'])
# model
def getLogin():
    return render_template('login.html')

# Controller = localhost:5000/write
@app.route('/write', methods=['GET', 'POST'])
# model
def getWrite():
    return render_template('write.html')


if __name__ == '__main__':
    app.run(debug=True)