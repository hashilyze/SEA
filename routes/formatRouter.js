// Import
const express = require("express");
// Router
const router = express.Router();


// 형식 생성
router.post("/", (req, res) => res.send("형식 생성"));
// 형식 검색
router.get("/search", (req, res) => res.send("형식 검색"));
// 형식 가져오기
router.get("/:fid", (req, res) => res.send("형식 가져오기"));
// 형식 정보 수정
router.put("/:fid", (req, res) => res.send("형식 정보 수정"));
// 형식 삭제
router.delete("/:fid", (req, res) => res.send("형식 삭제"));

module.exports=router;