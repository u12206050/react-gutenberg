
export interface IBlock {
  blockName: string | null
  attrs: any[] | {
    ids?: number[]
    [k:string]: any
  }
  innerBlocks: IBlock[]
  innerHTML: string
}

export interface IWPGBlockProps {
  block: IBlock
  loader: React.Component
}

export interface IWPGBlocksProps {
  blocks: IBlock[]
  loader?: any
}