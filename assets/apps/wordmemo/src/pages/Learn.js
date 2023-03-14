import React, { useState, useEffect } from "react"
import WordCard from "../components/Card"
import AppButton from "../components/Button"
import Typography from "@mui/material/Typography"
import axios from "axios"

const Learn = () => {
  const [words, setWords] = useState([])
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://my-vocabulary-api.com/words")
      setWords(result.data)
    }
    fetchData()
  }, [])

  const handleNextWord = () => {
    setCurrentWordIndex(currentWordIndex + 1)
  }

  const handlePrevWord = () => {
    setCurrentWordIndex(currentWordIndex - 1)
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Learn
      </Typography>
      {words.length > 0 ? (
        <>
          <WordCard word={words[currentWordIndex]} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {currentWordIndex > 0 && (
              <AppButton onClick={handlePrevWord}>Previous</AppButton>
            )}
            {currentWordIndex < words.length - 1 && (
              <AppButton onClick={handleNextWord}>Next</AppButton>
            )}
          </div>
        </>
      ) : (
        <Typography>No words to learn yet!</Typography>
      )}
    </div>
  )
}

export default Learn
