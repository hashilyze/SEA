// Import
const express = require("express");
// Router
const router = express.Router();


// 사용자 생성
router.post("/", (req, res) => res.send("사용자 생성"));
// 사용자 검색
router.get("/search", (req, res) => res.send("사용자 검색"));
// 사용자 가져오기
router.get("/:uid", (req, res) => res.send("사용자 가져오기"));
// 사용자 정보 수정
router.put("/:uid", (req, res) => res.send("사용자 정보 수정"));
// 사용자 삭제
router.delete("/:uid", (req, res) => res.send("사용자 삭제"));

module.exports=router;