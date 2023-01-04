import sys
from PyQt5.QtWidgets import *

class MyWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setupUI()

    # UI 설정
    def setupUI(self):
        # 창 위치, 크기 설정 : x축 거리, y축 거리, x축 크기, y축 크기
        self.setGeometry(800, 400, 300, 150)

        # UI 설정 : Label
        label = QLabel("종목코드", self)
        label.move(20, 20)

        # UI 설정 : StatusBar
        self.statusBar = QStatusBar(self)
        self.setStatusBar(self.statusBar)

        # 이벤트 : 라인에디트 이벤트 발생시에 메소드 실행
        self.lineEdit = QLineEdit("", self)
        self.lineEdit.move(80, 20)
        self.lineEdit.textChanged.connect(self.lineEditChanged)

    # 이벤트처리 메소드 : 아래 스테이터스바에 메시지를 띄움
    def lineEditChanged(self):
        self.statusBar.showMessage(self.lineEdit.text())

if __name__ == "__main__":
    app = QApplication(sys.argv)
    mywindow = MyWindow()
    mywindow.show()
    app.exec_()