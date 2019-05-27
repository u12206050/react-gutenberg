import React, { Suspense } from 'react'
import Blocks, { GetTheBlock } from './blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'

const WPGBlocks:React.SFC<IWPGBlocksProps> = ({ blocks, loader = WPGBlockLoader }) => {

  return (
    <div className="wpg-blocks">
      {blocks.filter(block => !!block.blockName).map(block => <WPGBlock block={block} loader={loader} />)}
    </div>
  )
}

export const WPGBlock:React.SFC<IWPGBlockProps> = ({ block, loader }) => {

  const {
    blockName,
    attrs,
    innerBlocks,
    innerHTML } = block

  if (!blockName) return null

  let theBlock = GetTheBlock(blockName)

  if (!theBlock) return null

  return (
    <Suspense fallback={loader}>
      { theBlock }
    </Suspense>
  )
}

export const WPGBlockLoader:React.SFC = () => {
  return (
    <div className="wpg-block__loader">Loading...</div>
  )
}

export default WPGBlocks