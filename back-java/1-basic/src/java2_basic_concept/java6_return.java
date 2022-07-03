package java2_basic_concept;

public class java6_return {

	// void가 아닐때 Method의 출력값 (Return치)
	// 1. void가 아닐 때 Method는 그 Return값이 존재한다.(void이면 Return값이 없다는 뜻이다.)
	// 2. Return은 그 Method를 종료시키는 역할을 한다.(뒤에 아무리 많은 것이 붙어있어도 거기서 끝난다.)
	// 3. Return의 뒤에 있는 값은 Return값이라 부르며, 그 해당 Method의 출력값이 된다.
	// 4. Method 안에 담긴 static뒤의 데이터타입은 그 Method의 Return값의 데이터타입을 정한 것이다.

    public static String a() {
        // ...
        return "a";
    }

    public static int one() {
        return 1;
        //...
    }

    public static void main(String[] args) {

        System.out.println(a());
        System.out.println(one());

    }

}