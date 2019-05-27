import { IBlock } from '@/types'
import React from 'react'

const WPGPullquoteBlock:React.SFC<IBlock> = (props) => {
  const {
    attrs,
    innerBlocks,
    innerHTML } = props

  return (
    <div className="wpg-block wpg-b_pullquote" dangerouslySetInnerHTML={{ __html: innerHTML }}>  </div>
  )
}

export default WPGPullquoteBlock