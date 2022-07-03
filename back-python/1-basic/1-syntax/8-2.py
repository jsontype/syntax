# [클래스 만들기, 상속]

class Animal():
    def walk(self):
        print("뚜벅뚜벅")
    def eat(self):
        print("냠냠")
    def greet(self):
        print("인사? 뭐지... 먹는건가")

class Human(Animal):
    def greet(self):
        print("손을 흔들기!")

# 상속 : Dog 클래스는 Animal 클래스를 상속받았다.
class Dog(Animal):
    def wag(self):
        print("꼬리를 흔들어!")
    def greet(self):
        self.wag()

# 아래 두줄 없으면 파라미터 self 안써야함 
lee = Human()     
seora = Dog()

# 변수, 함수값 꺼내보기
lee.greet()
lee.walk()
lee.eat()
seora.greet()
seora.walk()
seora.eat()