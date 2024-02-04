"use strict";
(self["webpackChunk_jupyterlab_examples_main_menu"] = self["webpackChunk_jupyterlab_examples_main_menu"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Initialization data for the main menu example.
 */
const extension = {
    id: 'main-menu',
    autoStart: true,
    activate: (app) => {
        const { commands } = app;
        // Add a command
        const command = 'jlab-examples:main-menu';
        commands.addCommand(command, {
            label: 'Execute jlab-examples:main-menu Command',
            caption: 'Execute jlab-examples:main-menu Command',
            execute: (args) => {
                console.log(`jlab-examples:main-menu has been called ${args['origin']}.`);
            },
        });
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extension);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.50ea5199b174827920cd.js.map