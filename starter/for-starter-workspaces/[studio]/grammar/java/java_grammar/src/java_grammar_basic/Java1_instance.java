package java_grammar_basic;

import java.io.FileNotFoundException;
import java.io.PrintWriter; // PrintWriter Ŭ������ ����Ʈ�Ѵ�.

public class Java1_instance {

	public static void main(String[] args) throws FileNotFoundException {
		// Ŭ����, ��ü, �ν��Ͻ�
		// Ŭ���� : ��ü�� ������ ���� ���赵, Ʋ
		// ��ü : Ŭ������ ����� ��� �״�� ������ ��ü. Ŭ������ ������Ÿ������ ������� ������ ��ü �����̴�. = ����Ʈ����󿡼��� ��ü�� �ν��Ͻ��� �Ѵ�.

		// ��ü ����
		String a = "Hello World";
		System.out.println(a.length()); // 11
		System.out.println(a.replace("World", "Java")); // Hello Java

		PrintWriter print1 = new PrintWriter("result.txt"); // ���⼭ �ι�° PrintWriter �޼ҵ��, Constructor(������)�̴�.
		print1.write("Hello Class!");
		print1.close();

		// OOP(Object Oriented Programming) ����
	}

}
