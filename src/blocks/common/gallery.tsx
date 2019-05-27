import { IBlock } from '@/types'
import * as React from 'react'

const WPGGalleryBlock:React.SFC<IBlock> = (props) => {
  const {
    attrs,
    innerBlocks,
    innerHTML } = props

  return (
    <div className="wpg-block wpg-b_gallery" dangerouslySetInnerHTML={{ __html: innerHTML }}>  </div>
  )
}

export default WPGGalleryBlock