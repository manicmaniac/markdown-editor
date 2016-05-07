import React from 'react'
import CodeMirror from 'react-codemirror'
import PreviewBox from './PreviewBox'
import 'codemirror/mode/markdown/markdown'
import 'whatwg-fetch'
import '../../stylesheets/style.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      scrollRelative: 0
    }
  }

  componentDidMount() {
    const { editor } = this.refs
    const codeMirror = editor.getCodeMirror()
    codeMirror.on('scroll', this.onScroll.bind(this))
    editor.focus()
    this.fetchDefaultValue(value => {
      codeMirror.getDoc().setValue(value)
      this.setState(Object.assign({}, this.state, { value }))
    })
  }

  onChange(newValue) {
    this.setState({
      value: newValue
    })
  }

  onScroll(codeMirror) {
      const { top, height, clientHeight } = codeMirror.getScrollInfo()
      this.setState(Object.assign({}, this.state, {
        scrollRelative: top / (height - (clientHeight / 2))
      }))
  }

  fetchDefaultValue(callback) {
    fetch(this.props.defaultValueUrl)
      .then(response => response.text())
      .then(body => callback(body))
      .catch(error => console.error(error))
  }

  render() {
    const options = {
      mode: 'markdown',
      lineNumbers: true
    }
    return (
      <div>
        <CodeMirror
          onChange={this.onChange.bind(this)}
          options={options}
          ref='editor'
        />
        <PreviewBox
          scrollRelative={this.state.scrollRelative}
        >{this.state.value}
        </PreviewBox>
      </div>
    )
  }
}
