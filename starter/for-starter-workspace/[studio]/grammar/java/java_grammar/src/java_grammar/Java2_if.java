package java_grammar;

public class Java2_if {

	public static void main(String[] args) {
		// 조건문 IF
		int a = 2;
		int b = 2;

		if(a > b) { // if는 기본적으로 ()안의 조건이 true일때만 실행한다.
			System.out.println(1);
		}

		if(a < b) {
			System.out.println(2);
		}


		// 조건문 IF, ELSE IF, ELSE
		System.out.println("<조건문 기본>");
		if(a > b) {
			System.out.println("a가 b보다 큽니다.");
		} else if(a < b) { // else if : 아니고 ~면
			System.out.println("a가 b보다 작습니다.");
		} else { // else : 아니면~
			System.out.println("a가 b와 같습니다.");
		}

		String c = "Hello Java!";
		if(c.contains("Python")) {
			System.out.println("Python입니다.");
		} else if(c.contains("PHP")) {
			System.out.println("PHP입니다.");
		} else if(c.contains("GO")) {
			System.out.println("GO입니다.");
		} else if(c.contains("Javascript")) {
			System.out.println("Javascript입니다.");
		} else {
			System.out.println("찾는 언어가 없습니다.");
		}

		// 조건문 응용 예시
		System.out.println("<조건문 응용>");
		String id = "javaskill";
		String inputId = args[0];
		String pw = "java123";
		String inputPw = args[1];

		boolean check = (inputId.equals(id) && inputPw.equals(pw)); // || = or, && = and
		if(check) {
			System.out.println("로그인 완료!");
		} else {
			System.out.println("id 또는 pw를 확인해주세요.");
		}


		System.out.println("<eqauls와 ==의 차이>");
		int p1 = 1;
//		System.out.println(p1.equals(1));
//		String p2 = "1";
//		System.out.println(p2.equals("1"));

		String p2 = new String("111");
		System.out.println(p2.equals("1")); // false
		System.out.println(p2.length()); // 3
		System.out.println(p2.contains("1")); // true
	}

}
