"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Audio = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require('./audio'); }); });
var Cover = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require('./cover'); }); });
var File = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require('./file'); }); });
var Gallery = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require('./Gallery'); }); });
var Heading = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require('./Heading'); }); });
var Image = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require('./image'); }); });
var List = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require('./list'); }); });
var Paragraph = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require('./Paragraph'); }); });
var Quote = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require('./quote'); }); });
var Video = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require('./video'); }); });
exports.default = {
    Audio: Audio,
    Cover: Cover,
    File: File,
    Gallery: Gallery,
    Heading: Heading,
    Image: Image,
    List: List,
    Paragraph: Paragraph,
    Quote: Quote,
    Video: Video
};
