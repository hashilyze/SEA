const User = require("../models/User");
const utility = require("./utility");
const auth = require("../middlewares/auth");


// 로그인
exports.signin = async function (req, res){
    let { login_id, password } = req.body;
    try{
        let user = await User.findByLoginId(login_id);
        if(user.password == password){
            req.session.uid = user.uid;
            req.session.role = user.role;
            res.send(utility.getSuccess());
        } else{
            res.status(401).send(utility.getFail());    
        }
    } catch(err){
        utility.errorHandle(err, req, res);
    }
};

// 로그아웃
exports.signout = function(req, res){
    req.session.uid = undefined;
    req.session.role = undefined;
    res.send(utility.getSuccess());
};


// 로그인 상태 반환
exports.whoOnline = function (req, res){
    let resBody = utility.getSuccess();
    if(!auth.isPrivate(req.session)){
        resBody.state = "public";
    } else {
        resBody.uid = req.session.uid;
        if(!auth.isAdmin(req.session)){
            resBody.state = "private";
        } else{
            resBody.state = "admin";
        }
    }
    res.send(resBody);
}