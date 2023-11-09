// Import
const express = require("express");
const Basket = require("../models/Basket");
const controller = require("../controllers/basketController");
// Router
const router = express.Router();


// 장바구니 페이지
router.get("/", (req, res) => res.send("장바구니 페이지"));

// 장바구니에 추가
router.post("/:uid/:pid", controller.addOne);
// 장바구니에서 제거
router.delete("/:uid/:pid", controller.removeOne);
// 장바구니 가져오기
router.get("/:uid", controller.findAll);

module.exports=router;