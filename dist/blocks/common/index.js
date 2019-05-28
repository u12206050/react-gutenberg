Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Audio = React.lazy(() => Promise.resolve().then(() => require('./audio')));
const Cover = React.lazy(() => Promise.resolve().then(() => require('./cover')));
const File = React.lazy(() => Promise.resolve().then(() => require('./file')));
const Gallery = React.lazy(() => Promise.resolve().then(() => require('./gallery')));
const Heading = React.lazy(() => Promise.resolve().then(() => require('./heading')));
const Image = React.lazy(() => Promise.resolve().then(() => require('./image')));
const List = React.lazy(() => Promise.resolve().then(() => require('./list')));
const Paragraph = React.lazy(() => Promise.resolve().then(() => require('./paragraph')));
const Quote = React.lazy(() => Promise.resolve().then(() => require('./quote')));
const Video = React.lazy(() => Promise.resolve().then(() => require('./video')));
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