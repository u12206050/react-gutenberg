import React from 'react'

const Audio = React.lazy(() => import('./audio'))
const Cover = React.lazy(() => import('./cover'))
const File = React.lazy(() => import('./file'))
const Gallery = React.lazy(() => import('./Gallery'))
const Heading = React.lazy(() => import('./Heading'))
const Image = React.lazy(() => import('./image'))
const List = React.lazy(() => import('./list'))
const Paragraph = React.lazy(() => import('./Paragraph'))
const Quote = React.lazy(() => import('./quote'))
const Video = React.lazy(() => import('./video'))

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