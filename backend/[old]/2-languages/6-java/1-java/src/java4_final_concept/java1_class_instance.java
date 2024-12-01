package java4_final_concept;

// 객체지향프로그래밍
/* 많아진 변수와 메소드 때문에 고통스럽나요?
 * 이 수업은 서로 연관된 변수와 메소드를 모아서 이름을 붙인 객체를 다루는 수업입니다.
 * 객체를 이용해서 코드의 구조를 세우는 프로그래밍 방법론은 객체지향 프로그래밍이라고 합니다.
 * 이 수업을 통해서 객체 지향이 무엇인지도 파악할 수 있을 것입니다.
 */

import java.io.FileWriter;
import java.io.IOException;

public class java1_class_instance {

	public static void main(String[] args) throws IOException {

		// 남의 클래스 & 남의 인스턴스
		// - 나의 클래스, 나의 인스턴스를 만들기 전에 남의 클래스, 남의 인스턴스를 사용하는 법을 먼저 알아봅시다.
		// 남의 class : System, Math, FileWriter
		// 남의 instance : f1, f2

		// 아래는, 클래스 채로 사용한다.
		System.out.println(Math.PI); // Math 클래스 안에 있는 변수인 (PI)
		System.out.println(Math.round(1.8)); // Math 클래스 안에 있는 메소드인 (round(파라미터))
		System.out.println(Math.floor(1.8));
		System.out.println(Math.ceil(1.8));
		// syso 또는 sout + ctrl + space : System이 클래스이고 .이후 것들은 System의 메소드들이다.
		// .out의 메소드 안에 있는 println이라는 메소드를 사용 하겠다는 말이다.

		// 아래는, 위의 Math나 System과 달리, 긴 맥락을 갖고 실행되고 있기 때문에 복제해서 인스턴스로 사용한다.
		FileWriter f1 = new FileWriter("data1.txt");
		f1.write("Hello");
		f1.write(" Java");

		FileWriter f2 = new FileWriter("data2.txt");
		f2.write("Hello");
		f2.write(" Java2");
		f2.close();

		f1.write("!!!");
		f1.close();

		/* class란?
		 * class는 는 비슷한 맥락의 method와 variable을 정리해서 묶어놓은 것이다.
		 * class에 .을 찍어서 해당 class가 가지고 있는 method를 사용할 수 있다.
		 * 그런데 이를 여러번 반복해야한다면 매번 특정한 조건을 반복해서 적어야 할지도 모른다.
		 * 그래서 필요한 것이 instance!
		 * instance는 기본적으로 class의 복제본인데, 추가로 내가 설정해준 설정값을 갖는다.
		 * instance를 선언하는 것은, datatype이 해당 class인 변수를 선언하는 것과 같다.
		 */
	}
}