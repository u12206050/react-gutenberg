import { IWPGBlock } from '@/types'
import * as React from 'react'

const WPGCoverBlock:React.SFC<IWPGBlock> = (props) => {
  const {
    // attrs,
    // innerBlocks,
    innerHTML
  } = props

  return (
    <div className="wpg-block wpg-b_cover" dangerouslySetInnerHTML={{ __html: innerHTML }}/>
  )
}

export default WPGCoverBlock