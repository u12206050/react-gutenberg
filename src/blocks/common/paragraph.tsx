import { IWPGBlock } from '../../types'
import * as React from 'react'

const WPGParagraphBlock: React.FC<IWPGBlock> = (props) => {
  const {
    // attrs,
    // innerBlocks,
    innerHTML
  } = props

  return <div className="wpg-block wpg-b_paragraph" dangerouslySetInnerHTML={{ __html: innerHTML }} />
}

export default WPGParagraphBlock
