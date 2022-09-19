<!-- Top -->
<?php require('../lib/top_in_folder.php'); ?>


<!-- 회원가입 -->
<h2>회원가입</h2>

<!-- form 사용법
        <form action="자료보낼곳" method="get/post">
          <input type="text" name="보낼항목" placeholder="항목설명부분"></input>
          <button type="submit">보내기</button>
        </form> -->
<!-- form에 text만 입력시 : 일반 post만 지정, 이때는 minlength 등의 태그가 잘 작동함 -->
<!-- form에 파일을 입력시 : post 메소드 지정과 enctype 타입 지정 필수, * 단 이때는 minlength 등의 태그가 안 먹힘. 따로 조치를 취해줘야함. -->
                      <!-- * 그 조치는 _join의 "잘못 입력된 경우 걸러내기" 참조 -->
<form action="_join.php" method="post">
  ※ 필수항목<br>
  <!-- ID 입력란 : 영문이 기본이고 영문, 숫자만 허용 (패스워드와 이메일은 input type 설정만으로도 자동해결) -->
  <!-- 인풋박스(input) 기본입력 ID 영문, 숫자만 허용 CSS : 단, 이 코드는 IE와 FF에서만 작동한다.
      style = "ime-mode :  * ;"
      inactive default 로 영문모드
      active  default 로 한글모드
      auto  한/영 중 선택된 모드
      disabled  영문만을 사용할 수 있는 모드 -->
  <!-- 인풋박스(input)에 기본입력 ID 영문, 숫자만 허용 JS : 모든 웹브라우저에서 허용, 단, 사용시 <input id="alphaNumeric">값을 부여해 쓴다. -->
  <?php require('_id_limit.php') ?>
  <!-- 실제 ID입력란 -->
  * ID : <input type="text" name="id" placeholder="* 아이디(소문자)" minlength="2" maxlength="15" style="ime-mode:disabled;" id="alphaNumeric" /><br>
  * 비밀번호 : <input type="password" name="pw" placeholder="* 비밀번호(대소문자 구분)" minlength="4" maxlength="30" /><br>
  * 비밀번호확인 : <input type="password" name="pwc" placeholder="* 비밀번호 확인" minlength="4" maxlength="30"  /><br>
  <!-- ★ 인풋박스 내 태그방지법(XSS) : _taglimit.php를 호출한 뒤 인풋박스 안에 id="noTag" onKeyUp="javascript:checkUID();"를 넣는다. -->
  * 이름 : <input type="text" name="username" placeholder="* 성함" maxlength="15" /><br>
  * 닉네임 : <input type="text" name="nickname" placeholder="* 닉네임" maxlength="15" /><br>
  * 이메일 : <input type="email" name="email" placeholder="* 이메일" maxlength="30"  /><br><br>

  ※ 선택항목<br>
  <!-- 성별 입력란 : 옵션 중 하나의 값을 선택하기 -->
  성별 : &nbsp; &nbsp;
  <input type="radio" name="gender" value="남자" checked /> 남자&nbsp;
  <input type="radio" name="gender" value="여자" /> 여자<br>
  <!-- 생년월일, 전화번호 입력란 : number 타입으로 숫자만 입력받기, 단 이 경우 maxlength가 적용되지 않는다. 대신 min, max을 사용해야한다.  -->
  <!-- text타입의 maxlength="8"은 number타입의 max="99999999"와 같다. -->
  생년월일 : <input type="number" name="birth" placeholder="생년월일 (예 : 19990919)" max="99999999"  /><br>
  전화번호 : <input type="number" name="tel" placeholder="전화번호 (예 : 08012345678)" max="99999999999"  /><br>
  주소<br><textarea rows="5" cols="50" name="addr" placeholder="주소" maxlength="100" ></textarea><br><br>
  <button type="submit">회원가입</button>
  <button type="button" onclick="location.href='login.php'">뒤로가기</button>
</form>

<!-- html5 인풋박스 type 속성
키워드    데이터타입
Hidden : 숨겨진 임의의 문자열
Text : 줄바꿈 없는 텍스트
Search : 검색
Tel : 전화번호
Url : 경로
Email : 이메일
Password : 비밀번호
Date and Time : 타임존이 국제표준시(UTC)로 설정된 날짜와 시간(년, 월, 일, 시, 분, 초, 분할된 초)
Date : 타임존 없는 날짜(년, 월, 일)
Month : 년월을 구성하는 타임존 없는 날짜
Week : 주 를 나타내는 타임존 없는 주
Time : 타임존 없는 시간(시, 분, 초, 분할된 초)
Datetime-local : 타임존 없는 날짜와 시간(년, 월, 일, 시, 분, 초, 분할된 초)
Number : 숫자
Range : 숫자이면서, 정확한 값이 큰 의미가 없다는 의미를 내포함
Color : 8비트 RGB로 구성된 sRGB 색상
Checkbox : 미리 정의된 목록에서 가져온 0개 이상의 값
Radio : 열거된 선택형 값
File : File Upload MIME 타입과, 파일명을 갖는 파일 submit
Submit : 버튼 누르면 폼 제출을 시작, 이것을 선택한 후에는 다른 값을 선택할 수 없음을 암시
Image : 특정 이미지의 크기와 관련된 좌표. 폼 제출을 시작하므로, 이것을 선택한 후에는 다른 값을 선택할 수 없음을 암시
Reset : 리셋 버튼
Button : 버튼
-->

<!-- Bottom -->
<?php require('../lib/bottom_in_folder.php'); ?>
