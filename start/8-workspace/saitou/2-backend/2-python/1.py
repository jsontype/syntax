import sqlite3

def connect():
  conn = sqlite3.connect("study1.db")

def create():
  conn = sqlite3.connect("study1.db")
  cursor = conn.cursor()
  sql = "CREATE TABLE user_table(no INT, id VARCHAR(50), username VARCHAR(50));"
  cursor.execute(sql)
  print("1 table created")
  conn.close()

def insert(table, data):
  # connect
  conn = sqlite3.connect("study1.db")
  cursor = conn.cursor()
  # SQL Query
  sql = f"INSERT INTO {table} (no, id, username) VALUES (?, ?, ?)"
  # query start
  try:
      cursor.execute(sql, (data['no'], data['id'], data['username']))
      conn.commit()
      print("1 record(row) inserted")
  # error
  except sqlite3.Error as e:
      print(f"Error: {e}")
  # destory
  finally:
      conn.close()

insert("user_table", {'no': '5', 'id': 'yang5', 'username': 'yangyang5'})
