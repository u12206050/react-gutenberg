import { IWPGBlock } from "../../types";
import * as React from "react";

const WPGQuoteBlock: React.FC<IWPGBlock> = (props) => {
  const {
    // attrs,
    // innerBlocks,
    innerHTML,
  } = props;

  return (
    <div className="wpg-block wpg-b_quote" dangerouslySetInnerHTML={{ __html: innerHTML }} />
  );
};

export default WPGQuoteBlock;
