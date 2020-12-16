Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WPGCoverBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML, } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_cover", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGCoverBlock;
//# sourceMappingURL=cover.js.map