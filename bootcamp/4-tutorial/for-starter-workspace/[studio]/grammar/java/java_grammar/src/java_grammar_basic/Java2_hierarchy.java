package java_grammar_basic;

import java.io.FileNotFoundException;
import java.io.PrintWriter;

public class Java2_hierarchy {

	public static void main(String[] args) throws FileNotFoundException {

		PrintWriter print1 = new PrintWriter("result.txt"); // ���⼭ �ι�° PrintWriter �޼ҵ��, Constructor(������)�̴�.

		// ��� Extend
		// PrintWriter�� �ν��Ͻ��� print1�� PrintWriter �ȿ� ���� toString() �޼ҵ带 �� �� �ִ� ����
		// = �Ҿƹ����� Object�κ��� PrintWriter���� toString�� ��ӹ޾ұ� �����̴�.
		System.out.println(print1.toString());

		// Override
		// �Ʒ��� ���, Writer Ŭ������ write() �޼ҵ带 �� �� �ƴ϶�, �ڽ��� PrintWriter Ŭ������ write() �޼ҵ带 �� ���̴�.
		// �ڽ� Ŭ������ �ѹ� �� write �޼ҵ带 �Է��ϰ� �Ǹ� �θ��� ���ϸ��� write �޼ҵ带 ������ �Ѵ�. �̸� Override��� �Ѵ�.
		print1.write("Hello Class!");
		print1.close();

		// ����
		/*
		 * class Object
		 * 	method toString() // PrintWriter�� ��ӹ޾Ƽ� ����� �� �ִ� �޼ҵ��̴�.
		 *
		 * class Writer
		 * 	method write()
		 *
		 * class PrintWriter extends Writer
		 *  method write() // Override
		 */

	}

}
