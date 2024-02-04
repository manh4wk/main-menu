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
    id: 'domino-menu',
    autoStart: true,
    activate: (app) => {
        const { commands } = app;
        // User Logs
        const command1 = 'jlab-examples:main-menu1';
        commands.addCommand(command1, {
            label: 'Execute jlab-examples:main-menu1 Command',
            caption: 'Execute jlab-examples:main-menu Command1',
            execute: (args) => {
                console.log(`jlab-examples:main-menu1 has been called ${args['origin']}.`);
            },
        });
        // User Logs
        const command2 = 'jlab-examples:main-menu2';
        commands.addCommand(command2, {
            label: 'Execute jlab-examples:main-menu2 Command',
            caption: 'Execute jlab-examples:main-menu2 Command',
            execute: (args) => {
                console.log(`jlab-examples:main-menu2 has been called ${args['origin']}.`);
            },
        });
        // User Logs
        const command3 = 'jlab-examples:main-menu3';
        commands.addCommand(command3, {
            label: 'Execute jlab-examples:main-menu3 Command',
            caption: 'Execute jlab-examples:main-menu3 Command',
            execute: (args) => {
                console.log(`jlab-examples:main-menu3 has been called ${args['origin']}.`);
            },
        });
        // User Logs
        const command4 = 'jlab-examples:main-menu4';
        commands.addCommand(command4, {
            label: 'Execute jlab-examples:main-menu4 Command',
            caption: 'Execute jlab-examples:main-menu4 Command',
            execute: (args) => {
                console.log(`jlab-examples:main-menu4 has been called ${args['origin']}.`);
            },
        });
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extension);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.c72b6247c4c067a528e6.js.map