@echo off

::PC 예약종료 프로그램

:시간 입력받기
set /p hour=How many hours after? (1~24) :
set /a delay=%hour%*60*60

:예약종료
shutdown -s -t %delay%