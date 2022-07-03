package java4_final_concept;

class java4_print_addon {
	public String delimiter = ""; // 변수의 초기화 : 데이터타입을 지정하면서 안에 아무것도 없게 둠
	public java4_print_addon(String delimiter) { // 생성자 : 필요한 정보를 정의내려놓음 (bean, interface)
		this.delimiter = delimiter; // this. : 인스턴스화하여 사용할 경우, 해당 인스턴스의 이름이 됨.
	}
	public void A() {
		System.out.println(this.delimiter);
		System.out.println("A");
	}

	public void B() {
		System.out.println(this.delimiter);
		System.out.println("B");
	}
}