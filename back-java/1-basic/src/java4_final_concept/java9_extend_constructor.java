package java4_final_concept;

class Calculator1 {
    int v1,v2;
    Calculator1(int v1, int v2){ // 생성자
        System.out.println("Calculator1 init!!"); // calculator1의 작업
        this.v1 = v1;
        this.v2 = v2;
    }
    public int sum(){return this.v1+v2;}
}

class Calculator3 extends Calculator1 {
    Calculator3(int v1, int v2) { // 자식생성자 : 자식은 아래와 같이 해서 반드시 부모생성자를 사용한다.
        super(v1, v2); // 부모 클래스의 생성자를 실행시킨다는 뜻
        System.out.println("Calculator3 init!!"); // calculator3만의 작업 추가
    }
    public int minus(){return this.v1-v2;}
}
public class java9_extend_constructor {
    public static void main(String[] args) {
        Calculator1 c1 = new Calculator1(4,1);
        Calculator3 c3 = new Calculator3(2,1);
        System.out.println(c1.sum()); // 5
        System.out.println(c3.sum()); // 3
        System.out.println(c3.minus()); // 1
    }
}