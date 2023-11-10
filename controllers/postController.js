const Post = require("../models/Post");
const View = require("../models/View");
const Like = require("../models/Like");
const Download = require("../models/Download");
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
    let filter = {
        title: req.query.title,
        description: req.query.description,
        min_price: req.query.min_price,
        max_price: req.query.max_price,

        writer: req.query.writer,
        writer_name: req.query.writer_name,
        category: req.query.category,
        category_name: req.query.category_name,
        format: req.query.format,
        format_name: req.query.format_name,
        
        key: req.query.key,
        order: req.query.order,
        limit: parseInt(req.query.limit),
        offset: parseInt(req.query.offset)
    };
    try {
        let posts = await Post.findAll(filter);
        res.send({ ...utility.getSuccess(), posts });
    } catch (err) {
        utility.errorHandle(err, req, res);
    }
};


// 조회수 증가
exports.upViews = async function(req, res) {
    let pid = req.params.pid;
    let uid = req.session.uid;

    try {
        if(uid) await View.create({pid, uid});
        await Post.addViewsById(pid, 1);
        res.send({ ...utility.getSuccess() });
    } catch (err) {
        utility.errorHandle(err, req, res);
    }
};


// 추천수 증가
exports.upLikes = async function(req, res) {
    let pid = req.params.pid;
    let uid = req.session.uid;

    try {
        Like.findById({pid, uid}).then((data) => {
            utility.errorHandle({kind: "forbidden"}, req, res);
        }).catch(async (err) => {
            await Post.addLikesById(pid, 1);
            await Like.create({pid, uid});
            res.send({ ...utility.getSuccess() });
        });
    } catch (err) {
        utility.errorHandle(err, req, res);
    }
};


// 다운로드수 증가
exports.upDownloads = async function(req, res) {
    let pid = req.params.pid;
    let uid = req.session.uid;

    try {
        Download.findById({pid, uid}).then((data) => {
            utility.errorHandle({kind: "forbidden"}, req, res);
        }).catch(async (err) => {
            await Post.addDownloadsById(pid, 1);
            await Download.create({pid, uid});
            res.send({ ...utility.getSuccess() });
        });
        
    } catch (err) {
        utility.errorHandle(err, req, res);
    }
};