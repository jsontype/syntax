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
		// 메소드를 만드는 이유 : 유지보수성(중복의 제거, 다른 인자값 적용, 가독성, 재사용성, 수정 용이)의 향상 때문이다.
		// 예를 들어,
		// 할인율이 있을 때의 결과값 구하기
		// 할인이 없을 때의 결과값 구하기
		// VAT를 면제받았을 때의 결과값 구하기
		// 등등... 각기 다양한 형태의 100개 이상의 계산을 구해야할 때, 중복된 것을 제거하고 메소드들의 조합으로 만드는 것이 편할 것이다.
		double VAT = getVAT(vat, price);
		double discount_amount = getDiscount(discount, price);
		double result_price = price - discount_amount + VAT;
		System.out.println(result_price);
	}


}
