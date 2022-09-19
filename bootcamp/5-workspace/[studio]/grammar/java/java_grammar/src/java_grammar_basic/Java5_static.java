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
		// Static Method : ��ü�� �������� �ʰ� ��� ����, Ŭ���� �� �Ѱ��� ���� ����
		Car.audi();
		Car.audi_speed = 330;
		System.out.println(Car.audi_speed);

		// Nonstatic : ��ü�� ������ �Ŀ� ��� ����, ��ü ���� ���� ����
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
