import sys
from PyQt5.QtWidgets import *
from PyQt5.QtGui import *

# 로그인 다이얼로그
class LogInDialog(QDialog):
    def __init__(self):
        super().__init__()
        self.setupUI()

        self.id = None
        self.password = None

    # UI 설정 : 행렬 그리드 레이아웃
    def setupUI(self):
        self.setGeometry(1100, 200, 300, 100)
        self.setWindowTitle("Sign In")
        self.setWindowIcon(QIcon('icon.png'))

        label1 = QLabel("ID: ")
        label2 = QLabel("Password: ")

        self.lineEdit1 = QLineEdit()
        self.lineEdit2 = QLineEdit()
        self.pushButton1= QPushButton("Sign In")
        self.pushButton1.clicked.connect(self.pushButtonClicked)

        # 행렬 그리드 레이아웃 설정
        layout = QGridLayout()
        layout.addWidget(label1, 0, 0)
        layout.addWidget(self.lineEdit1, 0, 1)
        layout.addWidget(self.pushButton1, 0, 2)
        layout.addWidget(label2, 1, 0)
        layout.addWidget(self.lineEdit2, 1, 1)

        self.setLayout(layout)

    def pushButtonClicked(self):
        self.id = self.lineEdit1.text()
        self.password = self.lineEdit2.text()
        self.close()

# 메인 다이얼로그
class MyWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setupUI()

    # UI 설정 : 수평 레이아웃
    def setupUI(self):
        self.setGeometry(800, 200, 300, 300)
        self.setWindowTitle("PyStock v0.1")
        self.setWindowIcon(QIcon('icon.png'))

        self.pushButton = QPushButton("Sign In")
        self.pushButton.clicked.connect(self.pushButtonClicked)
        self.label = QLabel()

        layout = QVBoxLayout()
        layout.addWidget(self.pushButton)
        layout.addWidget(self.label)

        self.setLayout(layout)

    # 로그인 다이얼로그 열기
    def pushButtonClicked(self):
        dlg = LogInDialog()
        dlg.exec_()
        # 메인 윈도우와 다이얼로그의 상호작용 : 다이얼로그에 id, pw를 입력시 메인윈도우 label에 실린다.
        id = dlg.id
        password = dlg.password
        self.label.setText("id: %s password: %s" % (id, password))

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MyWindow()
    window.show()
    app.exec_()