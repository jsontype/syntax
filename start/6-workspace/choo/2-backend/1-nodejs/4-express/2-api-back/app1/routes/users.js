const express = require("express")

// API URI를 라우팅하기 위해 라우터 객체를 정의한다.
const router = express.Router()

// Mock DB 객체를 호출한다.
const User = require("../model/User")

// API URI 호출시의 라우팅을 정의한다.
router.get("/:userId?", (req, res) => {
  const userId = req.params.userId
  if (userId) {
    User.map((item) => {
      if (item.userId === userId) {
        return res.json(item)
      }
    })
    // /:userId? 정보가 있지만, 해당 유저 정보가 없을 때는 404를 리턴한다.
    return res.status(404).send("해당 유저 페이지를 찾을 수 없습니다.")
  }
  // /:userId? 정보가 없을 때, 모든 유저 정보를 리턴한다.
  return res.json(User)
})

module.exports = router
