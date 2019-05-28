Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WPGPullquoteBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_pullquote", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGPullquoteBlock;
//# sourceMappingURL=pullquote.js.map