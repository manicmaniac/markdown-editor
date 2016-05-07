import React from 'react'
import Preview from './Preview'

export default class PreviewBox extends React.Component {
  componentDidUpdate() {
    const { previewBox, preview } = this.refs
    previewBox.scrollTop = preview.offsetHeight * this.props.scrollRelative
  }

  render() {
    return (
      <div id='preview-box' ref='previewBox'>
        <Preview ref='preview'>
          {this.props.children}
        </Preview>
      </div>
    )
  }
}

PreviewBox.propTypes = {
  scrollRelative: React.PropTypes.number.isRequired
}
