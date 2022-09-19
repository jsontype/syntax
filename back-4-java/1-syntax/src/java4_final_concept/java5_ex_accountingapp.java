package java4_final_concept;

// 클래스와 인스턴스클래스의 활용

class Accounting{
    public double valueOfSupply;
    public static double vatRate = 0.1;
    // vatRate변수에 static 쓰는 이유 : 자원절약을 위해 고정값인 static으로 해둔다.
	// 또, 얘만 바꾸면 Accounting 클래스의 사용자인 인터페이스들도 한번에 VAT률이 다 바뀌므로 유지보수 편리!
    public Accounting(double valueOfSupply) {
        this.valueOfSupply = valueOfSupply;
    }
    public double getVAT() {
        return valueOfSupply * vatRate;
    }
    public double getTotal() {
        return valueOfSupply + getVAT();
    }
}
public class java5_ex_accountingapp {
    public static void main(String[] args) {
        Accounting a1 = new Accounting(10000.0);

        Accounting a2 = new Accounting(20000.0);

        System.out.println("Value of supply : " + a1.valueOfSupply);
        System.out.println("Value of supply : " + a2.valueOfSupply);

        System.out.println("VAT : " + a1.getVAT());
        System.out.println("VAT : " + a2.getVAT());

        System.out.println("Total : " + a1.getTotal());
        System.out.println("Total : " + a2.getTotal());

    }
}
