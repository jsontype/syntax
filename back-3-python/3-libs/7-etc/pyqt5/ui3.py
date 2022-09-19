import sys
from PyQt5.QtWidgets import *

class MyWindow(QMainWindow):
    def __init__(self): # self = 앱 자체를 의미
        super().__init__()
        self.setWindowTitle("PyStock") # 앱 윈도우 타이틀        
        self.setGeometry(300, 300, 300, 400) # 앱 창 위치 및 크기 조절 : x축 거리, y축 거리, x축 크기, y축 크기

if __name__ == "__main__":
    app = QApplication(sys.argv)
    mywindow = MyWindow()
    mywindow.show()
    app.exec_()