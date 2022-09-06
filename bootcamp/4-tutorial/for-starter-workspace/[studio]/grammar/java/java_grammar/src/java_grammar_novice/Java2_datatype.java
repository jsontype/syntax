package java_grammar_novice;

public class Java2_datatype {

	public static void main(String[] args) {
		// 데이터타입
		System.out.println(6+1); // Integer 정수
		System.out.println(6.1+0.9); // Float 실수
		System.out.println("6"+1); // String 문자열
		System.out.println('H'); // Char 문자
		int a = 1;
		int b = 2;
		System.out.println(a != b); // Boolean 불린 (true, false) // 비교연산자 : < > <= >= == !=
		// 정수형 데이터타입 : byte 1, short 2, int 4, long 8
		// 실수형 데이터타입 : float 4, double 8
		// 연산자 operator : + - * /

		// 문자열 조작하기
		System.out.println("111".length()); // 3
		System.out.println("Hello \nWorld"); // 줄바꿈
		System.out.println("Hello \"World\""); // escape

		// 클래스.(스트림.)메소드 : 클래스 ⊃ 관련이 있는 메소드, 변수들
		System.out.println();
		System.out.println(Math.round(3.4));
		System.out.println(Math.PI);
	}

}
