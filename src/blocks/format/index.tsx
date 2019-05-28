import loadable from '@loadable/component'

const Code = loadable(() => import('./code'))
const Html = loadable(() => import('./html'))
const Preformatted = loadable(() => import('./preformatted'))
const Pullquote = loadable(() => import('./pullquote'))

export default {
  Code,
  Html,
  Preformatted,
  Pullquote
}