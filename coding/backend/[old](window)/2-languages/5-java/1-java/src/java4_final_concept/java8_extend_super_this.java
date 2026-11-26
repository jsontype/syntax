package java4_final_concept;

/*
 * this와 super
 *
 * 자기자신을 의미하는 this
 * 부모를 의미하는 super
 * 키워드를 통해서 원하는 대상을 정확하게 지정할 수 있다.
 */

class Calculate1{
    public int sum(int v1, int v2){
        return v1+v2;
    }
    // Overloading
    public int sum(int v1, int v2, int v3){
        return this.sum(v1,v2)+v3; // this(자기 자신)의 sum의 결과에 +v3
    }
}

class Calculate3 extends Calculate1{
    public int minus(int v1, int v2){
        return v1-v2;
    }
    // Overriding
    public int sum(int v1, int v2){
        System.out.println("Overrided by Cal3!");
        return super.sum(v1,v2); // super(부모)의 sum의 결과를 도출
    }
}

public class java8_extend_super_this {
    public static void main(String[] args) {
        Calculate1 c1 = new Calculate1();
        System.out.println(c1.sum(2,1)); // 3
        System.out.println(c1.sum(2,1,1)); // 4 (overloading 덕분에 연산가능)

        Calculate3 c3 = new Calculate3();
        System.out.println(c3.minus(2,1)); // 1
        System.out.println(c3.sum(2,1)); // 문구! + 3 (overriding 덕분에 연산전에 문구가 추가됨)
    }
}