import WPGBlocks from './src'
import { IWPGBlocksProps, IWPGBlockProps } from './src/types'

export type WPGBlocks = (props?: IWPGBlocksProps) => React.FunctionComponent<IWPGBlocksProps>
export type WPGBlock = (props?: IWPGBlockProps) => React.FunctionComponent<IWPGBlockProps>
export type WPGBlockLoader = () => React.FunctionComponent

export * from './src'
export * from './src/types'

export default WPGBlocks
