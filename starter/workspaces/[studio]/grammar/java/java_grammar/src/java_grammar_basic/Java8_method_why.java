package java_grammar_basic;

public class Java8_method_why {

	public static double vat = 10.0;
	public static double discount = 20.0;
	public static int price = 15000;

	public static double getVAT(double vat, int price) {
		return price / 100 * vat;
	}

	public static double getDiscount(double discount, int price) {
		double price_one_percent = price / 100;
		discount = price_one_percent * discount;
		return discount;
	}

	public static void main(String[] args) {
		// �޼ҵ带 ����� ���� : ����������(�ߺ��� ����, �ٸ� ���ڰ� ����, ������, ���뼺, ���� ����)�� ��� �����̴�.
		// ���� ���,
		// �������� ���� ���� ����� ���ϱ�
		// ������ ���� ���� ����� ���ϱ�
		// VAT�� �����޾��� ���� ����� ���ϱ�
		// ���... ���� �پ��� ������ 100�� �̻��� ����� ���ؾ��� ��, �ߺ��� ���� �����ϰ� �޼ҵ���� �������� ����� ���� ���� ���̴�.
		double VAT = getVAT(vat, price);
		double discount_amount = getDiscount(discount, price);
		double result_price = price - discount_amount + VAT;
		System.out.println(result_price);
	}


}
