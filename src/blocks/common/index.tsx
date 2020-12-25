import loadable from '@loadable/component'

const Audio = loadable(() => import('./audio'))
const Cover = loadable(() => import('./cover'))
const File = loadable(() => import('./file'))
const Gallery = loadable(() => import('./gallery'))
const Heading = loadable(() => import('./heading'))
const Image = loadable(() => import('./image'))
const List = loadable(() => import('./list'))
const Paragraph = loadable(() => import('./paragraph'))
const Quote = loadable(() => import('./quote'))
const Video = loadable(() => import('./video'))

export default {
  Audio,
  Cover,
  File,
  Gallery,
  Heading,
  Image,
  List,
  Paragraph,
  Quote,
  Video
}
