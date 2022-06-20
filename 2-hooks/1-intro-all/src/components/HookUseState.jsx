import React, {useState} from 'react'

function HookUseState() {
  let [text, setText] = useState('')

  return (
    <>
      <input type="text" placeholder="Add some text ..." onChange={ (event) => {
        setText(event.target.value);
      }} />
      <br />
      <h5>Input text = {text}</h5>
    </>
  )
}

export default HookUseState