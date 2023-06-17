import sys
from PyQt5.QtWidgets import *

class MyWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setupUI()

    # UI 설정 : 수직 레이아웃 사용한 후
    def setupUI(self):
        self.setGeometry(800, 200, 300, 300)

        # Textarea, Button
        self.textEdit = QTextEdit()
        self.pushButton= QPushButton('저장')

        # QVBoxLayout : 수직방향 레이아웃으로 위젯 추가
        layout = QVBoxLayout()
        layout.addWidget(self.textEdit)
        layout.addWidget(self.pushButton)

        # 레이아웃 설정 완료
        self.setLayout(layout)

        # 간편하게 레이아웃 배열이 가능해졌다.

if __name__ == "__main__":
    app = QApplication(sys.argv)
    mywindow = MyWindow()
    mywindow.show()
    app.exec_()