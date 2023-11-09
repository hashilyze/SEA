// Import
const express = require("express");
const Post = require("../models/Post");
const controller = require("../controllers/postController");
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
router.post("/", controller.create);
// 게시물 검색
router.get("/search", controller.findAll);
// 게시물 가져오기
router.get("/:pid", controller.findOne);
// 게시물 정보 수정
router.put("/:pid", controller.updateOne);
// 게시물 삭제
router.delete("/:pid", controller.deleteOne);

// 조회수 증가
router.post("/:pid/up-views", (req, res) => res.send("조회수 증가"));
// 추천수 증가
router.post("/:pid/up-likes", (req, res) => res.send("추천수 증가"));
// 다운로드수 증가
router.post("/:pid/up-downloads", (req, res) => res.send("다운로드수 증가"));

module.exports=router;