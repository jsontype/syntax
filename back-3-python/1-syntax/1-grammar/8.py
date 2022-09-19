# [클래스 만들기, 상속]
class Animal():
    # 변수 정의
    isAlive = True
    # 함수 정의
    def walk():
        print("뚜벅뚜벅")
    def eat():
        print("냠냠")
    def greet():
        print("...")

class Human(Animal):
    def greet():
        print("손을 흔들기!")

# 상속 : Dog 클래스는 Animal 클래스를 상속받았다.
class Dog(Animal):
    def greet():
        print("꼬리를 흔들기!")


# 변수, 함수 호출
print(Animal.isAlive)
Animal.walk()
Animal.eat()
Animal.greet()
print(Human.isAlive)
Human.walk()
Human.eat()
Human.greet()
print(Dog.isAlive)
Dog.walk()
Dog.eat()
Dog.greet()