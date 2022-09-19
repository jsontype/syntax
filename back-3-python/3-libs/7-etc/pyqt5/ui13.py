import sys
from PyQt5.QtWidgets import *

class MyWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setupUI()

    # UI 설정 : 레이아웃 사용하기 전 
    def setupUI(self):
        self.setGeometry(800, 200, 300, 300)

        # Textarea
        self.textEdit = QTextEdit(self)
        self.textEdit.resize(280, 250)
        self.textEdit.move(10, 10)

        # Button
        self.pushButton= QPushButton('저장', self)
        self.pushButton.resize(280, 25)
        self.pushButton.move(10, 270)

        # x, y축 이동거리와 사이즈를 일일이 설정해야 해서 불편하다.

if __name__ == "__main__":
    app = QApplication(sys.argv)
    mywindow = MyWindow()
    mywindow.show()
    app.exec_()
