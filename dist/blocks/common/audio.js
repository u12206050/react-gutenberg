Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WPGAudioBlock = (props) => {
    const { attrs, innerBlocks, innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_audio", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGAudioBlock;
//# sourceMappingURL=audio.js.map