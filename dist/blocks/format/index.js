"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Code = react_1.default.lazy(() => Promise.resolve().then(() => require('./code')));
const Html = react_1.default.lazy(() => Promise.resolve().then(() => require('./html')));
const Preformatted = react_1.default.lazy(() => Promise.resolve().then(() => require('./preformatted')));
const Pullquote = react_1.default.lazy(() => Promise.resolve().then(() => require('./pullquote')));
exports.default = {
    Code,
    Html,
    Preformatted,
    Pullquote
};
//# sourceMappingURL=index.js.map