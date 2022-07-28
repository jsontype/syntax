import sqlite3

def setDB():
    conn = sqlite3.connect("kospi.db")
    return conn

def setCursor(conn):
    cursor = conn.cursor()
    return cursor

def commit(conn):
    conn.commit()

def closeDB():
    conn.close()

# ddl : dababase definition language
def create(company):
    cursor.execute("CREATE TABLE "+company+"(Date text, Open int, High int, Low int, Closing int, Volume int)")
    if cursor.rowcount == -1: print("1 table created") # rowcount of db/table schema = -1
    commit(conn)

def drop(company):
    cursor.execute("DROP TABLE "+company)
    if cursor.rowcount == -1: print("1 table dropped")
    commit(conn)
    
# dml : dababase manipulation language
def insert(company):
    cursor.execute("INSERT INTO "+company+" VALUES('21.06.04', 97000, 98600, 96900, 98000, 321405)")
    print(cursor.rowcount, "record inserted") # rowcount of record schema >= 0
    commit(conn)

def select(company):
    cursor.execute("SELECT * FROM "+company+" WHERE 1")
    print(cursor.fetchall())
    commit(conn)

def update(company):
    cursor.execute("UPDATE "+company+" SET `Volume`=999999 WHERE Date='21.06.04'")
    print(cursor.rowcount, "record updated")
    commit(conn)

def delete(company):
    cursor.execute("DELETE FROM "+company+" WHERE Date='21.06.04'")
    print(cursor.rowcount, "record deleted")
    commit(conn)

if __name__ == "__main__":    
    conn = setDB()
    cursor = setCursor(conn)
    if conn and cursor:
        print('Successfully Connected To: ', type(conn))
    