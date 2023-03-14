import React, { useState, useEffect } from "react"
import WordCard from "../components/Card"
import AppButton from "../components/Button"
import Typography from "@mui/material/Typography"
import axios from "axios"

const Home = () => {
  const [words, setWords] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      // ***! 이 부분 수정해야함. 내꺼 db api로 연결... 또는 자기 로컬 txt 파일로 연결..? (리액트 네이티브 참조)
      const result = await axios.get("https://my-vocabulary-api.com/words")
      setWords(result.data)
      console.log(result.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        My Vocabulary
      </Typography>
      {words.map((word) => (
        <WordCard key={word.id} word={word} />
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "16px",
        }}
      >
        <AppButton href="/add-word">Add Word</AppButton>
      </div>
    </div>
  )
}

export default Home
