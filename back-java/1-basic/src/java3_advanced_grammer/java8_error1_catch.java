package java3_advanced_grammer;

// 예외(Exception) : try, catch 문을 사용해 에러를 처리하는데 사용되는 자바 내의 기본 내장클래스이다.
//					인스턴스명은 주로 e를 쓰고,
//					메소드는 getMessage(메시지만),toString(상황도 제공),
//					그리고 가장 많이 사용하는 printStackTrace(위치도 제공)가 있다.
//					예시로, 여기서는 0으로 나누면 에러가 나는 경우의 처리를 해보겠다.

class Calculator1{
    int left, right;
    public void setOprands(int left, int right){
        this.left = left;
        this.right = right;
    }
    public void divide(){
        try { // 예외의 발생이 예상되는 로직
            System.out.print("계산결과는 ");
            System.out.print(this.left/this.right);
            System.out.print(" 입니다.");
        } catch(Exception e){ // 예외 처리 : 예외 발생시에 실행되는 로직
            System.out.println("\n\ne.getMessage()의 결과\n"+e.getMessage());
            e.getLocalizedMessage();
            System.out.println("\n\ne.toString()의 결과\n"+e.toString());
            System.out.println("\n\ne.printStackTrace()의 결과");
            e.printStackTrace();
        } finally { // 예외 여부와 관계없이 실행되는 로직
        	System.out.println("\nFin.");
        }
    }
}

public class java8_error1_catch {
    public static void main(String[] args) {
        Calculator1 c1 = new Calculator1();
        c1.setOprands(10, 0); // 뒤의 파라미터를 각각 0, 2로 바꿔가며 실행해보자.
        c1.divide();
    }
}