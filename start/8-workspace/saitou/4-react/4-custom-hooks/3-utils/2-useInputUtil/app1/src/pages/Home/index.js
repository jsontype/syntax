import React, { useState, useEffect } from "react"
import Label from "../../components/Atoms/Label"
import useDateUtil from "../../utils/useDateUtil"
import useInputUtil from "../../utils/useInputUtil"
import NormalButton from "../../components/Atoms/NormalButton"

export default function Home() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dateUtil = useDateUtil()
  const formattedDate = dateUtil.formatDate(
    dateUtil.currentDate,
    "YYYY-MM-DD HH:mm"
  )

  // Hooks
  const usernameInputUtil = useInputUtil({
    minLength: 5,
    maxLength: 15,
    required: true,
    noSpecialChars: true,
  })
  const passwordInputUtil = useInputUtil({
    minLength: 8,
    maxLength: 20,
    required: true,
  })

  useEffect(() => {
    setUsername(usernameInputUtil.value)
    setPassword(passwordInputUtil.value)
  }, [passwordInputUtil.value, usernameInputUtil.value])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (usernameInputUtil.error) {
      alert("エラーが発生しました！")
      console.log({
        username: usernameInputUtil.error,
        password: passwordInputUtil.error,
      })
      return
    }
    alert("submitの処理を行う")
    console.log("submit: ", { username, password })
  }

  return (
    <div>
      <Label text="Home" />
      <h2>現在の時刻：{formattedDate}</h2>

      <div>
        <form>
          <input
            type="text"
            value={username}
            placeholder="username"
            required
            onChange={usernameInputUtil.onChange}
          />
          <input
            type="text"
            value={password}
            placeholder="password"
            required
            onChange={passwordInputUtil.onChange}
          />
          <NormalButton
            className="text-blue-500"
            buttonText="Login"
            onClick={handleSubmit}
          ></NormalButton>
        </form>

        {/* Error表示 */}
        {usernameInputUtil.error && (
          <p className="text-red-500">
            username エラー: {usernameInputUtil.error}
          </p>
        )}
        {passwordInputUtil.error && (
          <p className="text-red-500">
            password エラー: {passwordInputUtil.error}
          </p>
        )}
      </div>
    </div>
  )
}
