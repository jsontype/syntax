# sqlite3 : DB의 일종(sqlite3, mysql, oracle, postgre)
# SQL문 : DB를 관리하기 위한 언어(sql)
# 테이블 "주가" : 컬럼 "시작가, 종가, 고가, 저가", 레코드 "1000, 1500, 1650, 900"

# import
from os import name
import sqlite3

def setDB():
    conn = sqlite3.connect("result.db")
    return conn

def setCursor(conn):
    cursor = conn.cursor()
    return cursor

# SQL문 종류1. DDL (DB Definition Language) : create, alter, drop
def create():
    cursor.execute("CREATE TABLE `result` (FileName text, RegDate text)")
    if cursor.rowcount == -1: print("1개의 테이블이 생성되었습니다.")
    conn.commit()

def drop():
    conn = sqlite3.connect("result.db")
    cursor = conn.cursor()
    cursor.execute("DROP TABLE `result`")
    if cursor.rowcount == -1: print("1개의 테이블이 삭제되었습니다.")
    conn.commit()

# SQL문 종류2. DML (DB Manipulation Language) : select, insert, delete, update
def selectAll():
    cursor.execute("SELECT * FROM `result` WHERE 1")
    print(cursor.fetchall())
    conn.commit()

def selectOne(FileName):
    cursor.execute("SELECT * FROM `result` WHERE FileName="+FileName)
    print(cursor.fetchall())
    conn.commit()

def insert(FileName):
    cursor.execute("INSERT INTO `result` VALUES(FileName, CURRENT_TIMESTAMP)")
    if cursor.rowcount == 1: print("1개의 레코드가 추가되었습니다.")
    conn.commit()

def delete(FileName):
    cursor.execute("DELETE FROM `result` WHERE FileName=FileName")
    if cursor.rowcount == 1: print("1개의 레코드가 삭제되었습니다.")
    conn.commit()

if __name__ == '__main__':
    conn = setDB()
    cursor = setCursor(conn)
    create()
    # drop('FileName')
    # insert('FileName')
    # delete('FileName')
    # selectAll()

    