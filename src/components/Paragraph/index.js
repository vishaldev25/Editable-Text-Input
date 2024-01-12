import './index.css'

const Paragraph = props => {
  const {textValue, editValue} = props
  return (
    <div className="para-container">
      <p className="Paragraph-element">{textValue}</p>
      <button
        className="save-button edit-button"
        type="button"
        onClick={editValue}
      >
        Edit
      </button>
    </div>
  )
}

export default Paragraph
