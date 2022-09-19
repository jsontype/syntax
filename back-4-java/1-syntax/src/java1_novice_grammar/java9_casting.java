package java1_novice_grammar;

public class java9_casting {
	// CASTING
	public static void main(String[] args) {

		// int and double
		int a = 1;
		double a2 = 1.1;

		// 1 to double
		double b = 1;
		double b2 = (double) 1;

		System.out.println(b); // 1.0
		System.out.println(b2); // 1.0

		// int c = 1.1; -> This is error!

		// 1.1 to int
		double d = 1.1;
		int e = (int) 1.1;
		System.out.println(e); // 1

		// 1 to String
		String f = Integer.toString(1); // Int를 String으로 바꿀때는 .toString() 명령어가 필요
		System.out.println(f.getClass()); // .getClass()는 데이터타입이 뭔지가 나오는 명령어
	}

}