// Import
const express = require("express");
const User = require("../models/User");
const controller = require("../controllers/userController");
// Router
const router = express.Router();


// 사용자 생성
router.post("/", controller.create);
// 사용자 검색
router.get("/search", controller.findAll);
// 사용자 가져오기
router.get("/:uid", controller.findOne);
// 사용자 정보 수정
router.put("/:uid", controller.updateOne);
// 사용자 삭제
router.delete("/:uid", controller.deleteOne);

module.exports=router;