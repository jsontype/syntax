package java_grammar_basic;

// Access Level Modifiers : 외부 접근을 허용 레벨을 지정하는 것들
class Greeting {
	public static void hi() {
		System.out.println("Hi!");
	}

	private static void name() {
		System.out.println("Yang");
	}
}

public class Java6_public {
	public static void main(String[] args) {
		// public : 해당 클래스 밖에서 사용 가능
		Greeting.hi();

		// private : 같은 클래스 안에서만 사용 가능
		// Greeting.name();
	}

}
