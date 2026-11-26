from flask import Flask, render_template, request
import sys
import asyncio
import learner
application = Flask(__name__)

weightAndBias = None
xList = []
yList = []
learning = False
progress = ""

# learner 모듈을 사용하여 학습


def getWeightAndBias(epochs):
    global weightAndBias
    global learning

    if not learning:
        learning = True
        weightAndBias = learner.learn(xList, yList, epochs)
        learning = False

# 일반 접속시


@application.route("/")
def index():
    return render(None)

# '학습하기' 요청시


@application.route("/learn", methods=['POST'])
def learn():
    global xList
    global yList

    xList = xList + list(map(float, request.json['xList'].strip().split(",")))
    yList = yList + list(map(float, request.json['yList'].strip().split(",")))

    xList = xList[0: min(len(xList), len(yList))]
    yList = yList[0: min(len(xList), len(yList))]

    getWeightAndBias(int(request.json['epochs']))

    return

# '예측하기' 요청시


@application.route("/predict", methods=['POST'])
def predict():
    return render(float(request.form['x']))

# 데이터를 html 템플릿에 넣어 렌더링


def render(x):
    global weightAndBias
    global learning

    formular = f"[학습중{learner.progress}] " if learning else ""
    if weightAndBias is not None:
        formular += f"y = { weightAndBias[0] } * x + { weightAndBias[1] }"
    else:
        formular += "학습된 수식이 없습니다."

    predicted = "학습된 수식이 없습니다."
    if (x is not None and weightAndBias is not None):
        predicted = (weightAndBias[0] * x + weightAndBias[1])

    return render_template(
        "index.html",
        formular=formular,
        predicted=predicted
    )


if __name__ == '__main__':
    application.run(debug=True)
