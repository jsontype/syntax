package java_grammar;

public class Java3_for_while {

	public static void main(String[] args) {
		// �ݺ��� For : for(�ε����� ������; ����; �ѹ� �������� ó��) { ������ �����Ǵ� ���� �ݺ������� �۾� �ڵ� }
		System.out.println("<�ݺ��� For>");
		for(int i = 0; i < 3; i++) {
			System.out.println("While�� ����ƽ��ϴ�." + (i + 1));
		}




		// �ݺ��� While : while(����) { ������ �����Ǵ� ���� �ݺ������� �۾� �ڵ� }
		System.out.println("<�ݺ��� While>");
		int i = 0;
		while(i < 3) {
			System.out.println("While�� ����ƽ��ϴ�." + (i + 1));
			i++;
		}

	}

}
