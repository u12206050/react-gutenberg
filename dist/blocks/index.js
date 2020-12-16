Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTheBlock = void 0;
const component_1 = require("@loadable/component");
const common_1 = require("./common");
const format_1 = require("./format");
const layout_1 = require("./layout");
const DefaultHtmlBlock = component_1.default(() => Promise.resolve().then(() => require('./format/html')));
function GetTheBlock(name) {
    switch (name) {
        case 'core/audio': return common_1.default.Audio;
        case 'core/cover': return common_1.default.Cover;
        case 'core/file': return common_1.default.File;
        case 'core/gallery': return common_1.default.Gallery;
        case 'core/heading': return common_1.default.Heading;
        case 'core/image': return common_1.default.Image;
        case 'core/list': return common_1.default.List;
        case 'core/paragraph': return common_1.default.Paragraph;
        case 'core/quote': return common_1.default.Quote;
        case 'core/video': return common_1.default.Video;
        case 'core/code': return format_1.default.Code;
        case 'core/html': return format_1.default.Html;
        case 'core/preformatted': return format_1.default.Preformatted;
        case 'core/pullquote': return format_1.default.Pullquote;
        case 'core/columns': return layout_1.default.Columns;
        default: return DefaultHtmlBlock;
    }
}
exports.GetTheBlock = GetTheBlock;
exports.default = Object.assign(Object.assign({}, common_1.default), format_1.default);
//# sourceMappingURL=index.js.map