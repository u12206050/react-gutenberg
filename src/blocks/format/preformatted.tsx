import { IWPGBlock } from "../../types";
import * as React from "react";

const WPGPreformattedBlock: React.FC<IWPGBlock> = (props) => {
  const {
    // attrs,
    // innerBlocks,
    innerHTML,
  } = props;

  return (
    <div
      className="wpg-block wpg-b_preformatted"
      dangerouslySetInnerHTML={{ __html: innerHTML }}
    />
  );
};

export default WPGPreformattedBlock;
