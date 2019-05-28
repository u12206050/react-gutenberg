Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WPGCodeBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_Code", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGCodeBlock;
//# sourceMappingURL=code.js.map