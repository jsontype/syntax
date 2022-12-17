import React from "react"
import CharacterCount from "../Selector/CharacterCount"

export default function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  )
}

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
})

function TextInput() {
  const [text, setText] = useRecoilState(textState)
  const onChange = (event) => {
    setText(event.target.value)
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  )
}
