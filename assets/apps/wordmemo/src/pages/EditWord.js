import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import AppInput from "../components/Input"
import AppButton from "../components/Button"
import Typography from "@mui/material/Typography"
import axios from "axios"

const EditWord = () => {
  const [title, setTitle] = useState("")
  const [definition, setDefinition] = useState("")
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://my-vocabulary-api.com/words/${id}`
      )
      setTitle(result.data.title)
      setDefinition(result.data.definition)
    }
    fetchData()
  }, [id])

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleDefinitionChange = (event) => {
    setDefinition(event.target.value)
  }

  const handleEditWord = async () => {
    await axios.put(`https://my-vocabulary-api.com/words/${id}`, {
      title,
      definition,
    })
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Edit Word
      </Typography>
      <form onSubmit={(e) => e.preventDefault()}>
        <AppInput label="Title" value={title} onChange={handleTitleChange} />
        <AppInput
          label="Definition"
          value={definition}
          onChange={handleDefinitionChange}
        />
        <AppButton type="submit" onClick={handleEditWord}>
          Edit Word
        </AppButton>
      </form>
    </div>
  )
}

export default EditWord
