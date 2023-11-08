// Import
const express = require("express");
// Router
const router = express.Router();


// 장바구니 페이지
router.get("/", (req, res) => res.send("장바구니 페이지"));

// 장바구니에 추가
router.post("/:uid/:pid", (req, res) => res.send("장바구니에 추가"));
// 장바구니에서 제거
router.delete("/:uid/:pid", (req, res) => res.send("장바구니에서 제거"));
// 장바구니 가져오기
router.get("/:uid", (req, res) => res.send("장바구니 가져오기"));

module.exports=router;