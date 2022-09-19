import flask # pip install flask

app = flask.Flask(__name__)

@app.route('/')
def home():
    return flask.render_template('index.html')

@app.route('/blog')
def blog():
    article1 = '오늘 일기'
    article2 = '오늘 공부한 내용'
    article3 = '내일 할일'
    articleList = [article1, article2, article3, '깍두기']
    return flask.render_template('blog.html', items=articleList)

if __name__ == '__main__':
    app.run(debug=True)