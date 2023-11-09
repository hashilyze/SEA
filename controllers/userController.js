const User = require("../models/User");
const utility = require("./utility");


// 사용자 생성
exports.create = async function (req, res) {
    let newUser = new User(req.body);
    
    try {
        let id = await User.create(newUser);
        res.status(201).send({ ...utility.getSuccess(), uid: id });
    } catch (err) {
        utility.errorHandle(err, req, res);
    }
};


// 사용자 가져오기
exports.findOne = async function (req, res) {
    let uid = req.params.uid

    try {
        let user = await User.findById(uid);
        res.send({ ...utility.getSuccess(), user });
    } catch (err) {
        utility.errorHandle(err, req, res);
    }
};


// 사용자 수정
exports.updateOne = async function (req, res) {
    let uid = req.params.uid;
    let updateInfo = new User(req.body);

    try {
        await User.updateById(uid, updateInfo);
        res.send(utility.getSuccess());
    } catch (err) {
        utility.errorHandle(err, req, res);
    }
};


// 사용자 삭제
exports.deleteOne = async function (req, res) {
    let uid = req.params.uid;

    try {
        await User.deleteById(uid);
        res.send(utility.getSuccess());
    } catch (err) {
        utility.errorHandle(err, req, res);
    }
}


// 사용자 검색
exports.findAll = async function (req, res) {
    try {
        let users = await User.findAll({ name: req.query.name || null });
        res.send({ ...utility.getSuccess(), users });
    } catch (err) {
        utility.errorHandle(err, req, res);
    }
};