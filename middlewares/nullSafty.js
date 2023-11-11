const utility = require("../controllers/utility");
const Post = require("../models/Post");
const User = require("../models/User");
const Category = require("../models/Category");
const Format = require("../models/Format");


// 게시물 안전 접근
exports.ensurePost = async function (req, res, next){
    let pid = req.params.pid;
    try{
        await Post.findById(pid);
        console.log(`Exsit Post(${pid})`);
        next();
    } catch(err){
        console.log(`Not Exsit Post(${pid})`);
        utility.errorHandle({kind:"bad_request"}, req, res);
    }
};

// 사용자 안전 접근
exports.ensureUser = async function(req, res, next){
    let uid = req.params.uid;
    try{
        await User.findById(uid);
        console.log(`Exsit User(${uid})`);
        next();
    } catch(err){
        console.log(`Not Exsit User(${uid})`);
        utility.errorHandle({kind:"bad_request"}, req, res);
    }
};

// 카테고리 안전 접근
exports.ensureCategory = async function(req, res, next){
    let cid = req.params.cid;
    try{
        await Category.findById(cid);
        console.log(`Exsit Category(${cid})`);
        next();
    } catch(err){
        console.log(`Not Exsit Category(${cid})`);
        utility.errorHandle({kind:"bad_request"}, req, res);
    }
};

// 형식 안전 접근
exports.ensureFormat = async function(req, res, next){
    let fid = req.params.fid;
    try{
        await Format.findById(fid);
        console.log(`Exsit Format(${fid})`);
        next();
    } catch(err){
        console.log(`Not Exsit Format(${fid})`);
        utility.errorHandle({kind:"bad_request"}, req, res);
    }
};
