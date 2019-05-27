import { IBlock } from '@/types'
import React from 'react'

const WPGFileBlock:React.SFC<IBlock> = (props) => {
  const {
    attrs,
    innerBlocks,
    innerHTML } = props

  return (
    <div className="wpg-block wpg-b_file" dangerouslySetInnerHTML={{ __html: innerHTML }}>  </div>
  )
}

export default WPGFileBlock