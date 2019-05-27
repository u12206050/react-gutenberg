"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var blocks_1 = require("./blocks");
var WPGBlocks = function (_a) {
    var blocks = _a.blocks, _b = _a.loader, loader = _b === void 0 ? exports.WPGBlockLoader : _b;
    return (<div className="wpg-blocks">
      {blocks.filter(function (block) { return !!block.blockName; }).map(function (block) { return <exports.WPGBlock block={block} loader={loader}/>; })}
    </div>);
};
exports.WPGBlock = function (_a) {
    var block = _a.block, loader = _a.loader;
    var blockName = block.blockName, attrs = block.attrs, innerBlocks = block.innerBlocks, innerHTML = block.innerHTML;
    if (!blockName)
        return null;
    var theBlock = blocks_1.GetTheBlock(blockName);
    if (!theBlock)
        return null;
    return (<react_1.Suspense fallback={loader}>
      {theBlock}
    </react_1.Suspense>);
};
exports.WPGBlockLoader = function () {
    return (<div className="wpg-block__loader">Loading...</div>);
};
exports.default = WPGBlocks;
