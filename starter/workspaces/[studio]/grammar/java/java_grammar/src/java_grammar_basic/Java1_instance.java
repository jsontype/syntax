package java_grammar_basic;

import java.io.FileNotFoundException;
import java.io.PrintWriter; // PrintWriter 클래스를 임포트한다.

public class Java1_instance {

	public static void main(String[] args) throws FileNotFoundException {
		// 클래스, 객체, 인스턴스
		// 클래스 : 객체를 만들어내기 위한 설계도, 틀
		// 객체 : 클래스에 선언된 모양 그대로 생성된 실체. 클래스를 데이터타입으로 만들어진 변수는 객체 변수이다. = 소프트웨어상에서의 객체를 인스턴스라 한다.

		// 객체 변수
		String a = "Hello World";
		System.out.println(a.length()); // 11
		System.out.println(a.replace("World", "Java")); // Hello Java

		PrintWriter print1 = new PrintWriter("result.txt"); // 여기서 두번째 PrintWriter 메소드는, Constructor(생성자)이다.
		print1.write("Hello Class!");
		print1.close();

		// OOP(Object Oriented Programming) 관점
	}

}
