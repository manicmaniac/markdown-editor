import React from 'react'
import marked from 'marked'

export default class Preview extends React.Component {
  rawMarkup() {
    const rawMarkup = marked(this.props.children.toString(), { sanitize: true })
    return { __html: rawMarkup }
  }

  componentDidUpdate() {
    const { preview, markdownBody } = this.refs
    preview.scrollTop = markdownBody.offsetHeight * this.props.scrollRelative
  }

  render() {
    return (
      <div id='preview' ref='preview'>
        <div ref='markdownBody' className='markdown-body' dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    )
  }
}

Preview.propTypes = {
  scrollRelative: React.PropTypes.number.isRequired
}
