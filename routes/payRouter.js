// Import
const express = require("express");
// Router
const router = express.Router();

// 결제 페이지
router.get("/checkout", (req, res) => res.send("결제 페이지"));

// 결제
router.post("/pay", (req, res) => res.send("결제하기"));
// 즉시 결제
router.post("/pay/:pid", (req, res) => res.send("즉시 결제하기"));

module.exports=router;