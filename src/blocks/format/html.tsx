import { IBlock } from '@/types'
import React from 'react'

const WPGHtmlBlock:React.SFC<IBlock> = (props) => {
  const {
    attrs,
    innerBlocks,
    innerHTML } = props

  return (
    <div className="wpg-block wpg-b_html" dangerouslySetInnerHTML={{ __html: innerHTML }}>  </div>
  )
}

export default WPGHtmlBlock