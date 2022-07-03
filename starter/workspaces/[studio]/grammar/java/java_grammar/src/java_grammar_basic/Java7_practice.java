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
		// 1. 퍼블릭, 스태틱, 리턴값을 허용하는 메소드명 "printHello"를 만들어라. 결과는 "Hello"를 출력한다.
		// System.out.println(printHello());

		// 1. 퍼블릭, 스태틱, 보이드 메소드명 "printHi"를 만들어라. 결과는 "Hello"를 출력한다.
		// printHi();

		// 1. 퍼블릭, 논스태틱, 리턴값을 허용하는 메소드명 "printHello2"를 만들어라. 결과는 "Hello World"를 출력한다.
		// java7_practice hello2 = new java7_practice();
		// System.out.println(hello2.printHello2());

		// 1. 퍼블릭, 논스태틱, 리턴값을 허용하지 않는 메소드명 "printHello3"를 만들어라. 결과는 "Hello Java"를 출력한다.
		// java7_practice hello2 = new java7_practice();
		// hello2.printHello3();

		// 1. 프라이빗, 논스태틱, 리턴값을 허용하지 않는 메소드명 "printHello4"를 만들어라. 결과는 "Hello Java"를 출력한다.
		Java7_practice hello2 = new Java7_practice();
		hello2.printHello4();
	}

}
