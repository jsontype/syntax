const express = require("express")

// API URLのRouter
const router = express.Router()

// Mock DB
const User = require("../models/User")

/* API Routes List */
// [GET] /users/:userId : IDに該当するユーザー照会
router.get("/:userId?", (req, res) => {
  const userId = req.params.userId
  if (userId) {
    User.findById(userId, (err, user) => {
      if (err) return res.status(500).send("Database error")
      if (!user) return res.status(404).send("User not found")
      return res.send(user)
    })
  } else {
    User.findAll((err, users) => {
      if (err) return res.status(500).send("Database error")
      return res.send(users)
    })
  }
})

// [POST] /create : ユーザー登録
router.post("/create", (req, res) => {
  const { userId, password, name } = req.body
  User.create({ userId, password, name }, (err) => {
    if (err) return res.status(500).send("Database error")
    return res.send("User created successfully")
  })
})

// [PUT] /update/:userId : IDに該当するユーザー情報更新
router.put("/update/:userId", (req, res) => {
  const userId = req.params.userId
  const { password, name } = req.body
  User.update(userId, { password, name }, (err) => {
    if (err) return res.status(500).send("Database error")
    return res.send("User updated successfully")
  })
})

// [DELETE] /delete/:userId : IDに該当するユーザー削除
router.delete("/delete/:userId", (req, res) => {
  const userId = req.params.userId
  User.delete(userId, (err) => {
    if (err) return res.status(500).send("Database error")
    return res.send("User deleted successfully")
  })
})

module.exports = router
