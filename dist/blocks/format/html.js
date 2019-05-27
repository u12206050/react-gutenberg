"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WPGHtmlBlock = (props) => {
    const { attrs, innerBlocks, innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_html", dangerouslySetInnerHTML: { __html: innerHTML } }, "  "));
};
exports.default = WPGHtmlBlock;
//# sourceMappingURL=html.js.map