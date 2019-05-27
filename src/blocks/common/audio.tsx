import { IBlock } from '@/types'
import React from 'react'

const WPGAudioBlock:React.SFC<IBlock> = (props) => {
  const {
    attrs,
    innerBlocks,
    innerHTML } = props

  return (
    <div className="wpg-block wpg-b_audio" dangerouslySetInnerHTML={{ __html: innerHTML }}></div>
  )
}

export default WPGAudioBlock