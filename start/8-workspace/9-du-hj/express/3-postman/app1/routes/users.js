const express = require('express')

// API를 루팅하는 객체
const router = express.Router()

// Mock DB 객체
const User = require("../models/User")

console.log(User)

// 유저ID로 유저 한명을 조회하는 API
router.get("/:userId?", (req, res) => {
  const { userId } = req.params
  if (userId) {
    for (let i = 0; i < User.length; i++) {
      if (User[i].userId == userId) {
        return res.send(User[i])
      }
    }
    return res.status(404).send("user not found")
  }
  return res.send(User)
})

// 유저를 생성하는 API
router.post("/create", (req, res) => {
  const { userId, password, info } = req.body
  User.push({ userId, password, info })
  return res.send(User)
})

// 유저 삭제 API : Delete user (* 참고로 DELETE 말고 POST로도 구현 가능)
router.delete("/:userId", (req, res) => {
  for (let i = 0; i < User.length; i++) {
    // userId를 가진 유저 정보를 찾는다.
    if (User[i].userId == req.params.userId) {
      // 유저 정보를 삭제하고 남은 유저들의 정보를 리턴한다.
      User.splice(i, 1)
      return res.send(User)
    }
  }
  // userId를 가진 유저가 없으면 404를 리턴한다.
  return res.status(404).send("user not found")
})

module.exports = router
