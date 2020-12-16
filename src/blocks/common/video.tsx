import { IWPGBlock } from "../../types";
import * as React from "react";

const WPGVideoBlock: React.FC<IWPGBlock> = (props) => {
  const {
    // attrs,
    // innerBlocks,
    innerHTML,
  } = props;

  return (
    <div className="wpg-block wpg-b_video" dangerouslySetInnerHTML={{ __html: innerHTML }} />
  );
};

export default WPGVideoBlock;
