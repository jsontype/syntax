@echo off

:::실행전
::PC 환경에 따른 설정
::- 포인터위치 수정필요
::- 익스플로러 최대화시켜놓기
::- nircmd.exe 열어서 설치
::- go.url 만들어서 C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp 폴더에 넣어서 윈도우 켤 때 자동실행되도록 하기

:echo ":) Start Go to Work Stamp After..."
:timeout 1
:start 2start.bat
echo ":) Start Leave Work Stamp After..."
timeout 30600
start 3start.bat