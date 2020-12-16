Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WPGImageBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML, } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_image", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGImageBlock;
//# sourceMappingURL=image.js.map