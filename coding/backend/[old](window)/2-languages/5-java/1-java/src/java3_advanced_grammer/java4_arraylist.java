package java3_advanced_grammer;

public class java4_arraylist {

	// 배열(ArrayList)
    public static void main(String[] args) {

        // 배열 기본
        System.out.println("배열문 설명");
        String[] users = new String[3]; // 3칸짜리 새 배열 객체를 하나 생성
        users[0] = "Kim";
        users[1] = "Yang";
        users[2] = "Park";

        System.out.println(users[1]);
        System.out.println(users.length);

        int[] scores = {10, 100, 100}; // 원소, element
        System.out.println(scores[1]);
        System.out.println(scores.length);




        // 배열 + 반복문
        System.out.println("배열 + 반복문");
        for(int i=0; i<users.length; i++) {
            System.out.println(users[i]+" 様");
    	}




        // 배열 + 반복문 + 조건문
        System.out.println("배열 + 반복문 + 조건문");
        for(int i=0; i<users.length; i++) {
	        if(i == users.length -1) {
	        	System.out.println(users[i]+".");
	        } else {
	        	System.out.println(users[i]+",");
	        }
    	}

    }

}