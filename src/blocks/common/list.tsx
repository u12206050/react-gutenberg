import { IWPGBlock } from '@/types'
import * as React from 'react'

const WPGListBlock:React.SFC<IWPGBlock> = (props) => {
  const {
    // attrs,
    // innerBlocks,
    innerHTML
  } = props

  return (
    <div className="wpg-block wpg-b_list" dangerouslySetInnerHTML={{__html: innerHTML}}/>
  )
}

export default WPGListBlock