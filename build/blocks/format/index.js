"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Code = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require('./code'); }); });
var Html = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require('./html'); }); });
var Preformatted = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require('./preformatted'); }); });
var Pullquote = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require('./pullquote'); }); });
exports.default = {
    Code: Code,
    Html: Html,
    Preformatted: Preformatted,
    Pullquote: Pullquote
};
