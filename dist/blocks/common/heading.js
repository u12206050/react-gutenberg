"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const WPGHeadingBlock = (props) => {
    const { attrs, innerBlocks, innerHTML } = props;
    return (react_1.default.createElement("div", { className: "wpg-block wpg-b_heading", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGHeadingBlock;
//# sourceMappingURL=heading.js.map