import { IBlock } from '@/types'
import React from 'react'

const WPGImageBlock:React.SFC<IBlock> = (props) => {
  const {
    attrs,
    innerBlocks,
    innerHTML } = props

  return (
    <div className="wpg-block wpg-b_image" dangerouslySetInnerHTML={{__html: innerHTML}}></div>
  )
}

export default WPGImageBlock