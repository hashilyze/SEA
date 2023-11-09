// Import
const express = require("express");
const Format = require("../models/Format");
const controller = require("../controllers/formatController");
// Router
const router = express.Router();


// 형식 생성
router.post("/", controller.create);
// 형식 검색
router.get("/search", controller.findAll);
// 형식 가져오기
router.get("/:fid", controller.findOne);
// 형식 정보 수정
router.put("/:fid", controller.updateOne);
// 형식 삭제
router.delete("/:fid", controller.deleteOne);

module.exports=router;