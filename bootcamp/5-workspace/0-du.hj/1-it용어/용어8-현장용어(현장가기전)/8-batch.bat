:: 1. Batch란?
:: 웹사이트에서 로그인할 때 비밀번호를 변경하라는 공지를 심심찮게 받아볼 수 있다. 
:: 서버에서는 비밀번호 설정 후 일정 기간이 지났는지를 파악해 일정 기간(90일 등)이 지나면 변경 권장을 해야 한다. 
:: 이를 로그인 요청마다 체크할 수도 있지만 주기적으로(1일 혹은 2일에 한번 등...) 
:: 모든 계정에 대해 일정 기간이 지났는지 확인하는 방식으로 처리하면 오버헤드를 줄일 수 있다.
:: 이와 같이 주기적으로 특정 동작을 수행하도록 하는 프로그램을 배치(Batch) 프로그램이라 하고, 실무에서도 굉장히 필수적일 것이라고 생각된다.
:: ★ 웹에서 Batch로 할 수 있는 일들 : 휴면계정 관리, 광고, 업데이트 소식, 알림, 청구 등의 기능 (Batch로 무엇을 할 수 있는지를 이해하면 됨)
:: 여기서는 Batch를 더 잘 이해할 수 있도록 간단히, 개인적으로 만들 수 있는 간단한 Batch 앱들을 만들어보도록 하겠다.



:: 1. PC 예약종료 프로그램
:시간 입력받기
:set /p hour=How many hours after? (1~24) :
:set /a delay=%hour%*60*60

:예약종료
:shutdown -s -t %delay%

:예약종료 취소
:shutdown -a



:: 2. 출근도장 프로그램
::불필요한 로그 숨기기
@echo off
:::컴퓨터키면 자동실행되는 위치 C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp
echo "Go to Work Stamp"
timeout 2
::출근하고자 하는 사이트에 로그인 : 자신의 회사의 출근 스탬프를 찍을 수 있는 웹사이트 주소를 적으면 된다.
start chrome "https://"
echo "Loging In..."
timeout 2
::키보드 enter키 입력 powershell command
powershell "$wshell = New-Object -ComObject wscript.shell; $wshell.SendKeys('{ENTER}')"
:::출근
echo "Stamping..."
timeout 2
::커서의 x, y좌표 : 출근 도장 버튼의 좌표를 지정해둔다.
set x=271
set y=409
::마우스 커서 이동
set command=^
Add-Type -AssemblyName System.Windows.Forms;^
[Windows.Forms.Cursor]::Position = """$(%x%),$(%y%)""";
powershell %command%
::클릭 : 단, 여기까지 하려면 nircmd.exe를 설치해서 동일 폴더 내에 둘 필요가 있다. (Batch 자체에서는 클릭 기능이 없기 때문에 해당 모듈을 임포트하기로 했다.)
:timeout 2
:nircmd.exe sendmouse left dblclick
::종료
exit
@echo off
