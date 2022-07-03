package java1_novice_grammar;

public class java8_variable {

	public static void main(String[] args) {
		String name = "Yang"; // 이것만 바꾸면 name이 다 바뀌어진다.
		System.out.println("Hello, "+name+" ... Then ... "+name+" ... bye");

		double VAT = 10.0;
		System.out.println(VAT);

		int number = 1;
		number = number + 1; // 연산값의 저장이 가능하다.
		System.out.println(number);
	}

}