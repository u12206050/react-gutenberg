import React, { Suspense } from 'react'
import Blocks, { GetTheBlock } from './blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'

const WPGBlocks:React.SFC<IWPGBlocksProps> = ({ blocks, loader = WPGBlockLoader, mapToBlock }) => {

  return (
    <div className="wpg-blocks">
      {blocks.filter(block => !!block.blockName).map(block => <WPGBlock block={block} loader={loader} mapToBlock={mapToBlock} />)}
    </div>
  )
}

export const WPGBlock:React.SFC<IWPGBlockProps> = ({ block, loader, mapToBlock }) => {

  const {
    blockName,
    attrs,
    innerBlocks,
    innerHTML } = block

  if (!blockName) return null

  let TheBlock = mapToBlock ? mapToBlock(blockName) : null
  if (!TheBlock) TheBlock = GetTheBlock(blockName)

  if (!TheBlock) return null

  return (
    <Suspense fallback={loader}>
      <TheBlock blockName={blockName} attrs={attrs} innerBlocks={innerBlocks} innerHTML={innerHTML} />
    </Suspense>
  )
}

export const WPGBlockLoader:React.SFC = () => {
  return (
    <div className="wpg-block__loader">Loading...</div>
  )
}

export default WPGBlocks