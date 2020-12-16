import { IWPGBlock } from "../../types";
import * as React from "react";

const WPGAudioBlock: React.FC<IWPGBlock> = (props) => {
  const {
    // attrs,
    // innerBlocks,
    innerHTML,
  } = props;

  return (
    <div className="wpg-block wpg-b_audio" dangerouslySetInnerHTML={{ __html: innerHTML }} />
  );
};

export default WPGAudioBlock;
