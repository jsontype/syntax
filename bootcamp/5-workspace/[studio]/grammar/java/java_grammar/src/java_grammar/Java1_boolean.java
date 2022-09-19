package java_grammar;

public class Java1_boolean {

	public static void main(String[] args) {
		// 데이터타입으로서의 Boolean
		System.out.println("데이터타입으로서의 Boolean");
		System.out.println("One"); // String
		System.out.println(1); // int
		System.out.println(true); // boolean
		System.out.println(false); // boolean

		// String true = "Hello World"; // true, false는 약속된 reserved word

		// 비교연산자와 같이 알아보는 Boolean
		System.out.println(1 > 2); // false
		System.out.println(1 == 1); // true
		System.out.println(1 < 1); // false
		System.out.println(1 >= 1); // true
		System.out.println(1 != 1); // false

		// 메소드와 같이 알아보는 Boolean
		System.out.println("메소드");
		String greeting = "Hello World!";
		System.out.println(greeting.contains("World")); // return true;
		System.out.println(greeting.contains("Hello"));
		System.out.println(greeting.contains("Java"));





	}

}
