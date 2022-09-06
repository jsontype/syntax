# SQLite

from os import name
import sqlite3

def setDB():
    conn = sqlite3.connect("kospi.db")
    return conn

def setCursor(conn):
    cursor = conn.cursor()
    return cursor

def commit(conn):
    conn.commit()

# DB/TABLE SCHEMA : DDL(DB Definition Language)
def create(company):
    cursor.execute("CREATE TABLE "+company+"(Date text, Open int, High int, Low int, Closing int, Volume int)")
    if cursor.rowcount == -1: print("1 table created") # db/table schema = -1
    commit(conn)

def drop(company):
    cursor.execute("DROP TABLE "+company)
    if cursor.rowcount == -1: print("1 table dropped") # db/table schema = -1
    commit(conn)


# RECORD SCHEMA : DML(DB Manipulation Language)
def insert(company):
    cursor.execute("INSERT INTO "+company+" VALUES('21.06.04', 97000, 98600, 96900, 98000, 321405)")
    print(cursor.rowcount, "개의 행이 추가되었습니다.") # record schema >= 0
    commit(conn)

def select(company):
    cursor.execute("SELECT * FROM "+company+" WHERE 1")
    print(cursor.fetchall()) # record schema >= 0
    commit(conn)

def update(company):
    cursor.execute("UPDATE "+company+" SET `Volume`=999999 WHERE Date='21.06.04'")
    print(cursor.rowcount, "개의 행이 추가되었습니다.") # record schema >= 0
    commit(conn)

def delete(company):
    cursor.execute("DELETE FROM "+company+" WHERE Date='21.06.04'")
    print(cursor.rowcount, "개의 행이 삭제되었습니다.") # record schema >= 0
    commit(conn)

if __name__ == '__main__':
    conn = setDB()
    cursor = setCursor(conn)
    if conn and cursor:
        print('성공적으로 연결되었습니다.', type(conn))
    # drop('samsung')
    # create('samsung')
    insert('samsung')
    update('samsung')
    # delete('samsung')
    select('samsung')
    conn.close()