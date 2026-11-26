package java4_final_concept;

// 상속1. 기능의 계승과 발전

class Cal1{
    public int sum(int v1, int v2){
        return v1+v2;
    }
}
class Cal3 extends Cal1{ // 계승 (sum 기능 상속)
    public int minus(int v1, int v2){ // 발전 (minus 기능 추가)
        return v1-v2;
    }
}
public class java6_extend {
    public static void main(String[] args) {
        Cal1 c1 = new Cal1();
        System.out.println(c1.sum(2,1)); // 3

        Cal3 c3 = new Cal3();
        System.out.println(c3.sum(2,1)); // 3
        System.out.println(c3.minus(2,1)); // 1
    }
}