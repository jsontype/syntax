package java_grammar_basic;

public class Java7_practice {

	public static String printHello() {
		return "Hello";
	}

	public static void printHi() {
		System.out.println("Hello");
	}

	public String printHello2() {
		return "Hello World";
	}

	public void printHello3() {
		System.out.println("Hello Java");
	}

	private void printHello4() {
		System.out.println("Hello Java");
	}

	public static void main(String[] args) {
		// 1. �ۺ�, ����ƽ, ���ϰ��� ����ϴ� �޼ҵ�� "printHello"�� ������. ����� "Hello"�� ����Ѵ�.
		// System.out.println(printHello());

		// 1. �ۺ�, ����ƽ, ���̵� �޼ҵ�� "printHi"�� ������. ����� "Hello"�� ����Ѵ�.
		// printHi();

		// 1. �ۺ�, ����ƽ, ���ϰ��� ����ϴ� �޼ҵ�� "printHello2"�� ������. ����� "Hello World"�� ����Ѵ�.
		// java7_practice hello2 = new java7_practice();
		// System.out.println(hello2.printHello2());

		// 1. �ۺ�, ����ƽ, ���ϰ��� ������� �ʴ� �޼ҵ�� "printHello3"�� ������. ����� "Hello Java"�� ����Ѵ�.
		// java7_practice hello2 = new java7_practice();
		// hello2.printHello3();

		// 1. �����̺�, ����ƽ, ���ϰ��� ������� �ʴ� �޼ҵ�� "printHello4"�� ������. ����� "Hello Java"�� ����Ѵ�.
		Java7_practice hello2 = new Java7_practice();
		hello2.printHello4();
	}

}
