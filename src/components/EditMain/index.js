import {Component} from 'react'
import Paragraph from '../Paragraph'
import './index.css'

class EditMain extends Component {
  state = {
    isClicked: false,
    textInput: '',
  }

  changeInput = event => {
    this.setState({textInput: event.target.value})
  }

  editValue = () => {
    this.setState({isClicked: false})
  }

  clickSave = () => {
    const {isClicked} = this.state
    this.setState({isClicked: !isClicked})
  }

  renderInputElement = () => {
    const {textInput} = this.state
    return (
      <div className="text-container">
        <input
          type="text"
          className="input-element"
          onChange={this.changeInput}
          value={textInput}
        />
        <button type="button" className="save-button" onClick={this.clickSave}>
          Save
        </button>
      </div>
    )
  }

  renderParagraphElement = () => {
    const {textInput} = this.state
    return <Paragraph textValue={textInput} editValue={this.editValue} />
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="app-container">
        <div className="app">
          <div className="inner-container">
            <h1>Editable Text Input</h1>
            {isClicked
              ? this.renderParagraphElement()
              : this.renderInputElement()}
          </div>
        </div>
      </div>
    )
  }
}

export default EditMain
