"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const WPGPreformattedBlock = (props) => {
    const { attrs, innerBlocks, innerHTML } = props;
    return (react_1.default.createElement("div", { className: "wpg-block wpg-b_preformatted", dangerouslySetInnerHTML: { __html: innerHTML } }, "  "));
};
exports.default = WPGPreformattedBlock;
//# sourceMappingURL=preformatted.js.map