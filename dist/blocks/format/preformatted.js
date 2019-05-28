Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WPGPreformattedBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_preformatted", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGPreformattedBlock;
//# sourceMappingURL=preformatted.js.map