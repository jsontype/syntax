import React, { useState } from "react"
// import { useHistory } from "react-router-dom"
import AppInput from "../components/Input"
import AppButton from "../components/Button"
import Typography from "@mui/material/Typography"
import axios from "axios"

const AddWord = () => {
  const [title, setTitle] = useState("")
  const [definition, setDefinition] = useState("")
  // const history = useHistory()

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleDefinitionChange = (event) => {
    setDefinition(event.target.value)
  }

  const handleAddWord = async () => {
    await axios.post("https://my-vocabulary-api.com/words", {
      title,
      definition,
    })
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Add Word
      </Typography>
      <form onSubmit={(e) => e.preventDefault()}>
        <AppInput label="Title" value={title} onChange={handleTitleChange} />
        <AppInput
          label="Definition"
          value={definition}
          onChange={handleDefinitionChange}
        />
        <AppButton type="submit" onClick={handleAddWord}>
          Add Word
        </AppButton>
      </form>
    </div>
  )
}

export default AddWord
