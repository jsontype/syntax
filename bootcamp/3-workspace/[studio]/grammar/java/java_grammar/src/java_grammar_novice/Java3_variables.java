package java_grammar_novice;

public class Java3_variables {

	public static void main(String[] args) {
		// 변수 : 변하는 수
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

		// 캐스팅(Casting) : 변수의 데이터타입을 변경
		int d = 1;
		double d1 = (double) d;
		double d2 = 1.1;
		System.out.println(d1 + d2);

		// 문자열 ↔ 숫자 캐스팅 : 데이터타입클래스.valueOf() 메소드를 사용한다.
		int e = 1;
		String e1 = String.valueOf(e);
		System.out.println(e1+1);

		String f = "1";
		double f1 = Double.valueOf(f);
		double f2 = 1.1;
		System.out.println(f1 + f2);

		// 기본형 변수 : 실제 연산에 사용되는 것은 전부 기본형 변수
		// boolean, char, byte, short, int, long, float, double

		// 참조형 변수 : 변수의 타입으로 클래스의 이름을 사용
		// String 클래스의 ppang 객체를 만들어보겠습니다. 그러면 ppang이 length()와 replace() 메소드를 사용할 수 있어요.
		String ppang = "안녕하세요!";
		System.out.println(ppang.length()); // 6
		System.out.println(ppang.replace("안녕", "건강"));


	}

}
