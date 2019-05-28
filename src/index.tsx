import * as React from 'react'
import { GetTheBlock } from './blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'

const WPGBlocks:React.SFC<IWPGBlocksProps> = ({ blocks, loader = <WPGBlockLoader />, mapToBlock }) => {
  return (
    <div className="wpg-blocks">
      {blocks.filter(block => !!block.blockName).map((block, index) => <WPGBlock key={index} block={block} loader={loader} mapToBlock={mapToBlock} />)}
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

  if (loader) (WPGBlock as any).Loader = loader
  if (mapToBlock) (WPGBlock as any).MapToBlock = mapToBlock

  let TheBlock = (WPGBlock as any).MapToBlock ? (WPGBlock as any).MapToBlock(blockName) : null
  if (!TheBlock) TheBlock = GetTheBlock(blockName)

  if (!TheBlock) return null

  return (
    <React.Suspense fallback={(WPGBlock as any).Loader}>
      <TheBlock blockName={blockName} attrs={attrs} innerBlocks={innerBlocks} innerHTML={innerHTML} />
    </React.Suspense>
  )
}

export const WPGBlockLoader:React.SFC = () => {
  return (
    <div className="wpg-block__loader">Loading...</div>
  )
}

export default WPGBlocks