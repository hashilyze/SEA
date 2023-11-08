// Import
const express = require("express");
// Router
const router = express.Router();

// 로그인 페이지
router.get("/sign-in", (req, res) => res.send("로그인 페이지"));
// 회원가입 페이지
router.get("/sign-up", (req, res) => res.send("회원가입 페이지"));

// 로그인
router.post("/sign-in", (req, res) => res.send("로그인 후, 응답"));
// 로그아웃
router.post("/sign-out", (req, res) => res.send("로그아웃 후, 응답"));
// 로그인 상태 조회
router.get("/state", (req, res) => res.send("현재 로그인 상태와, 사용자 uid 받기"));

module.exports=router;