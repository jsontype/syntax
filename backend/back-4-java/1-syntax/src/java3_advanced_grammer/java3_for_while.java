package java3_advanced_grammer;

public class java3_for_while {

    public static void main(String[] args) {

    	// 반복문 (for, while)
        System.out.println("=== for ===");
        for(int j=0; j < 3; j++) {
            System.out.println('for');
        }

        System.out.println("=== while ===");
        int i = 0;
        while(i < 3) {
            System.out.println('while');
            i++; // i = i + 1;
        }

    }

}