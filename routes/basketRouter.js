// Import
const express = require("express");
const Basket = require("../models/Basket");
const controller = require("../controllers/basketController");
const auth = require("../middlewares/auth");
// Router
const router = express.Router();


// 장바구니 페이지
router.get("/", (req, res) => res.send("장바구니 페이지"));

// 장바구니에 추가
router.post("/:uid/:pid", auth.requirePrivateOnlyMine,  controller.addOne);
// 장바구니에서 제거
router.delete("/:uid/:pid", auth.requirePrivateOnlyMine, controller.removeOne);
// 장바구니 가져오기
router.get("/:uid", auth.requirePrivateOnlyMine, controller.findAll);

module.exports=router;