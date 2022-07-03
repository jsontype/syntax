[준비]
기타센주 n반
진행코스 : PHP 실무 초중급
교사준비 : 윈키 + G 녹화 모드 (녹화모드이므로 좌덱, 우덱X 알트탭 O 아톰2탭 구글1탭)
학생준비 : 개인노트북(가급적 윈도우환경), atom.io 사이트에서 아톰 최신버전 다운로드, 수첩 및 필기도구
당부말씀 : 무료라고 무시하지 않고, 한시간 한시간을 소중히 생각해주시는 모습을 수업료로 받겠습니다.
<!-- 벌금 : 안 오실 경우 사유불문 / 10분이상 늦을 경우 / 가장 늦으신 분 / 숙제 안했을 시 / 불가피 사정은 참작 -->



[웹기본]
스킬지도 http://yangdonghwa.000webhostapp.com/skills.php?current_page=3
웹서버 작동에 대한 이해(서버와 클라이언트에 대해 이해하기) https://opentutorials.org/course/2614/14790
알고리즘에 대한 이해 http://azumait.github.io/music 에서 각 링크들, 버튼들 클릭할 때 뭐가 나와야 할까요?
백엔드와 프론트엔드에 대한 이해와 언어 https://post.naver.com/viewer/postView.nhn?volumeNo=16600589&memberNo=36090254
html <h2> HTML 코드 </h2> <b> </b> <u> </u> <a> </a> <p> </p> ... <br> <hr>
css <style> 적용할 부분 {CSS문} </style> 또는 <h2 style="color: blue;"> https://www.google.com/search?q=css+font&oq=css+font&aqs=chrome..69i57j0j69i59j0l3.4978j0j7&sourceid=chrome&ie=UTF-8
<style>p {font-family: "Times New Roman";}</style>
javascript http://postit.pc.to
javascript문 기본사용법 <script>alert('Hello, How are you?')</script> javascript:alert('Hello, How are you?')
프론트엔드 언어를 집에 비유하면 html은 뼈대, css는 지붕 벽 등의 살, javascript는 가전제품과 같습니다.
인생을 갈아넣어도 인정받기가 어렵다. 돈벌이가 안된다. 정적이다.
백엔드는 가족구성원을 집에 불러들이는 것이다. 또 가족구성원들이 하는 모든 행위에 대한 상호작용(스케쥴을 짠다, 메모를 남긴다, 남기는 모든 메시지들, 행위들)
사이트를 만들었는데 아무도 오지 않는다. = 의미없음. 들어와서, 회원가입을 하고, 자기 ID로 글을 적고, 댓글을 남기고 하기 위해서 DB라는 것이 필요하다.
그 DB를 구축하는 것이 백엔드 핵심. 동적이다.
백엔드 스킬지도 보기 http://yangdonghwa.000webhostapp.com/skills.php
5개중 어느 언어를 쓰던 간에 웹PG가 만들어내는 건 결국 비슷합니다. 언어에 따라 장단점이 있습니다.
프론트엔드 스킬지도 보기 http://yangdonghwa.000webhostapp.com/skills.php?current_page=2
Bootstrap4 , Reactive Web에 대한 설명
내장서버에 대한 이해 : WAMP, LAMP, MAMP
WAMP환경 https://m.blog.naver.com/PostView.nhn?blogId=uj02013&logNo=220834936929&proxyReferer=https%3A%2F%2Fwww.google.com%2F
LAMP환경(Virtualbox) http://technicalodroid.blogspot.com/2015/02/lamp.html
우리가 배울 제품군 : 환경 Window 서버 Apache 데이터베이스 MySQL 언어 PHP = WAMP
아톰 설치 & 이용법(단축키 참조 https://gunbin91.github.io/etc/2018/08/27/atomShortcut.html) // ctrl + /, 위아래, alt위아래, tab, shift + tab
아톰 script 설치(php 지원) https://niceman.tistory.com/4 shift + ctrl + b 로 사용
주석이란 : 클라이언트가 보지 못하는, 개발자 자신이나 다른 개발자를 위해 달아놓은 설명 부분
html, php, jsp 각자의 주석 다는 방법
<!-- <b>hello world<br> -->
<?php // /* */ ?>
연습을 위해, 수업메모는 아톰 상에 주석으로 할 것, 수첩은 코드와 관계없이 필요하다고 생각하는 개념을 따로 적는데 사용
구글검색습관 : html에 대한 기본코드 숙지
깃헙이 뭔가? github.com(개발자 포트폴리오 전용)와 정적, 동적웹호스팅 설명



[윈도우10]
새로운 데스크톱화면 : 컨트롤+윈+D
데스크톱화면 이동 : 컨트롤+윈+좌우
해당 데스크톱화면 삭제 : 컨트롤+윈+F4
트랙패드 사용법 : 세손가락 사용법 = 상하좌우 (좌덱 / 우덱 넘기기 연습)
여기서부터 3덱으로 나눠 진행 (1은 note.php, 2는 phpcode, 3은 php.pc.to)



[백엔드 1차]
프론트에 대한 상상
php.pc.to의 코드 다운
index : 홈페이지의 가장 첫 화면
객체지향에 대한 이해 : top 리콰이어, 두 리콰이어의 차이점
bottom : 리콰이어, 자바스크립트 첫 등장
top : 리콰이어, 캐릭터인코딩, 메타태그, 변수, 세션, 조건문 등
join : TA things
웹호스팅 사이트 내의 PHPMyADMIN을 통해 MySQL 만들기 과정 상세 http://www.000webhostapp.com
db개념설명(db, table, column, 키값, 고유값), MySQL문 공부하기 http://yangdonghwa.000webhostapp.com/skills.php?current_page=8
_join : md5 암호화, 세션, php웹호스팅 직접 가입, db 만들기, 등록 및 사용 http://www.000webhostapp.com
_loginok : 세션부여
index : 로그인 했을 때와 안했을 때의 세션 변화에 주목, table 작성법
login : TA things
_login : 로그인처리, .htaccess 내장(세션오토스타트)



[백엔드 2차]
http://stablemanager.000webhostapp.com/ 에 들어가서 fm.php 받아서 아이디 비번 수정해서 넣기 : 서버다운시의 백도어이자 보험, 나중에 서버다운시에 설명
bbs1 : 소개글 보기, TA things(필수입력 미입력시, 사진입력/미입력시, 비정상경로(주소창)이용시, 모든 인풋박스에 태그 입력시, 수정시, 삭제시)
bbs : _bbspage, 페이지네이션 실제 구현, view 쿠키 설명 스킵
bbs_view : TA thigs(로그아웃하거나 타 아이디일 때 수정/삭제 안보이게 함, 쿠키조회수, 태그 적용안됨), DB 한줄씩 불러오는 법, delback 세션 설명 스킵, _view_cookie에서 쿠키 설명
bbs_write, _bbs_write(XSS 예방), bbs_modify, _bbs_modify(modback세션설명), _bbs_delete(delback 세션설명)
blog1 : 소개글 보기, TA things(필수입력 미입력시, 사진입력/미입력시, 비정상경로(주소창)이용시, 모든 인풋박스에 태그 입력시, 수정시, 삭제시)
blog : bbs와 다른 점 주목(복붙했다 가정하고 만들기), _blogpage, 페이지네이션 실제 구현
blog : TA thigs(로그아웃하거나 타 아이디일 때 수정/삭제 안보이게 함, 태그 적용안됨), DB 한줄씩 불러오는 법, delback 세션 설명 스킵
blog_write, _blog_write(XSS 예방), blog_modify, _blog_modify(modback 세션설명), _blog_delete(delback 세션설명)



직접 해결/구글검색법은 개발자의 필수 덕목임(질문전 검색, 직접 찾아보기 최소 2~3시간 후 안 넘어가질 때 질문)
무료 도메인 연결
FTP를 이용해 현재 자신이 가진 loginbbs 폴더안의 내용을 public_html 폴더 내부로 직접 넣기, 서버가 먹통이라 작동안됨



[숙제]
note.php 내용 다 이해하고 오기 (이해 안되는 건 구글검색해서 알아보기:훈련!)
디버깅 및 DB구축 이해 : 직접 자기 id로 웹호스팅에 가입한 각자의 id로 db(이름 azuma_php_bbs1 등 대신 자기 아이디로 변경해서)와 사이트 구축해보기(복붙하지말고 똑같이 타이핑해서) 후 링크 내 카톡으로 보내기



[프론트엔드]
프론트엔드에 대한 이해
부트스트랩4 템플릿 다운로드
코드 뜯어보기 및 기본 설명
부트스트랩4 템플릿 텍스트와 이미지 찾아 고치기
만들어놓은 php를 이용하여 로그인/블로그 템플릿 위에 백엔드 씌우기 php 백엔드 공부한 순서대로 전체구현



[숙제]
예제 블로그 템플릿 위에 php백엔드 씌워오기 (이때는 기존 php파일들을 php_tech 폴더안에 넣어버리고, 새롭게 index.php로 구현)



[숙제]
자유 템플릿 위에 php백엔드 씌워오기 (이때는 기존 php파일들을 php_tech 폴더안에 넣어버리고, 새롭게 index.php로 구현)
PHP 초중급 코스 끝



[백엔드 3차]
bbs2 : bbs1에서 바꿀 것만 바꾸기, 댓글 구현
blog2 : blog1에서 바꿀 것만 바꾸기, 댓글 구현
