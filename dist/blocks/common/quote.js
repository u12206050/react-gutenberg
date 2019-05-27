"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WPGQuoteBlock = (props) => {
    const { attrs, innerBlocks, innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_quote", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGQuoteBlock;
//# sourceMappingURL=quote.js.map