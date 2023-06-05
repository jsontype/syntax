package java2_basic_concept;

class Print {

	// Static : Class method (Print.c("$")) - 인스턴스는 허용하지 않음
	// No Static : Instance method (t1.a()) - 인스턴스 즉 복제본으로 만들어 여러 변수의 처리를 동시처리로 한 다음 사용

	public String delimiter;

    public void a() { // public void a(String delimiter) { 에서 업그레이드 됨
    	// ★ 어려움 주의! this.는 우리가 t1.delimiter(38번째줄)에서 지정한 변수의 값을 말한다.
    	System.out.println(this.delimiter);
        System.out.println("a");
        System.out.println("a");
    }
    public void b() { // public void b(String delimiter) { 에서 업그레이드 됨
        System.out.println(this.delimiter);
        System.out.println("b");
        System.out.println("b");

    }
    public static void c(String delimiter) { // 예전버전
        System.out.println(delimiter);
        System.out.println("c");
        System.out.println("c");
    }
}
public class java8_method_static {

	// Static Method :

    public static void main(String[] args) {
//      Print.a("-");
//      Print.b("-"); ★ 어려움 주의!
//						해당 줄이 다른 코드 (a, c 등)과 같은 구분자 ("-")를 공유하고 있을 경우에,
//						이렇게 일일이 "-"를 입력하기보다는, 아래의 경우가 편하다. (= 인스턴스를 쓰는 이유!)
//						아직 이해가 안간다면 구글에 "인스턴스를 쓰는 이유"를 검색해서 좀 더 살펴보자.

        // instance
        Print t1 = new Print(); // t1이라는 분신(인스턴스)을 만든다.

        // ★ 어려움 주의!
        // 		아래와 같이 t1의 delimiter라는 변수값으로 "-"를 지정하게 하려면,
        // 		위의 Print 클래스에서 "public String delimiter;"(4번째줄) 라고
        //	 	변수명과 그의 데이터타입을 지정해줘야한다.
        t1.delimiter = "-";

        // a,b 매소드는 분신인 t1의 소속으로서 진행되는 메소드가 된다. 그리고 그들은 t1의 delimiter 변수의 "값"을 공유하게 된다.
        t1.a();
        t1.b();

        // Print.a()는 동작하지 않는다.동작하려면 static으로 바꿔야한다.
        // ★ 어려움 주의! 그렇다면 static은 무슨 뜻인가? : 인스턴스로 작동하지 않는다는 뜻.
        Print.c("$"); // c는 static이므로 Class method이며 이 코드로도 작동하게 된다.

//      Print.a("*");
//      Print.b("*");

        Print t2 = new Print(); // t2이라는 분신(인스턴스)을 만들었다.
        t2.delimiter = "*";
        t2.a();
        t2.b();

        Print.c("/");
    }


}