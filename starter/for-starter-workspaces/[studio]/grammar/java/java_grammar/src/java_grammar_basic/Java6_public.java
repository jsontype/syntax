package java_grammar_basic;

// Access Level Modifiers : �ܺ� ������ ��� ������ �����ϴ� �͵�
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
		// public : �ش� Ŭ���� �ۿ��� ��� ����
		Greeting.hi();

		// private : ���� Ŭ���� �ȿ����� ��� ����
		// Greeting.name();
	}

}
