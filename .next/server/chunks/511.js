"use strict";
exports.id = 511;
exports.ids = [511];
exports.modules = {

/***/ 963:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { default: mongoose  } = __webpack_require__(663);
const projectSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    name: {
        type: String
    },
    location: {
        type: String
    },
    post_date: {
        type: Date
    },
    end_date: {
        type: Date
    },
    skill: {
        type: String
    },
    field: {
        type: String
    },
    criteria: {
        type: Array
    },
    uni: {
        type: String
    },
    amount: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: Array
    }
});
module.exports = mongoose.model("Project", projectSchema);


/***/ }),

/***/ 511:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const Project = __webpack_require__(963);
//DEDICATED FUNCTIONS=========================================================
async function findbyId(req, res) {
    const id = req.query.id;
    console.log(req.query.id);
    console.log(id);
    const project = await Project.findOne({
        _id: id
    });
    console.log(project);
    if (!project) {
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
    Project.find().then((project)=>{
        return res.json(project);
    }).catch((err)=>{
        console.log(err);
    });
}
async function createOne(req, res) {
    const name = req.body.name;
    const location = req.body.location;
    const post_date = req.body.post_date;
    const end_date = req.body.end_date;
    const skill = req.body.skill;
    const field = req.body.field;
    const criteria = req.body.criteria;
    const uni = req.body.uni;
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;
    // if (!email || !username || !password) {
    //     res.status(422).json({ error: "Please add all the fields" })
    // }
    //make password not show on database
    // req.user.password = undefined
    const project = new Project({
        //key and value are the same so only need to type one
        name,
        location,
        post_date,
        end_date,
        skill,
        field,
        criteria,
        uni,
        amount,
        description,
        category
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
const createPrj = (req, res)=>{
    createOne(req, res);
};
//REST API PUT=================================================
//REST API DELETE=================================================
const handler = async (req, res)=>{
    try {
        res.status(200).json({
            message: JSON.stringify(req.headers, 2)
        });
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
};
module.exports = {
    getById,
    getAll,
    createPrj,
    handler
};


/***/ })

};
;