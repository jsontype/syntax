package java3_advanced_grammer;

public class java5_ex_login {

    public static void main(String[] args) {

    	// 전체 응용해서 로그인 만들기

    	// String[][] users = {{"kim","1111"},{"yang","2222"},{"park","3333"}};
        String[][] users = {
                {"kim", "1111"},
                {"yang", "2222"},
                {"park", "3333"}
        };
        // ★ 실행구성 옵션에 들어가, argument에다가 yang, 2222를 넣는다.
        String inputId = args[0];
        String inputPass = args[1];

        // 값에 false를 줘서 로그인 안된 것을 기본값으로 하는 isLogined라는 boolean변수를 하나 지정한다.
        boolean isLogined = false;

        // 로그인 처리
        for(int i=0; i<users.length; i++) { // 유저 데이터 길이만큼 반복한다.
            String[] current = users[i]; // 해당 유저의 [n]번째 배열값을 current에 넣는다.
            if(
                    current[0].equals(inputId) &&
                    current[1].equals(inputPass) // current 배열에 담긴 0과 1을 args와 비교한다.
            ) {
                isLogined = true;
                break; // 일치하는 사람이 있으면 여기서 반복문을 끝내버린다.
            }
        }

        // 로그인 여부 체크 후 처리 !
        System.out.println("Hi,");
        if(isLogined) {
            System.out.println("Master!!");
        } else {
            System.out.println("Who are you?");
        }

        // 추후 session을 이용해 페이지마다 위 부분의 처리를 일일이 하지 않고 간단히 처리하고 보안처리도 할 수 있다.
    }

}