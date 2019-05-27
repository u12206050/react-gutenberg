"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Audio = react_1.default.lazy(() => Promise.resolve().then(() => require('./audio')));
const Cover = react_1.default.lazy(() => Promise.resolve().then(() => require('./cover')));
const File = react_1.default.lazy(() => Promise.resolve().then(() => require('./file')));
const Gallery = react_1.default.lazy(() => Promise.resolve().then(() => require('./gallery')));
const Heading = react_1.default.lazy(() => Promise.resolve().then(() => require('./heading')));
const Image = react_1.default.lazy(() => Promise.resolve().then(() => require('./image')));
const List = react_1.default.lazy(() => Promise.resolve().then(() => require('./list')));
const Paragraph = react_1.default.lazy(() => Promise.resolve().then(() => require('./paragraph')));
const Quote = react_1.default.lazy(() => Promise.resolve().then(() => require('./quote')));
const Video = react_1.default.lazy(() => Promise.resolve().then(() => require('./video')));
exports.default = {
    Audio,
    Cover,
    File,
    Gallery,
    Heading,
    Image,
    List,
    Paragraph,
    Quote,
    Video
};
//# sourceMappingURL=index.js.map