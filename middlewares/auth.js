const utility = require("../controllers/utility")


exports.isPublic = (session) => true;
exports.isPrivate = (session) => Boolean(session.uid);
exports.isAdmin = (session) => this.isPrivate(session) && Boolean(session.role);


// 비회원 이상
exports.requirePublic = function(req, res, next){
    console.log("Access public domain");
    next();
};

// 회원 이상
exports.requirePrivate = function(req, res, next){
    if(this.isPrivate(req.session)){
        console.log("Access private domain");
        next();
    } else{
        console.log("Deny private domain");
        res.status(401).send(utility.getFail());
    }
};

// 관리자 이상
exports.requireAdmin = function(req, res, next){
    if(this.isAdmin(req.session)){
        console.log("Access admin domain");
        next();
    } else{
        console.log("Deny admin domain");
        res.status(401).send(utility.getFail());
    }
};