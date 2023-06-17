package java3_advanced_grammer;

public class java1_boolean {

    public static void main(String[] args) {

    	// 데이터 타입으로서의 Boolean
        System.out.println("데이터 타입으로서의 Boolean");
    	System.out.println("One"); // 데이터타입 String
        System.out.println(1); // 데이터타입 int

        System.out.println(true); // 데이터타입 Boolean
        System.out.println(false); // 데이터타입 Boolean

        String var1 = "Hello world";
        // String true = "Hello world"; true, false는 약속된 reserved word므로 변수명으로 사용불가





        // 비교연산자와 같이 알아보는 Boolean
        System.out.println("비교연산자와 같이 알아보는 Boolean");
        System.out.println(1 > 1); // false
        System.out.println(1 == 1); // true
        System.out.println(1 < 1);
        System.out.println(1 >= 1);



        // 메소드와 같이 알아보는 Boolean
        System.out.println("contains 메소드로 알아보는 Boolean");
        System.out.println(var1.contains("world")); // return true;
        System.out.println(var1.contains("Yang")); // return false;

    }

}