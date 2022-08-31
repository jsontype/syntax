package java_grammar_basic;

class Car {
	public static void audi() {
		System.out.println("Audi!");
	}
	static int audi_speed = 300;

	public void benz() {
		System.out.println("Benz!");
	}
	int benz_speed = 280;
}

public class Java5_static {
	public static void main(String[] args) {
		// Static Method : 객체를 생성하지 않고 사용 가능, 클래스 당 한개만 생성 가능
		Car.audi();
		Car.audi_speed = 330;
		System.out.println(Car.audi_speed);

		// Nonstatic : 객체를 생성한 후에 사용 가능, 객체 마다 생성 가능
		Car car1 = new Car();
		car1.benz();
		car1.benz_speed = 270;
		System.out.println(car1.benz_speed);

		Car car2 = new Car();
		car2.benz();
		car2.benz_speed = 290;
		System.out.println(car2.benz_speed);
	}

}
