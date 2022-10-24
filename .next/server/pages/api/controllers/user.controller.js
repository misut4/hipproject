"use strict";
(() => {
var exports = {};
exports.id = 73;
exports.ids = [73,246];
exports.modules = {

/***/ 663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 510:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { default: mongoose  } = __webpack_require__(663);
const userSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    name: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    skillset: {
        type: Array
    },
    uni: {
        type: String
    },
    prj_id: {
        type: String
    },
    avatar: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/147/147142.png"
    }
});
module.exports = mongoose.model("User", userSchema);


/***/ }),

/***/ 593:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const User = __webpack_require__(510);
//DEDICATED FUNCTIONS=========================================================
async function findbyId(req, res) {
    const id = req.query.id;
    console.log(req.query.id);
    console.log(id);
    const user = await User.findOne({
        _id: id
    });
    console.log(user);
    if (!user) {
        return res.status(200).json({
            msg: "failed",
            code: 400
        });
    }
    return res.status(200).json({
        msg: "success",
        code: 200
    });
}
async function findAll(req, res) {
    User.find().then((user)=>{
        return res.json(user);
    }).catch((err)=>{
        console.log(err);
    });
}
async function createOne(req, res) {
    const name = req.body.name;
    const password = req.body.password;
    const skillset = req.body.skillset;
    const uni = req.body.uni;
    const avatar = req.body.avatar;
    const prj_id = req.body.prj_id;
    // if (!email || !username || !password) {
    //     res.status(422).json({ error: "Please add all the fields" })
    // }
    //make password not show on database
    // req.user.password = undefined
    const user = new User({
        //key and value are the same so only need to type one
        name,
        password,
        email,
        skillset,
        uni,
        prj_id,
        avatar
    });
    user.save().then((result)=>{
        return res.json(result);
    }).catch((err)=>{
        console.log(err);
    });
}
//=====================================================================================
//REST API GET=================================================
const getById = (req, res)=>{
    findbyId(req, res);
};
const getAll = (req, res)=>{
    findAll(req, res);
};
//REST API POST=================================================
const createUser = (req, res)=>{
    createOne(req, res);
};
//REST API PUT=================================================
//REST API DELETE=================================================
module.exports = {
    getById,
    getAll,
    createUser
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(593));
module.exports = __webpack_exports__;

})();