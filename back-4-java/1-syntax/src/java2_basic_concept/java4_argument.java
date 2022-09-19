package java2_basic_concept;

public class java4_argument {

	// Argument(args)
	// String[] : 문자열로 된 배열이란 뜻이다.
	// args : 입력값을 받는 부분으로 파라미터가 된다.
	// 1. 상단 play 버튼을 클릭할 때마다, 내가 실행하는 클래스가 리스트에 실리는 것을 확인할 수 있다.
	// 2. play 버튼을 누를 때 나오는 드롭다운에서, 실행의 구성(configuration)을 클릭한다.
	// 3. java4 (1)을 클릭하면, 해당 패키지와 클래스가 java2.java4 라고 뜨는 것을 확인할 수 있다.
	// 4. 프로그램 파라미터(인수) 란에 "Hello World" "I am Yang" 을 입력한다.
	// 5. 맨 위에 실행에 대한 이름을 java4 (1) - Hello World라고 이름짓는다.
	// 6. 적용후 실행한다.
	// 결과1 : 결과값으로 Hello World, I am Yang이 각각 뜨는 것을 확인할 수 있다.
	// 결과2 : 추후 실행리스트에서 java4 (1) - Hello World란 이름으로 앱 실행항목이 뜨는 걸 확인할 수 있다.

	// 결론 : args는 단지 파라미터를 받는 부분이고, static void는 리턴값없이 단순 실행한다는 의미다.

	// 실행 short cut key : alt shift x 후 1초 뒤에 j를 눌러 실행한다. (스프링부트의 경우 j대신 b)

    public static void main(String[] args) {

    	String text1 = args[0];
    	String text2 = args[1];

        System.out.println(text1);
        System.out.println(text2);

    }

}