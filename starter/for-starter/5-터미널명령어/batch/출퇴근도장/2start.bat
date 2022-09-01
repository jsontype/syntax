@echo off

:::컴퓨터키면 자동실행되는 위치 C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp
echo "Go to Work Stamp"
timeout 2

::지란 사이트에 로그인
start chrome "https://gw.jiran.com/app/ehr"
echo "Loging In..."
timeout 2
::키보드 enter키 입력 powershell command
powershell "$wshell = New-Object -ComObject wscript.shell; $wshell.SendKeys('{ENTER}')"

:::출근
echo "Stamping..."
timeout 2
::커서의 x, y좌표
set x=271
set y=409
::마우스 커서 이동
set command=^
Add-Type -AssemblyName System.Windows.Forms;^
[Windows.Forms.Cursor]::Position = """$(%x%),$(%y%)""";
powershell %command%
::클릭 (nircmd.exe 설치필요)
timeout 2
nircmd.exe sendmouse left dblclick


::종료
exit
