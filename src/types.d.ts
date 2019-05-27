
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
  mapToBlock?(name: string): React.LazyExoticComponent<React.FunctionComponent<IBlock>> | null
}

export interface IWPGBlocksProps {
  blocks: IBlock[]
  loader?: any
  mapToBlock?(name: string): React.LazyExoticComponent<React.FunctionComponent<IBlock>> | null
}
