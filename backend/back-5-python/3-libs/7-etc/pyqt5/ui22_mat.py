import sys
from PyQt5.QtWidgets import *
from PyQt5.QtGui import *
import matplotlib.pyplot as plt
from matplotlib.backends.backend_qt5agg import FigureCanvasQTAgg as FigureCanvas
import pandas_datareader.data as web
import pandas as pd
from pandas import Series, DataFrame

# 종목코드 : 078930 GS, 005930 삼성, 072870 메가스터디 (.KS)

class MyWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setupUI()

    # UI 설정 : 중첩 레이아웃
    def setupUI(self):
        self.setGeometry(600, 200, 1200, 600)
        self.setWindowTitle("PyChart Viewer v0.1")
        self.setWindowIcon(QIcon('icon.png'))

        self.lineEdit = QLineEdit()
        self.pushButton = QPushButton("차트그리기")
        self.pushButton.clicked.connect(self.pushButtonClicked)

        self.fig = plt.Figure()
        self.canvas = FigureCanvas(self.fig)

        # 좌측 수직 레이아웃 설정
        leftLayout = QVBoxLayout()
        leftLayout.addWidget(self.canvas)

        # 우측 수직 레이아웃 설정
        rightLayout = QVBoxLayout()
        rightLayout.addWidget(self.lineEdit)
        rightLayout.addWidget(self.pushButton)
        rightLayout.addStretch(1)

        # 중첩 레이아웃 설정
        layout = QHBoxLayout()
        layout.addLayout(leftLayout)
        layout.addLayout(rightLayout)
        layout.setStretchFactor(leftLayout, 1)
        layout.setStretchFactor(rightLayout, 0)

        # 설정한 레이아웃 배치
        self.setLayout(layout)

    # 웹 데이터 리더를 통해서 실제로 데이터 정보를 받아서 가져오기
    def pushButtonClicked(self):
        code = self.lineEdit.text()
        df = web.DataReader(code + ".ks", "yahoo") # 
        df['MA20'] = df['Adj Close'].rolling(window=20).mean()
        df['MA60'] = df['Adj Close'].rolling(window=60).mean()

        ax = self.fig.add_subplot(111)
        ax.plot(df.index, df['Adj Close'], label='Adj Close')
        ax.plot(df.index, df['MA20'], label='MA20')
        ax.plot(df.index, df['MA60'], label='MA60')
        ax.legend(loc='upper right')
        ax.grid()

        self.canvas.draw()

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MyWindow()
    window.show()
    app.exec_()