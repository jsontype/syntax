import sqlite3

def setDB():
    conn = sqlite3.connect("study1.db")
    if conn:
        print('Successfully Connected To: ', type(conn))

# DCL : Dababase Control Language
# DCL의 다른 명령어들은 단독으로 사용되는 경우가 많습니다.
# GRANT: 데이터베이스 사용자에게 특정 작업의 수행 권한을 부여할 때
# 예) GRANT SELECT ON table_1st TO EXPERT : EXPERT에게 table_1st을 볼 권한을 준다.
# REVOKE: 데이터베이스 사용자에게 부여권 수행 권한을 박탈할 때
# 예) REVOKE 뻇을권한 ON 객체이름 FROM 누구 : EXPERT로부터 table_1st을 볼 권한을 뺏는다.

# TCL : Transaction Control Language
# DCL중에서도 트랜잭션 단위만 컨트롤 하는 것을 TCL이라고 따로 부릅니다.
# SET TRANSACTION: 트랜잭션 모드로 설정 할 때
# BEGIN: 트랜잭션의 시작을 의미
# COMMIT: 트랜잭션을 실행 할 때 * 
# ROLLBACK: 트랜잭션을 취소 할 때 * 
# SAVEPOINT: 롤백 지점을 설정 할 때
# LOCK: 테이블 자원을 점유 할 때

# 실행 : 
# DCL과 TCL의 경우는 기본적인 데이터베이스 작업에 필요없기도 하고,
# 현재 상황에서는 사용의 제약이 있으므로 실행은 보류해둡시다.
# 그냥 "이렇게 상황통제실 비슷한 역할을 하는 윗 단계의 쿼리도 있구나" 하면서 개념만 이해하고 넘어갑시다.

if __name__ == "__main__":
    setDB()
