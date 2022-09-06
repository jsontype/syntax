package java_grammar_basic;

import java.io.FileNotFoundException;
import java.io.PrintWriter;

public class Java2_hierarchy {

	public static void main(String[] args) throws FileNotFoundException {

		PrintWriter print1 = new PrintWriter("result.txt"); // 여기서 두번째 PrintWriter 메소드는, Constructor(생성자)이다.

		// 상속 Extend
		// PrintWriter의 인스턴스인 print1이 PrintWriter 안에 없는 toString() 메소드를 쓸 수 있는 이유
		// = 할아버지인 Object로부터 PrintWriter까지 toString을 상속받았기 때문이다.
		System.out.println(print1.toString());

		// Override
		// 아래의 경우, Writer 클래스의 write() 메소드를 쓴 게 아니라, 자식인 PrintWriter 클래스의 write() 메소드를 쓴 것이다.
		// 자식 클래스가 한번 더 write 메소드를 입력하게 되면 부모의 동일명의 write 메소드를 덮어씌우기 한다. 이를 Override라고 한다.
		print1.write("Hello Class!");
		print1.close();

		// 정리
		/*
		 * class Object
		 * 	method toString() // PrintWriter가 상속받아서 사용할 수 있는 메소드이다.
		 *
		 * class Writer
		 * 	method write()
		 *
		 * class PrintWriter extends Writer
		 *  method write() // Override
		 */

	}

}
