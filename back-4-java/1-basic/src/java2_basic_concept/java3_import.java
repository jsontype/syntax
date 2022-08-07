package java2_basic_concept;

import java.io.FileNotFoundException;
import java.io.PrintWriter; // PrintWriter라는 클래스를 쓰겠다. Math와는 사용법이 많이 다르다.
public class java3_import {

	public static void main(String[] args) throws FileNotFoundException {

		// 상속
		// 클래스의 상속관계 보기 : PrintWriter를 우클릭 후 F4 또는 형계층(카타카이소오) 열기 클릭
		// 					Writer를 상속하고 Writer는 Object를 상속한다는 것을 볼 수 있다.

		PrintWriter p1 = new PrintWriter("result1.txt");
		p1.write("Hello 1");

		PrintWriter p2 = new PrintWriter("result2.txt");
		p2.write("Hello 2");

		// PrintWriter의 인스턴스 p1과 p2가, PrintWriter안에 없는 toString() 메소드를 쓸 수 있는 이유
		// - 할아버지인 Object부터 PrintWriter까지 toString을 상속해내려줬기 때문이다.
		System.out.println(p1.toString());
		p2.toString();

		// Override
		// - 아래의 경우 부모 Writer 클래스의 write를 쓴게 아니라, 자식인 PrintWriter에서,
		// 	한번 더 write를 입력해 덮어씌우기를 했다. 이를 override라고 하며,
		// 	이렇게 하는 이유는 부모의 write 클래스가 마음에 안들어서, 이를 자신의 입맛대로 "변경"하기 위해서이다.
		p2.write("\nHello 3");
		p1.close();
		p2.close();

		// 정리
		/* class Object
		 * 		method toString (상속룰에 따라서 PrintWriter가 toString 매소드를 쓸 수 있다.)
		 * 						(이것은 Object의 메소드 toString을 PrintWriter가 extend했다고 한다.)
		 *
		 * class Writer extends Object
		 * 		method write
		 *
		 * class PrintWriter extends Writer
		 * 		method write (이것은 Writer의 매소드 write를 override했다고 한다.)
		 */

	}

}