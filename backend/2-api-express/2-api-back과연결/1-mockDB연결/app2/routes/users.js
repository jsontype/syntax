const express = require("express")

// API URI를 라우팅하는 객체
const router = express.Router()

// Mock DB 객체
const User = require("../models/User")

// [GET] /users/:userId : ID에 해당하는 유저 정보 조회
router.get("/:userId?", (_req, res) => {
  const userId = _req.params.userId
  if (userId) {
    for (let i = 0; i < User.length; i++) {
      if (userId === User[i].userId) {
        return res.send(User[i])
      }
    }
    return res.status(404).send("User not found")
  }
  // [GET] /users : 유저 리스트 조회
  return res.send(User)
})

// [POST] /create : 유저 생성
router.post("/create", (req, res) => {
  const userId = req.body.userId
  const password = req.body.password
  const name = req.body.name
  const newUser = { userId, password, name }
  User.push(newUser)
  return res.send(User)
})

// [PUT] /update/:userId : ID에 해당하는 유저 정보 수정
router.put("/update/:userId", (req, res) => {
  const userId = req.params.userId
  const password = req.body.password
  const name = req.body.name
  for (let i = 0; i < User.length; i++) {
    if (userId === User[i].userId) {
      User[i] = { userId, password, name }
      return res.send(User[i])
    }
  }
  return res.status(404).send("User not found")
})

// [DELETE] /delete/:userId : ID에 해당하는 유저 정보 삭제
router.delete("/delete/:userId", (req, res) => {
  const userId = req.params.userId
  for (let i = 0; i < User.length; i++) {
    if (userId === User[i].userId) {
      User.splice(i, 1)
      return res.send(User)
    }
  }
  return res.status(404).send("User not found")
})

module.exports = router
