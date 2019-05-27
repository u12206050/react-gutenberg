"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const WPGListBlock = (props) => {
    const { attrs, innerBlocks, innerHTML } = props;
    return (react_1.default.createElement("div", { className: "wpg-block wpg-b_list", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGListBlock;
//# sourceMappingURL=list.js.map