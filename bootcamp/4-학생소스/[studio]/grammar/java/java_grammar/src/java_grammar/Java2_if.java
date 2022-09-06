package java_grammar;

public class Java2_if {

	public static void main(String[] args) {
		// ���ǹ� IF
		int a = 2;
		int b = 2;

		if(a > b) { // if�� �⺻������ ()���� ������ true�϶��� �����Ѵ�.
			System.out.println(1);
		}

		if(a < b) {
			System.out.println(2);
		}


		// ���ǹ� IF, ELSE IF, ELSE
		System.out.println("<���ǹ� �⺻>");
		if(a > b) {
			System.out.println("a�� b���� Ů�ϴ�.");
		} else if(a < b) { // else if : �ƴϰ� ~��
			System.out.println("a�� b���� �۽��ϴ�.");
		} else { // else : �ƴϸ�~
			System.out.println("a�� b�� �����ϴ�.");
		}

		String c = "Hello Java!";
		if(c.contains("Python")) {
			System.out.println("Python�Դϴ�.");
		} else if(c.contains("PHP")) {
			System.out.println("PHP�Դϴ�.");
		} else if(c.contains("GO")) {
			System.out.println("GO�Դϴ�.");
		} else if(c.contains("Javascript")) {
			System.out.println("Javascript�Դϴ�.");
		} else {
			System.out.println("ã�� �� �����ϴ�.");
		}

		// ���ǹ� ���� ����
		System.out.println("<���ǹ� ����>");
		String id = "javaskill";
		String inputId = args[0];
		String pw = "java123";
		String inputPw = args[1];

		boolean check = (inputId.equals(id) && inputPw.equals(pw)); // || = or, && = and
		if(check) {
			System.out.println("�α��� �Ϸ�!");
		} else {
			System.out.println("id �Ǵ� pw�� Ȯ�����ּ���.");
		}


		System.out.println("<eqauls�� ==�� ����>");
		int p1 = 1;
//		System.out.println(p1.equals(1));
//		String p2 = "1";
//		System.out.println(p2.equals("1"));

		String p2 = new String("111");
		System.out.println(p2.equals("1")); // false
		System.out.println(p2.length()); // 3
		System.out.println(p2.contains("1")); // true
	}

}
