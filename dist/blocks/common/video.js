Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WPGVideoBlock = (props) => {
    const { attrs, innerBlocks, innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_video", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGVideoBlock;
//# sourceMappingURL=video.js.map