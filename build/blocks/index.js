"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("./common");
var format_1 = require("./format");
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
        default: return null;
    }
}
exports.GetTheBlock = GetTheBlock;
exports.default = __assign({}, common_1.default);
