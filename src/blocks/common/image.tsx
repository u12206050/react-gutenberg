import { IWPGBlock } from '@/types'
import * as React from 'react'

const WPGImageBlock:React.SFC<IWPGBlock> = (props) => {
  const {
    // attrs,
    // innerBlocks,
    innerHTML
  } = props

  return (
    <div className="wpg-block wpg-b_image" dangerouslySetInnerHTML={{__html: innerHTML}}/>
  )
}

export default WPGImageBlock