const Post = require("../models/Post");
const utility = require("./utility");


// 게시물 생성
exports.create = async function (req, res) {
    let newPost = new Post(req.body);

    try {
        let id = await Post.create(newPost);
        res.status(201).send({ ...utility.getSuccess(), pid: id });
    } catch (err) {
        utility.errorHandle(err, req, res);
    }
};


// 게시물 가져오기
exports.findOne = async function (req, res) {
    let pid = req.params.pid

    try{
        let post = await Post.findById(pid);
        res.send({ ...utility.getSuccess(), post });
    }catch(err){
        utility.errorHandle(err, req, res);
    }
};


// 게시물 수정
exports.updateOne = async function (req, res){
    let pid = req.params.pid;
    let updateInfo = new Post(req.body);

    try {
        await Post.updateById(pid, updateInfo);
        res.send(utility.getSuccess());
    } catch (err) {
        utility.errorHandle(err, req, res);
    }
};


// 게시물 삭제
exports.deleteOne = async function (req, res) {
    let pid = req.params.pid;

    try {
        await Post.deleteById(pid);
        res.send(utility.getSuccess());
    } catch (err) {
        utility.errorHandle(err, req, res);
    }
};


// 게시물 검색
exports.findAll = async function (req, res) {
    try {
        let posts = await Post.findAll();
        res.send({ ...utility.getSuccess(), posts });
    } catch (err) {
        utility.errorHandle(err, req, res);
    }
};