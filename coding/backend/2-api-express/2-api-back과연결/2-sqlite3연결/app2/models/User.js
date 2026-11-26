const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("users.db")

const User = {
  findAll: (callback) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
      if (err) return callback(err)
      return callback(null, rows)
    })
  },

  findById: (userId, callback) => {
    db.get("SELECT * FROM users WHERE userId = ?", [userId], (err, row) => {
      if (err) return callback(err)
      return callback(null, row)
    })
  },

  create: (newUser, callback) => {
    const { userId, password, name } = newUser
    db.run(
      "INSERT INTO users (userId, password, name) VALUES (?, ?, ?)",
      [userId, password, name],
      (err) => {
        if (err) return callback(err)
        return callback(null)
      }
    )
  },

  update: (userId, updatedUser, callback) => {
    const { password, name } = updatedUser
    db.run(
      "UPDATE users SET password = ?, name = ? WHERE userId = ?",
      [password, name, userId],
      (err) => {
        if (err) return callback(err)
        return callback(null)
      }
    )
  },

  delete: (userId, callback) => {
    db.run("DELETE FROM users WHERE userId = ?", [userId], (err) => {
      if (err) return callback(err)
      return callback(null)
    })
  },
}

module.exports = User
