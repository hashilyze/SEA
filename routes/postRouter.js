// Import
const express = require("express");
const Post = require("../models/Post");
const controller = require("../controllers/postController");
const auth = require("../middlewares/auth");
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
router.post("/", auth.requirePrivate, controller.create);
// 게시물 검색
router.get("/search", controller.findAll);
// 게시물 가져오기
router.get("/:pid", controller.findOne);
// 게시물 정보 수정
router.put("/:pid", auth.extractWriter, auth.requirePrivateOnlyMine, controller.updateOne);
// 게시물 삭제
router.delete("/:pid", auth.extractWriter, auth.requirePrivateOnlyMine, controller.deleteOne);

// 조회수 증가
router.post("/:pid/up-views", controller.upViews);
// 추천수 증가
router.post("/:pid/up-likes", auth.requirePrivate, controller.upLikes);
// 다운로드수 증가
router.post("/:pid/up-downloads", auth.requirePrivate, controller.upDownloads);

module.exports=router;