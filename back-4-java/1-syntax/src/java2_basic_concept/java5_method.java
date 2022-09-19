package java2_basic_concept;

public class java5_method {

	// Method 만드는 법과 Method 입력값(argument, parameter)

	public static void printTwoTimesA() {
		System.out.println("-");
        System.out.println("a");
        System.out.println("a");
	}

    public static void main(String[] args) {

    	// printTwoTimesA라는 매소드를 만드는 법
    	// 1. syso 세줄로 이뤄진 아래의 코드를 타이핑
    	// 2. 코드 블럭지정 후 우클릭 - 리팩터(리화쿠타린구) - 메소드 추출 클릭
    	// 3. 메소드명 입력하고 public 클릭 후 ok 클릭

        // 100000000
        printTwoTimesA();
        // 100000000
    	printTwoTimesA();
        // 100000000
        printTwoTimesA();

        // parameter 입력하는 법
        // 1. 아래의 printTwoTimes 메소드처럼, 파라미터를 설정한 매소드를 만든다.
        // 2. 바로 아래줄 코드처럼, 인자값을 설정한 매소드 호출 부분을 불러온다.

        // 인자, argument(args) : 함수 안으로 주입한 구체적인 값을 인자라고 부른다.
		printTwoTimes("a", "+");
		// 100000000
		printTwoTimes("a", "*");
		// 100000000
		printTwoTimes("a", "&");
		printTwoTimes("b", "!");

    }

    // 매개변수,parameter : 위의 저 메소드 바깥에서 주입한 값을, 메소드 안으로 흘려보내주는 매개자
	public static void printTwoTimes(String text, String delimiter) {
	System.out.println(delimiter);
	System.out.println(text);
	System.out.println(text);
	}

}