import { ref } from "vue"

export function useDateUtil() {
  const currentDate = ref(new Date())

  const formatDate = (date, format = "YYYY-MM-DD") => {
    // date 객체로부터 연도를 가져와 YYYY 변수에 저장
    const YYYY = date.getFullYear() // 예: 2024
    // date 객체로부터 월을 가져와 MM 변수에 저장 (1월은 0이므로 +1을 해줌), padStart(2, "0")는 두 자리로 맞추기 위해 한 자리 숫자 앞에 0을 추가
    const MM = String(date.getMonth() + 1).padStart(2, "0") // 예: 05
    // date 객체로부터 일을 가져와 DD 변수에 저장, padStart(2, "0")는 두 자리로 맞추기 위해 한 자리 숫자 앞에 0을 추가
    const DD = String(date.getDate()).padStart(2, "0") // 예: 26
    // ... 다른 포맷도 필요시 여기에 추가 가능

    if (format === "YYYY-MM-DD") {
      return `${YYYY}-${MM}-${DD}`
    }
    if (format === "YYYY/MM/DD") {
      return `${YYYY}-${MM}-${DD}`
    }
    // ... 다른 포맷도 필요시 여기에 추가 가능
    return `${year}-${month}-${day}`
  }

  return {
    currentDate,
    formatDate,
  }
}
