
export interface IWPGBlock {
  blockName: string | null
  attrs: any[] | {
    [k:string]: any
  }
  innerBlocks: IWPGBlock[]
  innerHTML: string
}

export interface IWPGBlockProps {
  block: IWPGBlock
  loader?: React.Component
  mapToBlock?(name: string): React.LazyExoticComponent<any> | null
}

export interface IWPGBlocksProps {
  blocks: any[]
  loader?: any
  mapToBlock?(name: string): React.LazyExoticComponent<any> | null
}
