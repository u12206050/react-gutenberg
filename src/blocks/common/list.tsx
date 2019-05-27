import { IBlock } from '@/types'
import React from 'react'

const WPGListBlock:React.SFC<IBlock> = (props) => {
  const {
    attrs,
    innerBlocks,
    innerHTML } = props

  return (
    <div className="wpg-block wpg-b_list" dangerouslySetInnerHTML={{__html: innerHTML}}></div>
  )
}

export default WPGListBlock