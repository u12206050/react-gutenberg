import { IWPGBlock, IWPGBlocksProps, IWPGBlockProps } from './src/types'

type WPGBlocks = (props?: IWPGBlocksProps) => React.FunctionComponent<IWPGBlocksProps>
export type WPGBlock = (props?: IWPGBlockProps) => React.FunctionComponent<IWPGBlockProps>
export type WPGBlockLoader = () => React.FunctionComponent

export { IWPGBlock, IWPGBlocksProps, IWPGBlockProps }
export default WPGBlocks