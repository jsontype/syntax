import sqlite3

# DML : Dababase Manipulation Language

# INSERT 1 : 특정 테이블에 전체 컬럼 데이터를 신규로 삽입할 때

def insertAll(table):
    conn = sqlite3.connect("study1.db")
    cursor = conn.cursor()
    sql = "INSERT INTO "+table+" VALUES(1, 'Yang', CURRENT_TIMESTAMP);"
    cursor.execute(sql)
    print(cursor.rowcount, "record inserted")  # rowcount of record schema >= 0
    conn.commit()
    conn.close()

# INSERT 2 : 특정 테이블에 일부 컬럼 데이터만 신규로 삽입할 때

def insertPart(table):
    conn = sqlite3.connect("study1.db")
    cursor = conn.cursor()
    sql = "INSERT INTO "+table+"(my_field1, my_field2) VALUES (2, 'David');"
    cursor.execute(sql)
    print(cursor.rowcount, "record inserted")  # rowcount of record schema >= 0
    conn.commit()
    conn.close()

# SELECT 1 : 특정 테이블내 데이터의 전체를 획득할 때

def selectAll(table):
    conn = sqlite3.connect("study1.db")
    cursor = conn.cursor()
    # (WHERE 1은 모두 TRUE로써 모두 출력(절 자체가 없어도 됨), 조건을 붙이면 조건 해당사항만 출력)
    cursor.execute("SELECT * FROM "+table+" WHERE 1;")
    print(cursor.fetchall())
    conn.commit()
    conn.close()

# SELECT 2 : 특정 테이블내 데이터의 일부만 획득할 때


def selectPart(table):
    conn = sqlite3.connect("study1.db")
    cursor = conn.cursor()
    # (WHERE 1은 모두 TRUE로써 모두 출력, 조건을 붙이면 조건 해당사항만 출력)
    cursor.execute("SELECT * FROM "+table+" WHERE my_field2='David';")
    print(cursor.fetchone())
    conn.commit()
    conn.close()

# UPDATE : 특정 테이블 내 데이터의 전체, 또는 일부를 새로운 값으로 갱신 할 때

def update(table):
    conn = sqlite3.connect("study1.db")
    cursor = conn.cursor()
    # 전체의 컬럼값을 동일하게 갱신할 경우 WHERE절을 없애면 된다.
    sql = "UPDATE "+table+" SET my_field2='Messi' WHERE my_field1=1;"
    cursor.execute(sql)
    print(cursor.rowcount, "record updated")
    conn.commit()
    conn.close()

# DELETE 1 : 특정 테이블 내 데이터의 일부를 삭제 할 때

def deletePart(table):
    conn = sqlite3.connect("study1.db")
    cursor = conn.cursor()
    cursor.execute("DELETE FROM "+table+" WHERE my_field1=2;")
    print(cursor.rowcount, "record deleted")
    conn.commit()
    conn.close()

# DELETE 2 : 특정 테이블 내 데이터의 전체를 삭제 할 때

def deleteAll(table):
    conn = sqlite3.connect("study1.db")
    cursor = conn.cursor()
    cursor.execute("DELETE FROM "+table+";")
    print(cursor.rowcount, "record deleted")
    conn.commit()
    conn.close()

if __name__ == "__main__":
    # insertAll('table_1st') # 1
    # insertPart('table_1st') # 1
    # selectAll('table_1st') # 2
    # selectPart('table_1st') # 2
    # update('table_1st') # 3
    # deletePart('table_1st') # 4
    # deleteAll('table_1st') # 5

    # DCL 작업을 위해 인스턴스 1 추가해놓기
    deleteAll('table_1st') # 6
    insertAll('table_1st') # 6
