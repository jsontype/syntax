import pymysql

# DCL : Dababase Control Language

# GRANT: 데이터베이스 사용자에게 특정 작업의 수행 권한을 부여할 때
# 예) GRANT SELECT ON SCOTT.EMP TO EXPERT : EXPERT에게 table_1st을 볼 권한을 준다.
def grant(user):
    conn = pymysql.connect(user='root',passwd='',host='127.0.0.1',db='mysql',charset='utf8')
    cursor = conn.cursor()
    sql="GRANT SELECT ON table_1st TO "+user+";"
    cursor.execute(sql)
    # conn.commit() # DCL은 단독으로 쓰여 커밋이 필요없음
    conn.close()

# REVOKE: 데이터베이스 사용자에게 부여권 수행 권한을 박탈할 때
# 예) REVOKE 뻇을권한 ON 객체이름 FROM 누구 : EXPERT로부터 table_1st을 볼 권한을 뺏는다.
def revoke(user):
    conn = pymysql.connect(user='root',passwd='',host='127.0.0.1',db='mysql',charset='utf8')
    cursor = conn.cursor()
    sql="REVOKE SELECT ON table_1st FROM "+user+";"
    cursor.execute(sql)
    conn.close()

# TCL : Transaction Control Language (DCL중에서도 트랜잭션 단위만 컨트롤하면 TCL이라고 따로 불러 구분하기도 함)

# BEGIN: 트랜잭션의 시작을 의미
# LOCK: 테이블 자원을 점유 할 때 (트랜잭션이 수행되는 동안 특정 데이터에 대해서 다른 트랜잭션이 동시에 접근하지 못하도록 제한)

# COMMIT: 트랜잭션을 실행 할 때 *
def commit(table):
    conn = pymysql.connect(user='root',passwd='',host='127.0.0.1',db='mysql',charset='utf8')
    cursor = conn.cursor()
    sql1="INSERT INTO "+table+" VALUES(1, 'Yang', CURRENT_TIMESTAMP);" # 실행을 원하는 트랜잭션
    sql2="COMMIT;" # 트랜잭션 실행하는 SQL문: COMMIT;
    cursor.execute(sql1) # 실행을 원하는 트랜잭션
    cursor.execute(sql2) # sql2를 주석화하면 COMMIT; 실행이 안되어서 DB에 반영이 안됨
    # ★ conn.commit() # DML은 원래 이 행이 필요한데, sql2을 실행하여 COMMIT;을 실행했으므로 필요없어짐
    # ★ A5M2의 SQL Query창에서 실행하려면 COMMIT 대신에 Ctrl+Enter가 COMMIT의 뜻으로 사용된다.
    conn.close() 

# SAVEPOINT: 롤백 지점을 설정 할 때 * (MYSQL에서는 트랜잭션을 지원하지 않는다.)
def savepoint():
    conn = pymysql.connect(user='root',passwd='',host='127.0.0.1',db='mysql',charset='utf8')
    cursor = conn.cursor()
    sql="""
        START TRANSACTION;
        SAVEPOINT save1;
        """
    cursor.execute(sql)
    conn.close()

# ROLLBACK: 트랜잭션을 취소 할 때 * (MYSQL에서는 트랜잭션을 지원하지 않는다.)
def rollbackto():
    conn = pymysql.connect(user='root',passwd='',host='127.0.0.1',db='mysql',charset='utf8')
    cursor = conn.cursor()
    sql="ROLLBACK TO save1;"
    cursor.execute(sql)
    conn.close()

# ★ 순서대로 하나씩 열어서 실행해보기
if __name__ == "__main__":
    # grant("user1") # 1 실행전/후 user1(비번없음) 접속 후 table_1st 테이블 열어보고 차이 비교해보기 (DB에서 View라는 테이블에 user1이 생성되었는지도 확인하기)
    # revoke("user1") # 2 실행전/후 user1(비번없음) 접속 후 table_1st 테이블 열어보고 차이 비교해보기
    # commit("table_1st") # 3 트랜잭션이 하나 실행되었음을 확인

    # savepoint() # 4 * MySQL에서 트랜잭션 처리를 지원하지 않음
    # rollbackto() # 5 * MySQL에서 트랜잭션 처리를 지원하지 않음
    # 끝
    print('Fin.')    