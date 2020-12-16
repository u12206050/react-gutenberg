Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WPGGalleryBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML, } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_gallery", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGGalleryBlock;
//# sourceMappingURL=gallery.js.map