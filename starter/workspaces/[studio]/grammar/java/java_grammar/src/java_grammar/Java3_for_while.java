package java_grammar;

public class Java3_for_while {

	public static void main(String[] args) {
		// 반복문 For : for(인덱스의 시작점; 조건; 한번 실행후의 처리) { 조건이 충족되는 동안 반복수행할 작업 코드 }
		System.out.println("<반복문 For>");
		for(int i = 0; i < 3; i++) {
			System.out.println("While문 실행됐습니다." + (i + 1));
		}




		// 반복문 While : while(조건) { 조건이 충족되는 동안 반복수행할 작업 코드 }
		System.out.println("<반복문 While>");
		int i = 0;
		while(i < 3) {
			System.out.println("While문 실행됐습니다." + (i + 1));
			i++;
		}

	}

}
