package java4_final_concept;

// Overloading vs Overriding
/*
 * 오버로딩(Overloading): 한국어로 '과적화', 상속과 관련없음,
 * 같은 메서드 이름을 가지면서도 매개변수 타입 및 개수를 변화시키고 생성함으로써 여러 상황에 대해 대처가 가능하게 한다.
 *
 * 오버라이딩(Overriding): 상속과 관련 깊음,
 * 부모 클래스를 상속받은 자식 클래스가 부모 메소드와 같은 이름의 메소드를 생성해 내용을 다르게 함으로써
 * 부모와 다르게 활용이 가능하게 한다.
 */

class Calc1{
    public int sum(int v1, int v2){
        return v1+v2;
    }
    // Overloading : sum의 기능을 업그레이드한다. (파라미터 2개 외에 3개 받는 경우도 추가)
    //			어려운 말 : 클래스에 같은 이름의 메소드를 복수로 탑재한다.
    public int sum(int v1, int v2, int v3){
        return v1+v2+v3;
    }
}

class Calc3 extends Calc1{
    public int minus(int v1, int v2){
        return v1-v2;
    }
    // Overriding : sum의 기존의 기능을 재정의한다.
    // 			어려운 말 : 부모 클래스에 있었던 메소드를 자식 클래스에서 재정의(덮어쓰기)하면서 코드 변경 가능
    public int sum(int v1, int v2){
        System.out.println("Overrided by Cal3!");
        return v1+v2;
    }
}

public class java7_extend_over {
    public static void main(String[] args) {
        Calc1 c1 = new Calc1();
        System.out.println(c1.sum(2,1)); // 3
        System.out.println(c1.sum(2,1,1)); // 4 (overloading 덕분에 연산가능)

        Calc3 c3 = new Calc3();
        System.out.println(c3.minus(2,1)); // 1
        System.out.println(c3.sum(2,1)); // 문구! + 3 (overriding 덕분에 연산전에 문구가 추가됨)
    }
}

class Calc2{ // 상속하지 않았으므로, Calc1, Calc3과 관계 없음
    public int sum(int v1, int v2){
        return v1+v2;
    }
    public int minus(int v1, int v2){
        return v1-v2;
    }
}