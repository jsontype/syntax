import sys
from PyQt5.QtWidgets import *

class MyWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setupUI()

    # UI 설정 : 행렬 그리드
    def setupUI(self):
        self.setGeometry(800, 200, 300, 100)

        # 라벨
        self.label1 = QLabel("ID: ")
        self.label2 = QLabel("Password: ")
        self.lineEdit1 = QLineEdit()
        self.lineEdit2 = QLineEdit()
        self.pushButton1= QPushButton("Sign In")

        # 그리드 레이아웃 : 행과 열의 그리드를 만든다.
        layout = QGridLayout()

        # 행을 0, 1 로 2등분
        # 열을 0, 1, 2 로 3등분
        layout.addWidget(self.label1, 0, 0)
        layout.addWidget(self.lineEdit1, 0, 1)
        layout.addWidget(self.pushButton1, 0, 2)

        layout.addWidget(self.label2, 1, 0)
        layout.addWidget(self.lineEdit2, 1, 1)

        # 레이아웃 설정 완료
        self.setLayout(layout)

if __name__ == "__main__":
    app = QApplication(sys.argv)
    mywindow = MyWindow()
    mywindow.show()
    app.exec_()