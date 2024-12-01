package java3_advanced_grammer;

/* 생성자(Constructor) :
		★ 생성자는
			★ 인스턴스 클래스를 생성할 때에 필요한 파라미터를 미리 "정의"내려주어서,
				★ 인스턴스를 생성할 때 도움을 주는 역할을 하는 특수한 메소드이다.
								(이자, 인스턴스 생성해서 사용하는 모든 메소드에 반드시 필요한 메소드.)
		* 복습
			* 인스턴스 클래스(복제품) 만드는 이유 : package2의 java2 클래스 참조
		 		* 1. 인스턴스를 쓰면, 그냥 p1.write("Hello 1");는 p2로만 바꾸면 result2.txt파일로 바뀌므로,
				* 사용하기가 매우 편해진다.
				* 2. 인스턴스를 쓰면, write를 모두가 돌려쓰는 경우보다, 복제본 p1, p2는 따로 작동하기 때문에,
				* 내부상태가 병렬적으로 바뀌어 속도가 빨라지고 시스템 과부하가 덜 걸린다.
				* 3. 인스턴스를 쓰면, 1회용작업이 아니므로, (Math.PI 등은 모두 1회용작업이다)
				* 이후 result1.txt 파일작업을 하는데 있어서 여러가지 후속작업을 추가하여 사용할 수 있다.
				* 동시에 여러개의 파일을 작업하거나 하는 경우도 만들 수 있다.
				* 즉, 1회용이 아니라 긴 맥락의 작업을 꼬리에 꼬리를 물고 해야하는 경우에는,
				* 클래스를 복제한 인스턴스를 만들어서,
				* 그것을 그대로 사용할 수 있도록 사용자에게 제공하는 것이 더 효율적이기 때문에,
				* 그에 맞춰서 코드를 제작하게 되는 것이다.

 		이클립스 화면상에서 라이브러리라는 탭을 보면,
 		Calculator라는 클래스가 필요한 파라미터와 그 데이터타입을 정의내린 것을 볼 수 있다.
 		이것이 생성자이며, 추후 롬복을 통해 자동 지정이 가능하다.
*/

// 생성자 만드는 법 (=bean, interface라고도 함)
// 1. 다음과 같이 생성자 클래스를 만들어서, int 타입의 변수인 left와 right의 값을 입력해야만 작동하도록 설정해둠
class Calculator {
	int left, right;
	// 2. 아래와 같이 클래스 Calculator가 각 메소드를 사용할 때 받을 "파라미터"를 지정한다.
	public Calculator(int left_parameter, int right_parameter) {
		// this.의 의미는 나중에 나올 「생성자 클래스와 "같은" Calc~ 클래스 혹은 Calc~의 인스턴스클래스안에서」라는 뜻으로,
		// this. 키워드를 변수 앞에 붙여서 이 변수가 자신의 클래스 내에 있다는 것을 명시해준다.
        this.left = left_parameter; // 추적 ⓐ Calculator 클래스 안에서 left라는 변수
        this.right = right_parameter; // 추적 ⓑ Calculator 클래스 안에서 right라는 변수
    }
	// 3. 클래스 Calculator안에서 쓸 메소드들을 만듦.
    public void sum() {
    	// ⓐ + ⓑ : sum()을 쓰려면 Calculator의 인스턴스를 생성 후, 인스턴스명.sum() 이런식으로 쓴다.
        System.out.println(this.left + this.right);
    }
    public void avg() {
    	// ⓐ + ⓑ : avg()을 쓰려면 Calculator의 인스턴스를 생성 후, 인스턴스명.avg() 이런식으로 쓴다.
        System.out.println((this.left + this.right) / 2);
    }
}

// 생성자 클래스로 정의내린 메소드를 쓰는법
public class java6_constructor {

    public static void main(String[] args) {

    	// 1. 새로운 인스턴스를 생성한다. 이 때 생성자가 지시했던 대로 left, right_parameter 값을 준다.
    	// 	앞 Calculator c1에서 앞에부분은 해당 변수의 데이터타입으로 생성자를 지정한 것이고, 뒤 c1은 변수이름이다.
    	// 	뒤 new Calculator(10, 20)은 복제품 인스턴스 c1(이면서 동시에 Calculator라는 생성자 클래스를
    	//								데이터타입으로 하는 변수c1)에 들어갈 파라미터를 지정한 것이다.
        Calculator c1 = new Calculator(10, 20);
        // 2. c1.의 의미 : 해당 인스턴스 c1 안에 넣었던 파라미터 값을 가지고,
        // 3. sum()의 의미 : 생성자 클래스 안에 있던 sum() 메소드를 사용한다.
        c1.sum();
        c1.avg();

        // 4. 필요시 언제든 새 객체를 지정해서 또 사용한다.
        Calculator c2 = new Calculator(20, 40);
        c2.sum();
        c2.avg();
    }

}

/* 생성자의 특징
생성자의 특징은 아래와 같이 정리할 수 있다.

1. 생성자의 이름은 "클래스의 이름과 동일"하다.
자바에서 클래스의 이름과 동일한 메소드는 생성자로 사용하기로 약속되어 있다.
예를 들어 클래스가 class Calculator { } 면 그 안에 들어갈 생성자는
class Calculator {
	public Calculator(datatype parameter1, datatype parameter2) {
		this.var1 = datatype parameter1;
		this.var2 = datatype parameter2;
	}
	public void 메소드이름1 {
		메소드1이 실행할 코드
	}
	public void 메소드이름2 {
		메소드2가 실행할 코드
	}
	... 중략 ...
}
식으로 정의내려진다.

2. (위에서 메소드 이름 1,2에서 보여지듯이,) 해당 클래스 안의 메소드가 값을 반환하지 않을 것이다. (void)
생성자는 인스턴스를 생성해주는 역할을 하는 특수한 메소드인데, 반환 값이 있다면 엉뚱한 객체가 생성될 것이다.
따라서 "반환 값을 필요로하는 작업 (=return치가 있는 경우. 예를 들어 주로 어디로 이동하게 하는 웹상의 링크 등)"에서는
"생성자를 사용하지 않는다." 반환 값이 없기 때문에 return도 사용하지 않고, 반환 값을 메소드 정의에 포함시키지도 않는다.

*/