import { IBlock } from '@/types'
import React from 'react'

const WPGCoverBlock:React.SFC<IBlock> = (props) => {
  const {
    attrs,
    innerBlocks,
    innerHTML } = props

  return (
    <div className="wpg-block wpg-b_cover" dangerouslySetInnerHTML={{ __html: innerHTML }}>  </div>
  )
}

export default WPGCoverBlock