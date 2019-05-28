Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("@loadable/component");
const Code = component_1.default(() => Promise.resolve().then(() => require('./code')));
const Html = component_1.default(() => Promise.resolve().then(() => require('./html')));
const Preformatted = component_1.default(() => Promise.resolve().then(() => require('./preformatted')));
const Pullquote = component_1.default(() => Promise.resolve().then(() => require('./pullquote')));
exports.default = {
    Code,
    Html,
    Preformatted,
    Pullquote
};
//# sourceMappingURL=index.js.map