package java3_advanced_grammer;

// 제네릭(Generic)이란?
// 클래스 내부에서 사용할 데이터 타입을 외부에서 지정하는 기법을 의미한다.
// 자바에서 가장 나중에 도입됐고 이해하기 가장 어려운 개념이다.



// 1. 제네릭의 의미 Bean
class Person1<T>{
    public T info;
}


// 2. 제네릭을 사용하는 이유 Bean
class StudentInfo{
    public int grade;
    StudentInfo(int grade){ this.grade = grade; }
}
class EmployeeInfo{
    public int rank;
    EmployeeInfo(int rank){ this.rank = rank; }
}

// 2-1의 경우 : 얘는 중복제거를 성공적으로 한다. 그러나,
// 위 두 클래스는 int만을 데이터타입으로 반해서
// 아래 클래스는 Object는 모든 것이 다 올 수 있기 때문에 String을 넣어도 컴파일 에러가 뜨지 않는다.
// 그렇게 되면 컴파일 에러가 뜨지 않은 상태에서, 실행시 오류가 뜨므로 버그가 어디에 있는지 찾기가 어려워진다.
// 이는 큰일이 되므로 이렇게 하지 않고, 그 아래 Person3 클래스처럼 제네릭을 사용해서 인스턴스로 쓴다.
class Person2{
    public Object info;
    Person2(Object info){ this.info = info; }
}
// 2-2의 경우 : 제네릭을 사용해서 중복제거를 한 경우
class Person3<T>{
    public T info;
    Person3(T info){ this.info = info; }
}


// 3. 복수의 제네릭, 제네릭에서 기본데이터타입 사용하기
class Person4<T, S>{
    public T info;
    public S id;
    Person4(T info, S id){
        this.info = info;
        this.id = id;
    }
    public <U> void printInfo(U info){
        System.out.println(info);
    }
}



// * 위의 1, 2, 3은 아래의 1, 2, 3에 연결이 됩니다.



public class java7_generic {

    public static void main(String[] args) {

// 1. 제네릭의 의미
// 다음과 같이 class Persion<T>의 데이터타입을 제네릭 기법으로 외부에서(인스턴스 생성시) 지정할 수 있다.
        Person1<String> p1 = new Person1<String>();
        Person1<StringBuilder> p2 = new Person1<StringBuilder>();


// 2. 제네릭을 사용하는 이유
// 2-1의 경우 : 컴파일 성공 but 에러 발생 → 에러 발견 불가능
// Person2 per1 = new Person2("부장");
// EmployeeInfo ei = (EmployeeInfo)per1.info;
// System.out.println(ei.rank);

// 2-2의 경우 : 컴파일 실패 and 에러 발생 → 에러 발견 가능
        Person3<String> per2 = new Person3<String>("부장");
        String ei2 = per2.info;
//        System.out.println(ei2.rank); // 컴파일 단계에서 에러가 발생할 코드

// 2-2의 성공의 경우
// * 아래 파라미터가 (1)아니라 (new EmployeeInfo(1))인 이유 : 복제본으로 써야 생성자 내 변수인 "rank" 사용가능
// * 물론, EmployeeInfo e = new EmployeeInfo(1); 식으로 변수지정 한 다음 아래 파라미터에 e 넣어도 됨
        Person3<EmployeeInfo> per3 = new Person3<EmployeeInfo>(new EmployeeInfo(1));
        EmployeeInfo ei1 = per3.info;
        System.out.println(ei1.rank); // 성공해서 rank의 값 int 1을 뱉는다.

/* 해설
p1은 잘 동작할 것이다. 중요한 것은 p2다. p2는 컴파일 오류가 발생하는데 p2.info가 String이고
String은 rank 필드가 없는데 이것을 호출하고 있기 때문이다.
여기서 중요한 것은 아래와 같이 정리할 수 있다.
- 컴파일 단계에서 오류가 검출된다.
- 중복의 제거와 타입 안전성을 동시에 추구할 수 있게 되었다.
*/


// 3. 복수의 제네릭, 제네릭에서 기본데이터타입 사용하기
        // Generic 클래스 : 참조데이터타입을 담기 위해 쓴다.
        EmployeeInfo e = new EmployeeInfo(1);

        // Wrapper 클래스 : Interger라는 기본데이터타입을 다음과 같이 인스턴스화해서 참조데이터타입으로 변경.
        // 				이 클래스를 쓰면 기본데이터타입을 사용할 수 없는 제네릭에서도 int등이 사용 가능하다.
        Integer i = new Integer(10);

        // 아래와 같이 복수의 제네릭도 가능하다.
        Person4<EmployeeInfo, Integer> per4 = new Person4<EmployeeInfo, Integer>(e, i);

        // Wrapper 클래스를 통해 기본데이터타입을 제네릭에 넣은 결과값을 확인
        per4.printInfo(i);
    }

}