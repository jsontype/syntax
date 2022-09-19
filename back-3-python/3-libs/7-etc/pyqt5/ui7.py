import sys
from PyQt5.QtWidgets import *

class MyWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setupUI()

    def setupUI(self):
        # 창 위치, 크기 설정 : x축 거리, y축 거리, x축 크기, y축 크기
        self.setGeometry(800, 400, 300, 150)

        # 문자표시 라벨 설정
        textLabel = QLabel("Message: ", self)
        textLabel.move(20, 20)

        # 라벨 설정
        self.label = QLabel("", self)
        self.label.move(80, 20) # 출력 위치 조절
        self.label.resize(150, 30) # 크기 조절

        # 클릭버튼 : 메세지 셋
        btn1 = QPushButton("Click", self)
        btn1.move(20, 60)
        # 사용자 지정 메소드 연결 : 메세지 셋
        btn1.clicked.connect(self.btn1_clicked)

        # 클리어버튼 : 메세지 클리어
        btn2 = QPushButton("Clear", self)
        btn2.move(140, 60)
        # 사용자 지정 메소드 연결 : 메세지 클리어
        btn2.clicked.connect(self.btn2_clicked)

    # 이벤트처리 메소드 : 메세지 셋
    def btn1_clicked(self):
        self.label.setText("버튼이 클릭되었습니다.")

    # 이벤트처리 메소드 : 메세지 클리어
    def btn2_clicked(self):
        self.label.clear()

if __name__ == "__main__":
    app = QApplication(sys.argv)
    mywindow = MyWindow()
    mywindow.show()
    app.exec_()