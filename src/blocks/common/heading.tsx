import { IBlock } from '@/types'
import React from 'react'

const WPGHeadingBlock:React.SFC<IBlock> = (props) => {
  const {
    attrs,
    innerBlocks,
    innerHTML } = props

  return (
    <div className="wpg-block wpg-b_heading" dangerouslySetInnerHTML={{__html: innerHTML}}></div>
  )
}

export default WPGHeadingBlock