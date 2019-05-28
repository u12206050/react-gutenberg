Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WPGParagraphBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_paragraph", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGParagraphBlock;
//# sourceMappingURL=paragraph.js.map