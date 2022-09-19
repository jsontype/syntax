import sys
from PyQt5.QtWidgets import *
from PyQt5.QtCore import *

class MyWindow(QMainWindow):
    def __init__(self): # self = 앱 자체를 의미
        super().__init__()
        self.setWindowTitle("PyStock") # 앱 윈도우 타이틀
        self.setGeometry(300, 300, 300, 400) # 앱 창 위치 및 크기 조절

        btn1 = QPushButton("Click me", self) # 버튼 추가
        btn1.move(20, 20) # 버튼 위치 조절
        btn1.clicked.connect(self.btn1_clicked) # 버튼 클릭 이벤트시 발생할 메소드 연결

    # 버튼 클릭시 메소드
    def btn1_clicked(self): # 한 클래스 내의 메소드들은 반드시 self를 첫 인자로서 넣어야 한다.
        QMessageBox.about(self, "message", "clicked") # 메시지박스 (타이틀, 메시지 내용)

if __name__ == "__main__":
    app = QApplication(sys.argv)
    myWindow = MyWindow()
    myWindow.show()
    app.exec_()