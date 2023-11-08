// Import
const express = require("express");
// Router
const router = express.Router();


// 카테고리 생성
router.post("/", (req, res) => res.send("카테고리 생성"));
// 카테고리 검색
router.get("/search", (req, res) => res.send("카테고리 검색"));
// 카테고리 가져오기
router.get("/:cid", (req, res) => res.send("카테고리 가져오기"));
// 카테고리 정보 수정
router.put("/:cid", (req, res) => res.send("카테고리 정보 수정"));
// 카테고리 삭제
router.delete("/:cid", (req, res) => res.send("카테고리 삭제"));

module.exports=router;