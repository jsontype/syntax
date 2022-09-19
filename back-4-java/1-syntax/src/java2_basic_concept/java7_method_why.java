package java2_basic_concept;

public class java7_method_why {

	// Method를 활용하면 무엇이 좋아질까?
	// 1. 가독성 : 획기적 향상
	// 2. 재사용성 : 한번 작성한 코드는 매소드로 호출만 하면 됨
	// 3. 수정 용이 : 세율 변경시 0.08~0.1 등등 언제든 변경 가능
	// 4. 유지보수성(2+3번) : 매소드의 본문 내용을 바꾸면 해당 메소드와 연결된 모든 다른 메소드에 바로 적용됨.

	// 클래스는 관련된 변수와 메소드의 묶음이다. 아래 코드를 보면서 이해해보자.

    // 공급가액 = 클래스안의 변수
    public static double valueOfSupply = 10000.0;
    // 부가가치세율 = 클래스안의 변수
    public static double vatRate = 0.1;
    // 세금계산식 = 클래스안의 메소드
    public static double getVAT() {
        return valueOfSupply * vatRate;
    }
    // ★ 전체 금액 계산식 = 클래스안의 메소드 : 이 부분이 핵심. 가독성이 엄청 향상!
    public static double getTotal() {
        return valueOfSupply + getVAT();
    }

    // 실제 실행 : 자바는 main 클래스가 있으면 별도의 조건 충족없이 바로 실행한다는 규칙이 있다.
    public static void main(String[] args) {
        System.out.println("Value of supply : " + valueOfSupply);
        System.out.println("VAT : " + getVAT());
        System.out.println("Total : " + getTotal());
    }

}