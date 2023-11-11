// Import
const express = require("express");
const controller = require("../controllers/payController");
const auth = require("../middlewares/auth");
const nullSafty = require("../middlewares/nullSafty");
// Router
const router = express.Router();

// 결제 페이지
router.get("/checkout", (req, res) => res.send("결제 페이지"));


// 결제
router.post("/", 
    auth.requirePrivate, 
    controller.payOnBasket);
// 즉시 결제
router.post("/:pid", 
    auth.requirePrivate, 
    nullSafty.ensurePost,
    controller.onePay);

module.exports=router;