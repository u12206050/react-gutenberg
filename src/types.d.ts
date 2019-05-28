
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
  mapToBlock?(name: string): any | null
}

export interface IWPGBlocksProps {
  blocks: IWPGBlock[]
  mapToBlock?(name: string): any | null
}
