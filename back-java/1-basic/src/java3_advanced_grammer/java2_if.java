package java3_advanced_grammer;

public class java2_if {

    public static void main(String[] args) {

    	// 조건문 기본
    	System.out.println("<조건문 기본>");
        System.out.println("a");
        if(false) { // if는 기본적으로 안에 있는 코드를 true면 실행하고 false면 실행하지 않는다.
            System.out.println(1);
        } else if(false) {
            System.out.println(2);
        } else if(true) {
            System.out.println(3);
        } else { // if, else if들의 경우가 모두 false인 경우 발동
            System.out.println(4);
        }
        System.out.println("b");





        // 조건문 응용
    	System.out.println("<조건문 응용>");
        String id = "Yang"; // True으로도 테스트, False로도 테스트해볼 것
        String inputId = args[0]; // 실행구성 들어가서 설정한 id로 argument 설정할 것

        String pass1 = "1111";
        String pass2 = "2222";
        String inputPass = args[1]; // 실행구성 들어가서 설정한 pass로 argument 설정할 것

        System.out.println("Hi.");

        //if(inputId == id) {
        boolean isRightPass = (inputPass.equals(pass1) || inputPass.equals(pass2));
        if(inputId.equals(id) && isRightPass) {
        	System.out.println("Master!");
        } else {
            System.out.println("Who are you?");
        }
        // 그런데, inputId.equals(id) 대신 inputId == id 를 쓰면 false의 결과가 나온다.
        // inputId값은 args[] 배열로, 원시데이터타입이 아니기 때문이다.
        // 무슨 말인지 아래를 보고 이해해보자.




        System.out.println("<==와 equals의 차이>");
        // 주의 : String id = "Yang" String pass1 ="1111"는 원시데이터이다.
        // 뭔가를 입력하는 경우가 단순 String, int 입력등 원시데이터타입일 때는 ==를 써도 참이 되지만,
        // args[1]이나 new string "java1"등 Input의 형태가 입력되고 원시데이터타입이 아닐 때는 거짓이 되므로,
        // == 가 아닌 equals를 써야 한다.
        int p1 = 1;
        int p2 = 1;
        System.out.println(p1 == p2); // true (원시데이터타입 비교)
        String o1 = new String("java"); // java라는 값이 담겨있는 새로운 객체를 만들었다.
        String o2 = new String("java"); // java라는 값이 담겨있는 또다른 객체를 만들었다.
        System.out.println(o1 == o2); // false (원시데이터타입 아니고 객체임. 두 객체는 위치가 다름)
        System.out.println(o1.equals(o2)); // true (내용 비교)






    }

}
