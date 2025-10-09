const express = require("express")

// API URI를 라우팅하는 객체
const router = express.Router()

// Mock DB 객체
const User = require("../models/User")

/** API 라우트 리스트 */
// [GET] 유저 조회 API : Read users
router.get("/:userId?", (req, res) => {
  // 1. ID에 해당하는 유저 조회 : "/:userId?" 정보(=req.params.userId)가 있을 때
  const { userId } = req.params
  // req.params.userId가 있을 시 해당 유저 정보를 리턴한다.
  if (userId) {
    for (let i = 0; i < User.length; i++) {
      if (User[i].userId == userId) {
        return res.send(User[i])
      }
    }
    // req.params.userId의 해당 유저 정보가 존재하지 않으면 404를 리턴한다.
    return res.status(404).send("user not found")
  }
  // 2. 전체 유저 목록 조회 : "/:userId?" 정보가 없을 때 모든 유저 정보를 리턴한다.
  return res.send(User)
})

// [POST] 유저 생성 API : Create user
router.post("/create", (req, res) => {
  const { userId, password, info } = req.body
  User.push({ userId, password, info })
  return res.send(User)
})

// [DELETE] 유저 삭제 API : Delete user
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
