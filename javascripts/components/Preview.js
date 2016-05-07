import React from 'react'
import marked from 'marked'

export default class Preview extends React.Component {
  rawMarkup() {
    const rawMarkup = marked(this.props.children.toString(), { sanitize: true })
    return { __html: rawMarkup }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.children.toString() !== nextProps.children.toString()
  }

  get offsetHeight() {
    const { markdownBody } = this.refs
    return markdownBody.offsetHeight
  }

  render() {
    return (
      <div ref='markdownBody' className='markdown-body' dangerouslySetInnerHTML={this.rawMarkup()} />
    )
  }
}
