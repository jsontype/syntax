# [정식 클래스 만들기]

class Human():    
    # 모델링(초기화)
    def __init__(self, name, weight, language):
        self.name = name
        self.weight = weight
        self.language = language

    # print시의 처리
    def __str__(self): # print했을 때 클래스는 위치만 나오는데, 이걸 지정하면 이대로 나온다.
        return "{}은 {}키로이며, {}언어를 구사해요.".format(self.name, self.weight, self.language)

    # 개인 메소드 만들기
    def str2(self):
        return "{}은 {}키로에요.".format(self.name, self.weight)

    def weightCheck(self):
        print("{}은 {}키로에요.".format(self.name, self.weight))

    def eat(self):
        self.weight = self.weight + 1
        self.weightCheck()

    def diet(self):
        self.weight = self.weight - 1
        self.weightCheck()

    def greet(self):
        if (self.language == 'Korean'):
            print('안녕하세요!')
        elif (self.language == 'English'):
            print('Hello!')
        else:
            print('fqlkj2##@?')

person1 = Human("Yang", 68, "Korean")
# print(person1)
# print(person1.str2())

person2 = Human("Lee", 47, "English")
# print(person2)
# print(person2.str2())

person3 = Human("ET", 250, "외계어")

# person1, 2, 3는 Human 클래스의 인스턴스(복제본)들입니다.

person1.eat()
person2.eat()
person1.diet()
person1.diet()
person2.diet()
person2.diet()

person1.greet()
person2.greet()

person3.greet()
person3.diet()
person3.eat()
