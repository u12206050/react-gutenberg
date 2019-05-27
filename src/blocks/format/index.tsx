import * as React from 'react'

const Code = React.lazy(() => import('./code'))
const Html = React.lazy(() => import('./html'))
const Preformatted = React.lazy(() => import('./preformatted'))
const Pullquote = React.lazy(() => import('./pullquote'))

export default {
  Code,
  Html,
  Preformatted,
  Pullquote
}