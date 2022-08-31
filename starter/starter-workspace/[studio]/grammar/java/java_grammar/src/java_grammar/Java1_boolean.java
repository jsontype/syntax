package java_grammar;

public class Java1_boolean {

	public static void main(String[] args) {
		// ������Ÿ�����μ��� Boolean
		System.out.println("������Ÿ�����μ��� Boolean");
		System.out.println("One"); // String
		System.out.println(1); // int
		System.out.println(true); // boolean
		System.out.println(false); // boolean

		// String true = "Hello World"; // true, false�� ��ӵ� reserved word

		// �񱳿����ڿ� ���� �˾ƺ��� Boolean
		System.out.println(1 > 2); // false
		System.out.println(1 == 1); // true
		System.out.println(1 < 1); // false
		System.out.println(1 >= 1); // true
		System.out.println(1 != 1); // false

		// �޼ҵ�� ���� �˾ƺ��� Boolean
		System.out.println("�޼ҵ�");
		String greeting = "Hello World!";
		System.out.println(greeting.contains("World")); // return true;
		System.out.println(greeting.contains("Hello"));
		System.out.println(greeting.contains("Java"));





	}

}
