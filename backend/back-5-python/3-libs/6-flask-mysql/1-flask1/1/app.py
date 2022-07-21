# flask 설치하기
# pip install flask
# python
# >>> import flask
# >>> exit()


from flask import Flask, render_template
app = Flask(__name__)

# Controller = localhost:5000/
@app.route('/main') 

# model
def main():
    # return '<h1>GoodBye World!!</h1>'
    return render_template('main.html')

# Controller = localhost:5000/user/flask
@app.route('/user/<name>') 

# model
def user(name):    
    # return '<h1>Hello, %s!</h1>' % name # %s = string
    return render_template('user.html', name=name)



if __name__ == '__main__':
    app.run(debug=True)