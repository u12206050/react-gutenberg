import { IWPGBlock } from "../../types";
import * as React from "react";

const WPGCodeBlock: React.FC<IWPGBlock> = (props) => {
  const {
    // attrs,
    // innerBlocks,
    innerHTML,
  } = props;

  return (
    <div className="wpg-block wpg-b_Code" dangerouslySetInnerHTML={{ __html: innerHTML }} />
  );
};

export default WPGCodeBlock;
