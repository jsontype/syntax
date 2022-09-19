package java4_final_concept;

// Static과 Static 아닌 것의 차이

public class java3_my_instance {
	public static void main(String[] args) {
		java3_print_addon p1 = new java3_print_addon(); // 같은 패키지 안에 있는 클래스 java3_print를 복제
		p1.delimiter = "////";

		java3_print_addon p2 = new java3_print_addon(); // 같은 패키지 안에 있는 클래스 java3_print를 복제
		p2.delimiter = "****";

		java3_print_addon p3 = new java3_print_addon(); // delimiter는 초기화됨.

		p1.A();
		p1.B();
		p2.A();
		p2.B();
		p3.A();
	}
}