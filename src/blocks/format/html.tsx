import { IWPGBlock } from '~/types'
import * as React from 'react'

class WPGHtmlBlock extends React.Component<IWPGBlock> {

  id = Math.floor(Math.random() * 100000)

  componentDidMount() {
    document.querySelectorAll(`[data-script="${this.id}"]`).forEach(script => {
      (window as any).eval(script.innerHTML)
    })
  }

  render() {
    const {
      // attrs,
      // innerBlocks,
      innerHTML
    } = this.props

    const scriptHtml = innerHTML.replace(/<script(>|\s)/gm, `<script data-script="${this.id}"$1`)

    return (
      <div className="wpg-block wpg-b_html" dangerouslySetInnerHTML={{ __html: scriptHtml }}/>
    )
  }
}

export default WPGHtmlBlock