package java_grammar_novice;

public class Java2_datatype {

	public static void main(String[] args) {
		// ������Ÿ��
		System.out.println(6+1); // Integer ����
		System.out.println(6.1+0.9); // Float �Ǽ�
		System.out.println("6"+1); // String ���ڿ�
		System.out.println('H'); // Char ����
		int a = 1;
		int b = 2;
		System.out.println(a != b); // Boolean �Ҹ� (true, false) // �񱳿����� : < > <= >= == !=
		// ������ ������Ÿ�� : byte 1, short 2, int 4, long 8
		// �Ǽ��� ������Ÿ�� : float 4, double 8
		// ������ operator : + - * /

		// ���ڿ� �����ϱ�
		System.out.println("111".length()); // 3
		System.out.println("Hello \nWorld"); // �ٹٲ�
		System.out.println("Hello \"World\""); // escape

		// Ŭ����.(��Ʈ��.)�޼ҵ� : Ŭ���� �� ������ �ִ� �޼ҵ�, ������
		System.out.println();
		System.out.println(Math.round(3.4));
		System.out.println(Math.PI);
	}

}
