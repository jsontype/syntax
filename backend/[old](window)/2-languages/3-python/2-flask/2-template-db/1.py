"""
★ app1の学習目標：Templateの適用、DBとの連動、簡単なLogin

＜Conceptの勉強＞
Front-end  : JSP(Java), PHP(PHP), HTML..?(Py = Jinja2) x HTML/CSS/JS
Back-end(Java,PHP,Python) : HTMLなどのFront画像と、DBを連動するため、Logicを作る言語
DB(MySQL,Oracle) :　掲示板、ブログ、ID　Password などの動的な情報を入れる箱
↓
Server(Apache Tomcat9) : アプリをClientにつなげるための、構築するシステム(体系)
Host : Serverを運用する方
	Localhost : 自分の環境の中でセットしたHost、つまり、内部Host (localhost=127.0.0.1)
	Webhost : 他の環境を借りてセットしたHost、つまり、外部Host
Hosting : Serverを運用する事 (Hosting, Webhosting)
↓
Client : サーバーを通じてサービスを受ける顧客


＜Frameworkとは？＞
	What : 開発者の間に約束された型
	Who : 開発者
	Where : 実務現場
	When : チームプロジェクト次元のアプリを開発する時
	Which : ユーザー順で、Java(Spring>Springboot>Struts) PHP(Laravel>Cake) Python(Django>Flask)
	Why : 同じ形じゃなければ、他のコードを理解が難しくなる。
	How : 今からスタート！
"""


from flask import Flask, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
  return render_template('index.html')

@app.route('/blog-single', methods=['GET', 'POST'])
def blogsingle():
  return render_template('blog-single.html')

if __name__ == '__main__':
	app.run(debug=True)
