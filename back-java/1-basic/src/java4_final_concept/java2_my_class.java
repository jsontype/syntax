package java4_final_concept;

// 내 클래스 (변수, 메소드 지정)

class java2_print{ // 내 클래스
	public static String delimiter = "----"; // 내 클래스 안의 변수를 초기화하면서 데이터타입 지정
	public static void A() { // 내 클래스 안의 메소드 지정
							// (static의 경우 인스턴스가 없음, void의 경우 return값이 없음)
		System.out.println(delimiter);
		System.out.println("A");
	}
	public static void B() {
		System.out.println(delimiter);
		System.out.println("B");
	}
}

public class java2_my_class {
	public static void main(String[] args) {
		java2_print.A();
		java2_print.B();

		java2_print.delimiter = "++++"; // 내 클래스 안의 변수값을 새로 지정 가능
										// 여기서 바뀐 delimiter는 초기화되지 않고 계속 이어짐.
		java2_print.A();
		java2_print.B();
	}
}