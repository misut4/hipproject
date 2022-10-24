(() => {
var exports = {};
exports.id = 441;
exports.ids = [441,246];
exports.modules = {

/***/ 860:
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ 663:
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ 203:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const express = __webpack_require__(860);
const router = express.Router;
const { getById , getAll , createPrj  } = __webpack_require__(511);
router("/getbyid", getById);
router("/getallprj", getAll);
router("/create", createPrj);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [511], () => (__webpack_exec__(203)));
module.exports = __webpack_exports__;

})();