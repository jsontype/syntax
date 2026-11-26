import { ref } from "vue"

export function useInputUtil(initialValue = "", options = {}) {
  const value = ref(initialValue)
  const error = ref(null)

  const {
    maxLength = 100,
    minLength = 0,
    required = false,
    noSpecialChars = false,
  } = options

  const validate = (newValue) => {
    if (required && !newValue) {
      error.value = "이 항목은 필수입니다."
      return false
    }
    if (newValue.length > maxLength) {
      error.value = `${maxLength}자 이상으로 입력할 수 없습니다.`
      return false
    }
    if (newValue.length < minLength) {
      error.value = `${minLength}자 미만으로 입력할 수 없습니다.`
      return false
    }
    if (noSpecialChars && /[^a-zA-Z0-9]/.test(newValue)) {
      error.value = "특수문자를 입력할 수 없습니다."
      return false
    }
    error.value = null
    return true
  }

  const onChange = (event) => {
    const newValue = event.target.value
    if (validate(newValue)) {
      value.value = newValue
    }
  }

  return {
    value,
    error,
    onChange,
  }
}
