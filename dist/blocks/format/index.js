Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Code = React.lazy(() => Promise.resolve().then(() => require('./code')));
const Html = React.lazy(() => Promise.resolve().then(() => require('./html')));
const Preformatted = React.lazy(() => Promise.resolve().then(() => require('./preformatted')));
const Pullquote = React.lazy(() => Promise.resolve().then(() => require('./pullquote')));
exports.default = {
    Code,
    Html,
    Preformatted,
    Pullquote
};
//# sourceMappingURL=index.js.map