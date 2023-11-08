// Import
const express = require("express");
// Router
const router = express.Router();


// 게시물 열람 페이지
router.get("/read/:pid", (req, res) => res.send("게시물 열람 페이지"));
// 게시물 작성 페이지
router.post("/write", (req, res) => res.send("게시물 작성 페이지"));
// 게시물 갱신 페이지
router.put("/edit/:pid", (req, res) => res.send("게시물 갱신 페이지"));
// 게시판
router.get("/board", (req, res) => res.send("게시물 갱신 페이지"));

// 게시물 생성
router.post("/", (req, res) => res.send("게시물 생성"));
// 게시물 검색
router.get("/search", (req, res) => res.send("게시물 검색"));
// 게시물 가져오기
router.get("/:pid", (req, res) => res.send("게시물 가져오기"));
// 게시물 정보 수정
router.put("/:pid", (req, res) => res.send("게시물 정보 수정"));
// 게시물 삭제
router.delete("/:pid", (req, res) => res.send("게시물 삭제"));

// 조회수 증가
router.post("/:pid/up-views", (req, res) => res.send("조회수 증가"));
// 추천수 증가
router.post("/:pid/up-likes", (req, res) => res.send("추천수 증가"));
// 다운로드수 증가
router.post("/:pid/up-downloads", (req, res) => res.send("다운로드수 증가"));

module.exports=router;