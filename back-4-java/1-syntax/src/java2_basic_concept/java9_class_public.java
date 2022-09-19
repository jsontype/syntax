package java2_basic_concept;

// Public의 의미 :

class Greeting{

	// Access Level Modifiers : 외부에서 접근할 수 있는 레벨을 지정하는 것들
	// public : 해당 클래스 밖에서도 사용가능
	// protected : 안쓰고 몰라도 됨
	// default : 안쓰고 몰라도 됨
	// private : 같은 클래스 안에서만 사용가능
	//			만일, 아래 public을 private으로 바꾸면 아래 Greeting.hi()는 실행불가
    public static void hi() {
        System.out.println("Hi");
    }
}
public class java9_class_public {

    public static void main(String[] args) {
        Greeting.hi();
    }

}