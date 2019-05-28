import { IWPGBlock } from '@/types'
import * as React from 'react'

const WPGHeadingBlock:React.SFC<IWPGBlock> = (props) => {
  const {
    // attrs,
    // innerBlocks,
    innerHTML
  } = props

  return (
    <div className="wpg-block wpg-b_heading" dangerouslySetInnerHTML={{__html: innerHTML}}/>
  )
}

export default WPGHeadingBlock