package java2_basic_concept;

import java.io.FileNotFoundException;
import java.io.PrintWriter; // PrintWriter라는 클래스를 쓰겠다. Math와는 사용법이 많이 다르다.
public class java2_instance {

	public static void main(String[] args) throws FileNotFoundException {

		// 인스턴스 만드는 법
		// 1. PrintWriter("내가 저장하고 싶은 파일명") 입력
		// 2. 앞에 new를 붙여서 PrintWriter의 복제본, 즉 아바타 같은 것을 만든다.
		// 3. 그 복제본을 p1이라고 이름붙인다.
		// 4. p1이라는 복제본은 PrintWriter라는 데이터 타입을 가진다.
		// 	    이 의미는 p1은 반드시 PrintWriter라는 클래스의 인스턴스로서만 작용한다는 뜻이다.
		// 5. java.io에서 PrintWriter의 패키지를 가져온다.
		// import java.io.PrintWriter
		// 6. 파일이 없는 경우 등 예외처리를 위해서 에러아이콘 클릭후 해결방안으로 "throw 선언의 추가"을 클릭

		PrintWriter p1 = new PrintWriter("result1.txt");

		// 인스턴스 사용
		// 1. 다음줄로 넘어가서, p1이라는 인스턴스에서
		// 2. write를 꺼내고
		// 3. "Hello 1"을 기록 후
		// 4. close로 파일을 닫는다. (해당 파일을 계속 붙잡고 있지 않도록 해서 남도 수정할 수 있도록 한다)
		// * 해당 애플리케이션 실행 후에는 트리뷰 F5를 해야 파일 생성 확인 가능

		p1.write("Hello 1");
		p1.close();

		PrintWriter p2 = new PrintWriter("result2.txt");
		p2.write("Hello 2");
		p2.close();

		// 인스턴스 사용 이유
		/* Math 클래스는 Math.PI, Math.Floor(1.6) 이런식으로 썼는데,
		 * PrintWriter 클래스는 인스턴스라는 "복제본"을 만들어 쓴다. 왜 굳이 그렇게 쓸까?
		 * 만약 인스턴스를 쓰지 않는다면 아래와 같이 쓴다고 상정해보자.

		//		PrintWriter.write("result1.txt", "Hello 1");
		//		PrintWriter.write("result2.txt", "Hello 2");
		//		PrintWriter.write("result1.txt", "Hello 1");
		//		PrintWriter.write("result2.txt", "Hello 2");
		//		PrintWriter.write("result1.txt", "Hello 1");
		//		PrintWriter.write("result2.txt", "Hello 2");
		//		PrintWriter.write("result1.txt", "Hello 1");
		//		PrintWriter.write("result2.txt", "Hello 2");
		//		PrintWriter.write("result1.txt", "Hello 1");
		//		PrintWriter.write("result2.txt", "Hello 2");
		//		PrintWriter.write("result1.txt", "Hello 1");
		//		PrintWriter.write("result2.txt", "Hello 2");
		//		PrintWriter.write("result1.txt", "Hello 1");
		//		PrintWriter.write("result2.txt", "Hello 2");

		 * 위의 방식은 write를 할 때마다 어떤 파일을 수정할 지를 매번 지정하고 있다.
		 * 이는 상당히 비효율적인 느낌이 든다.
		 * 1. 인스턴스를 쓰면, 그냥 p1.write("Hello 1");는 p2로만 바꾸면 result2.txt파일로 바뀌므로,
		 * 사용하기가 매우 편해진다.
		 * 2. 인스턴스를 쓰면, write를 모두가 돌려쓰는 경우보다, 복제본 p1, p2는 따로 작동하기 때문에,
		 * 내부상태가 병렬적으로 바뀌어 속도가 빨라지고 시스템 과부하가 덜 걸린다.
		 * 3. 인스턴스를 쓰면, 1회용작업이 아니므로, (Math.PI 등은 모두 1회용작업이다)
		 * 이후 result1.txt 파일작업을 하는데 있어서 여러가지 후속작업을 추가하여 사용할 수 있다.
		 * 동시에 여러개의 파일을 작업하거나 하는 경우도 만들 수 있다.
		 * 즉, 1회용이 아니라 긴 맥락의 작업을 꼬리에 꼬리를 물고 해야하는 경우에는,
		 * 클래스를 복제한 인스턴스를 만들어서,
		 * 그것을 그대로 사용할 수 있도록 사용자에게 제공하는 것이 더 효율적이기 때문에,
		 * 그에 맞춰서 코드를 제작하게 되는 것이다.
		 * 4. Math와 PrintWriter의 차이점은 Constructor(생성자)의 유무이다.
		 * docs.oracle.com/javase/7/docs/api/에서 (이하 api문서라고 쓰겠음)
		 * PrintWriter를 찾아보면 Constructor가 있고, Math를 찾아보면 Constructor가 없다.
		 * Math같은 애들은 1회용이다.
		 * 반면 PrintWriter의 경우는,
		 * Constructor를 이용해서 인스턴스를 만드는 것이 허용되어 있고,
		 * api문서에서 검색을 하면 어떤 Constructor들이 가능한지 나와 있는데,
		 * 위 파일에서는
		 * PrintWriter(String fileName)의 생성자를 사용한 것이 된다.
		 * api문서에서 각 생성자를 클릭시
		 * 어떻게 써야하는지, 쓰는 과정에서 생길 수 있는 오류는 어떤 것인지 등을 참고 가능하다.
		 */

		// 정리
		// PrintWriter p1 = new PrintWriter("result1.txt"); 에서는,
		// 1. new 뒤의 부분이 Constructor가 되고,
		// 2. Contructor 앞에 new를 붙이면, 걔가 복제되서 Instance(P1)가 되고,
		// 3. 그 Instance(p1)에 어떤 값이 올 수 있느냐를 규제하기 위해서 데이터타입을 적는 앞에다가
		//   클래스의 이름 (PrintWriter)을 적는다.
	}

}