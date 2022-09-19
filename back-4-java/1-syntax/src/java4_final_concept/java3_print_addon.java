package java4_final_concept;

/* static vs non-static(instance)의 정의상의 차이점
 * 1. static은 '정적'의 의미를 가지며 이것이 붙는다면 그 필드나 메서드는 클래스 형식이라는 의미
 * 안 붙는다면 그 필드 및 메서드는 인스턴스 형식이라는 의미이다.
 * 2. 클래스 형식(static)이라면 C언어의 Call by reference 처럼
 * 인스턴스를 생성한다고 해도 원래 값은 class 내의 값 하나 뿐이며 인스턴스는 이를 포인터처럼 단순히 가리키게 된다.
 * 즉 같은 메모리에 값을 가리키며,이 때문에 인스턴스 내이든 클래스 내이든 그 값이 변한다면
 * 이것은 「다른 객체에도 영향을 끼치게 된다.」
 * 3. 반대로 인스턴스 형식(non-static)이라면 call by value로,
 * 다른 인스턴스 객체 생성 시 아예 다른 메모리에 값이 저장 및 가리키게 되며
 * 이렇게 되면 그 필드 및 메서드의 변화가 일어날 시 「다른 객체에 영향을 끼치지 않게 된다.」
 * ★ 한마디 요약 : java2는 구분자를 생성하면 그 뒤로 계속 바뀐다.(23번째줄)
 * 				java3는 구분자가 달라도 새 인스턴스 만들시 초기화 되어, 서로 영향 안받는다.(13번째줄)
 */

/* static vs non-static(instance)의 사용상의 차이점
 * 1. 사용자와 다른 클래스 파일로 지정해야한다.
 * 2. 메소드와 변수에 static을 붙이지 않는다.
 * 3. static 형식을 클래스 형식이라고 부르고, non-static 형식을 인스턴스 형식이라고 부른다.
 */

class java3_print_addon {
//	public String delimiter = ""; // 해당 변수를 초기화하면서(=만들면서) 데이터타입 지정
	public String delimiter = "----"; // 해당 변수를 초기화하면서(=만들면서) 데이터타입 지정

	public void A() {
		System.out.println(delimiter);
		System.out.println("A");
	}

	public void B() {
		System.out.println(delimiter);
		System.out.println("B");
	}
}