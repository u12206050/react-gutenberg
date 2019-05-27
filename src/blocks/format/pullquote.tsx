import { IWPGBlock } from '@/types'
import * as React from 'react'

const WPGPullquoteBlock:React.SFC<IWPGBlock> = (props) => {
  const {
    attrs,
    innerBlocks,
    innerHTML } = props

  return (
    <div className="wpg-block wpg-b_pullquote" dangerouslySetInnerHTML={{ __html: innerHTML }}/>
  )
}

export default WPGPullquoteBlock