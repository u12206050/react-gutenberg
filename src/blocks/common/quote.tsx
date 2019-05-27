import { IBlock } from '@/types'
import * as React from 'react'

const WPGQuoteBlock:React.SFC<IBlock> = (props) => {
  const {
    attrs,
    innerBlocks,
    innerHTML } = props

  return (
    <div className="wpg-block wpg-b_quote" dangerouslySetInnerHTML={{__html: innerHTML}}></div>
  )
}

export default WPGQuoteBlock