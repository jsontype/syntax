package java_grammar_novice;

public class Java3_variables {

	public static void main(String[] args) {
		// ���� : ���ϴ� ��
		int a = 1;
		System.out.println(a);

		double b = 1.1;
		System.out.println(b);

		String c = "Hello World";
		System.out.println(c);

		String name = "Kim";
		System.out.println("Hello, "+name+"! How are you?");

		double VAT = 8.0;
		System.out.println(VAT);

		int price = 15800;
		System.out.println(price + (price / 100 * VAT));

		double discount = 20.0;
		double result_price = price - (price / 100 * discount) + (price / 100 * VAT);
		System.out.println(result_price);

		int number = 1;
		number++; // number = number + 1
		number++;
		number--; // number = number - 1
		number--;
		System.out.println(number);

		// ĳ����(Casting) : ������ ������Ÿ���� ����
		int d = 1;
		double d1 = (double) d;
		double d2 = 1.1;
		System.out.println(d1 + d2);

		// ���ڿ� �� ���� ĳ���� : ������Ÿ��Ŭ����.valueOf() �޼ҵ带 ����Ѵ�.
		int e = 1;
		String e1 = String.valueOf(e);
		System.out.println(e1+1);

		String f = "1";
		double f1 = Double.valueOf(f);
		double f2 = 1.1;
		System.out.println(f1 + f2);

		// �⺻�� ���� : ���� ���꿡 ���Ǵ� ���� ���� �⺻�� ����
		// boolean, char, byte, short, int, long, float, double

		// ������ ���� : ������ Ÿ������ Ŭ������ �̸��� ���
		// String Ŭ������ ppang ��ü�� �����ڽ��ϴ�. �׷��� ppang�� length()�� replace() �޼ҵ带 ����� �� �־��.
		String ppang = "�ȳ��ϼ���!";
		System.out.println(ppang.length()); // 6
		System.out.println(ppang.replace("�ȳ�", "�ǰ�"));


	}

}
