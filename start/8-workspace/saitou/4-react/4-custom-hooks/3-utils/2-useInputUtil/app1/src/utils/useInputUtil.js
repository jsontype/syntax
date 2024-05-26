import { useState } from "react"

export default function useInputUtil(options) {
  const [value, setValue] = useState("")
  const [error, setError] = useState(null)

  const validate = (newValue, options) => {
    const {
      maxLength = 100,
      minLength = 0,
      required = false,
      noSpecialChars = false,
    } = options

    if (required && !newValue) {
      // setError("이 항목은 필수입니다.")
      setError("この項目は必須です。")
      return false
    }
    if (newValue.length > maxLength) {
      // setError(`${maxLength}자 이상으로 입력할 수 없습니다.`)
      setError(`${maxLength}文字以上で入力できません。`)
      return false
    }
    if (newValue.length < minLength) {
      // setError(`${minLength}자 미만으로 입력할 수 없습니다.`)
      setError(`${minLength}文字未満で入力できません。`)
      return false
    }
    if (noSpecialChars && /[^a-zA-Z0-9]/.test(newValue)) {
      // setError("특수문자를 입력할 수 없습니다.")
      setError("特殊文字を入力できません。")
      return false
    }
    setError(null)
    return true
  }

  const onChange = (event) => {
    const newValue = event.target.value
    setValue(newValue)
    validate(newValue, options)
  }

  return {
    value,
    error,
    onChange,
  }
}
