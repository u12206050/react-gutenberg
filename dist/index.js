Object.defineProperty(exports, "__esModule", { value: true });
exports.WPGBlock = void 0;
const React = require("react");
const blocks_1 = require("./blocks");
const WPGBlocks = ({ blocks, mapToBlock }) => {
    return (React.createElement("div", { className: "wpg-blocks" }, blocks
        .filter((block) => !!block.blockName)
        .map((block, index) => (React.createElement(exports.WPGBlock, { key: index, block: block, mapToBlock: mapToBlock })))));
};
exports.WPGBlock = ({ block, mapToBlock }) => {
    const { blockName, attrs, innerBlocks, innerHTML, innerContent } = block;
    if (!blockName)
        return null;
    if (mapToBlock)
        exports.WPGBlock.MapToBlock = mapToBlock;
    let TheBlock = exports.WPGBlock.MapToBlock ? exports.WPGBlock.MapToBlock(blockName) : null;
    if (!TheBlock)
        TheBlock = blocks_1.GetTheBlock(blockName);
    if (!TheBlock)
        return null;
    return (React.createElement(TheBlock, { blockName: blockName, attrs: attrs, innerBlocks: innerBlocks, innerHTML: innerHTML, innerContent: innerContent }));
};
exports.default = WPGBlocks;
//# sourceMappingURL=index.js.map