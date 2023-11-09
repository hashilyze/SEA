// Import
const express = require("express");
const Category = require("../models/Category");
const controller = require("../controllers/categoryController");
// Router
const router = express.Router();


// 카테고리 생성
router.post("/", controller.create);
// 카테고리 검색
router.get("/search", controller.findAll);
// 카테고리 가져오기
router.get("/:cid", controller.findOne);
// 카테고리 정보 수정
router.put("/:cid", controller.updateOne);
// 카테고리 삭제
router.delete("/:cid", controller.deleteOne);


module.exports=router;