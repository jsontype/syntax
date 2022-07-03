package java3_advanced_grammer;

// 지금까지 예외를 처리하는 방법으로 try...catch...finally를 배웠다. 이외에 다른 방법도 있다.
// throw를 사용하는 것이다. throw는 예외처리를 다음 사용자에게 넘기는 것이다.

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

class B{
    void run() throws IOException, FileNotFoundException{
	// ★ throws IOException, FileNotFoundException 의 의미
    // B.run 내부에서 IOException, FileNotFoundException에 해당하는 예외가 발생하면,
    // 이에 대한 예외처리를 B.run의 사용자(여기서는 메인메소드)에게 위임하는 것이다.
    	BufferedReader bReader = null;
        String input = null;
        bReader = new BufferedReader(new FileReader("out.txt"));
        input = bReader.readLine();
        System.out.println(input);
    }
}

/* IOException의 예외 처리
 * 네트워크 연결이 끊기거나, 디스크 공간이 없거나 등의 HW 문제는 B.run 입장에서는 어떻게 할 수 있는 일이 아니다.
 * 엔드유저인 애플리케이션의 사용자가 out.txt 파일을 루트 디렉토리에 위치시켜야 하는 문제이기 때문에
 * 애플리케이션의 진입점인 메소드 main으로 책임을 넘기고 있다.
 */

/* FileNotFoundException의 예외 처리
 * out.txt 파일을 찾을 수 없는 상황은 B.run 입장에서는 어떻게 할 수 있는 일이 아니다.
 * 엔드유저인 애플리케이션의 사용자가 out.txt 파일을 루트 디렉토리에 위치시켜야 하는 문제이기 때문에
 * 애플리케이션의 진입점인 메소드 main으로 책임을 넘기고 있다.
 * File 관련 라이브러리를 사용시 이 FileNotFoundException 상황에 대한 예외처리가 반드시 필요하다.
 * 이처럼, 일부 라이브러리를 사용할 경우에는 특정 예외처리를 반드시 해줘야 작동되는 경우가 있음을 이해해두자.
 */

class C{
    void run() throws IOException, FileNotFoundException{
	// ★ throws IOException, FileNotFoundException 의 의미
    // c.run은 b.run의 사용자이지만, c.run의 사용자에게 다시 throw(예외 던지기)를 해서
    // 이에 대한 예외처리를 c.run의 사용자(여기서는 메인메소드)에게 다시 위임할 수 있다.
    	B b = new B();
        b.run();
    }
}

public class java9_error2_throw {
    public static void main(String[] args) {
         C c = new C();
         try {
            c.run();
        } catch (FileNotFoundException e) {
            System.out.println("out.txt 파일은 설정 파일 입니다. 이 파일이 프로잭트 루트 디렉토리에 존재해야 합니다.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}