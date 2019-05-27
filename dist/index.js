"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const blocks_1 = require("./blocks");
const WPGBlocks = ({ blocks, loader = exports.WPGBlockLoader, mapToBlock }) => {
    return (react_1.default.createElement("div", { className: "wpg-blocks" }, blocks.filter(block => !!block.blockName).map(block => react_1.default.createElement(exports.WPGBlock, { block: block, loader: loader, mapToBlock: mapToBlock }))));
};
exports.WPGBlock = ({ block, loader, mapToBlock }) => {
    const { blockName, attrs, innerBlocks, innerHTML } = block;
    if (!blockName)
        return null;
    let TheBlock = mapToBlock ? mapToBlock(blockName) : null;
    if (!TheBlock)
        TheBlock = blocks_1.GetTheBlock(blockName);
    if (!TheBlock)
        return null;
    return (react_1.default.createElement(react_1.Suspense, { fallback: loader },
        react_1.default.createElement(TheBlock, { blockName: blockName, attrs: attrs, innerBlocks: innerBlocks, innerHTML: innerHTML })));
};
exports.WPGBlockLoader = () => {
    return (react_1.default.createElement("div", { className: "wpg-block__loader" }, "Loading..."));
};
exports.default = WPGBlocks;
//# sourceMappingURL=index.js.map