import { IBlock } from '@/types'
import React from 'react'

const WPGPreformattedBlock:React.SFC<IBlock> = (props) => {
  const {
    attrs,
    innerBlocks,
    innerHTML } = props

  return (
    <div className="wpg-block wpg-b_preformatted" dangerouslySetInnerHTML={{ __html: innerHTML }}>  </div>
  )
}

export default WPGPreformattedBlock