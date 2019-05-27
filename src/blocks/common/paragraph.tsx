import { IBlock } from '@/types'
import React from 'react'

const WPGParagraphBlock:React.SFC<IBlock> = (props) => {
  const {
    attrs,
    innerBlocks,
    innerHTML } = props

  return (
    <div className="wpg-block wpg-b_paragraph" dangerouslySetInnerHTML={{__html: innerHTML}}></div>
  )
}

export default WPGParagraphBlock