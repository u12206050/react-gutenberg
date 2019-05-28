Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("@loadable/component");
const Audio = component_1.default(() => Promise.resolve().then(() => require('./audio')));
const Cover = component_1.default(() => Promise.resolve().then(() => require('./cover')));
const File = component_1.default(() => Promise.resolve().then(() => require('./file')));
const Gallery = component_1.default(() => Promise.resolve().then(() => require('./gallery')));
const Heading = component_1.default(() => Promise.resolve().then(() => require('./heading')));
const Image = component_1.default(() => Promise.resolve().then(() => require('./image')));
const List = component_1.default(() => Promise.resolve().then(() => require('./list')));
const Paragraph = component_1.default(() => Promise.resolve().then(() => require('./paragraph')));
const Quote = component_1.default(() => Promise.resolve().then(() => require('./quote')));
const Video = component_1.default(() => Promise.resolve().then(() => require('./video')));
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