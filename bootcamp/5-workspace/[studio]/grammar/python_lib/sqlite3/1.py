# sqlite3 : DB의 일종(sqlite3, mysql, oracle, postgre)
# SQL문 : DB를 관리하기 위한 언어(sql)
# 테이블 "주가" : 컬럼 "시작가, 종가, 고가, 저가", 레코드 "1000, 1500, 1650, 900"

# import
from os import name
import sqlite3

def setDB():
    conn = sqlite3.connect("kospi.db")
    return conn

def setCursor(conn):
    cursor = conn.cursor()
    return cursor

# SQL문 종류1. DDL (DB Definition Language) : create, alter, drop
def create(company):
    cursor.execute("CREATE TABLE "+company+"(Date text, Open int, High int, Low int, Closing int, Volume int)")
    if cursor.rowcount == -1: print("1개의 테이블이 생성되었습니다.")
    conn.commit()

def drop(company):
    conn = sqlite3.connect("kospi.db")
    cursor = conn.cursor()
    cursor.execute("DROP TABLE "+company)
    if cursor.rowcount == -1: print("1개의 테이블이 삭제되었습니다.")
    conn.commit()

# SQL문 종류2. DML (DB Manipulation Language) : select, insert, delete, update
def select(company):
    cursor.execute("SELECT * FROM "+company+" WHERE 1")
    print(cursor.fetchall())
    conn.commit()

def insert(company):
    cursor.execute("INSERT INTO "+company+" VALUES('21.10.10', 96000, 98000, 96000, 98500, 300000)")
    if cursor.rowcount == 1: print("1개의 레코드가 추가되었습니다.")
    conn.commit()

def delete(company):
    cursor.execute("DELETE FROM "+company+" WHERE Date='21.10.10'")
    if cursor.rowcount == 1: print("1개의 레코드가 삭제되었습니다.")
    conn.commit()

def update(company):
    cursor.execute("UPDATE "+company+" SET `Volume`=999999 WHERE Date='21.10.11'")
    if cursor.rowcount == 1: print("1개의 레코드가 수정되었습니다.")
    conn.commit()

if __name__ == '__main__':
    conn = setDB()
    cursor = setCursor(conn)
    # create('samsung')
    drop('samsung')
    # insert('samsung')
    # delete('samsung')
    # update('samsung')
    # select('samsung')

    