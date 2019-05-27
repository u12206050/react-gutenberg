import { IBlock } from '@/types'
import * as React from 'react'

const WPGCodeBlock:React.SFC<IBlock> = (props) => {
  const {
    attrs,
    innerBlocks,
    innerHTML } = props

  return (
    <div className="wpg-block wpg-b_Code" dangerouslySetInnerHTML={{ __html: innerHTML }}>  </div>
  )
}

export default WPGCodeBlock