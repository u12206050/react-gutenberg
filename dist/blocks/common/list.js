Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WPGListBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_list", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGListBlock;
//# sourceMappingURL=list.js.map