import * as React from 'react'
import { GetTheBlock } from './blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'

const WPGBlocks:React.SFC<IWPGBlocksProps> = ({ blocks, mapToBlock }) => {
  return (
    <div className="wpg-blocks">
      {blocks.filter(block => !!block.blockName).map((block, index) => <WPGBlock key={index} block={block} mapToBlock={mapToBlock} />)}
    </div>
  )
}

export const WPGBlock:React.SFC<IWPGBlockProps> = ({ block, mapToBlock }) => {

  const {
    blockName,
    attrs,
    innerBlocks,
    innerHTML } = block

  if (!blockName) return null

  if (mapToBlock) (WPGBlock as any).MapToBlock = mapToBlock

  let TheBlock = (WPGBlock as any).MapToBlock ? (WPGBlock as any).MapToBlock(blockName) : null
  if (!TheBlock) TheBlock = GetTheBlock(blockName)

  if (!TheBlock) return null

  return (
    <TheBlock blockName={blockName} attrs={attrs} innerBlocks={innerBlocks} innerHTML={innerHTML} />
  )
}

export default WPGBlocks