Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WPGFileBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_file", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGFileBlock;
//# sourceMappingURL=file.js.map