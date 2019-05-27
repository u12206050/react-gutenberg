"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var WPGParagraphBlock = function (props) {
    var attrs = props.attrs, innerBlocks = props.innerBlocks, innerHTML = props.innerHTML;
    return (<div className="wpg-block wpg-b_paragraph" dangerouslySetInnerHTML={{ __html: innerHTML }}></div>);
};
exports.default = WPGParagraphBlock;
