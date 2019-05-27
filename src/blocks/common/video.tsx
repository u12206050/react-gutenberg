import { IBlock } from '@/types'
import * as React from 'react'

const WPGVideoBlock:React.SFC<IBlock> = (props) => {
  const {
    attrs,
    innerBlocks,
    innerHTML } = props

  return (
    <div className="wpg-block wpg-b_video" dangerouslySetInnerHTML={{__html: innerHTML}}></div>
  )
}

export default WPGVideoBlock