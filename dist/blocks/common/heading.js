Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WPGHeadingBlock = (props) => {
    const { attrs, innerBlocks, innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_heading", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGHeadingBlock;
//# sourceMappingURL=heading.js.map