"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const WPGVideoBlock = (props) => {
    const { attrs, innerBlocks, innerHTML } = props;
    return (react_1.default.createElement("div", { className: "wpg-block wpg-b_video", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGVideoBlock;
//# sourceMappingURL=video.js.map