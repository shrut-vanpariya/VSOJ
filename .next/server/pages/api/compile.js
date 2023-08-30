"use strict";
(() => {
var exports = {};
exports.id = 749;
exports.ids = [749];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 76:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 81:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fcompile_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fcompile_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/compile.js
var compile_namespaceObject = {};
__webpack_require__.r(compile_namespaceObject);
__webpack_require__.d(compile_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(305);
// EXTERNAL MODULE: ./src/utils/cppRunner.js
var cppRunner = __webpack_require__(197);
var cppRunner_default = /*#__PURE__*/__webpack_require__.n(cppRunner);
;// CONCATENATED MODULE: ./src/pages/api/compile.js

// const cppRunner = require('./cppRunner'); 
function handler(req, res) {
    if (req.method === "POST") {
        const { code, input } = req.body;
        const { stdout, stderr, error } = cppRunner_default()(code, input);
        if (error) {
            return res.status(500).json({
                error: "Execution error"
            });
        } else {
            return res.status(200).json({
                stdout,
                stderr
            });
        }
    } else {
        res.status(405).end();
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fcompile&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fcompile.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fcompile_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fcompile_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(compile_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(compile_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/compile",
        pathname: "/api/compile",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: compile_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ }),

/***/ 197:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { spawnSync } = __webpack_require__(81);
const fs = __webpack_require__(147);
// Export a function that takes code and input as parameters
module.exports = function runCppCode(code, input) {
    // Write the C++ code to a temporary .cpp file
    fs.writeFileSync("temp.cpp", code);
    // Compile the C++ code using g++
    try {
        const { stderr } = spawnSync("g++", [
            "-std=c++17",
            "temp.cpp",
            "-o",
            "temp"
        ], {
            stdio: "pipe",
            encoding: "utf-8"
        });
        if (stderr) {
            return {
                stdout: null,
                stderr: stderr,
                error: false
            };
        }
    // console.log('Compilation successful.');
    } catch (error) {
        console.error("Compilation failed.");
        process.exit(1);
    } finally{
        // Delete the temporary .cpp file
        fs.unlinkSync("temp.cpp");
    }
    // Run the compiled executable
    try {
        const childProcess = spawnSync("./temp", {
            input,
            timeout: 3000,
            encoding: "utf-8",
            stdio: [
                "pipe",
                "pipe",
                "pipe"
            ] // Capture stdout, stderr, and provide input
        });
        return {
            stdout: childProcess.stdout,
            stderr: childProcess.stderr,
            error: false
        };
    } catch (error) {
        console.error("Execution failed.");
        return {
            stdout: null,
            stderr: null,
            error: true
        };
    } finally{
        // Delete the compiled executable
        try {
            fs.unlinkSync(process.platform === "win32" ? "temp.exe" : "temp");
        } catch (unlinkError) {
            console.error("Error deleting the temporary executable:", unlinkError);
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(628)));
module.exports = __webpack_exports__;

})();