import { ref } from "vue"
import { z } from "zod"

const userSchema = z.object({
  name: z.string().min(1, "이름은 필수입니다"),
  age: z.number().min(18, "최소 나이는 18세입니다"),
})

const user = ref({
  name: "",
  age: 0,
})

export function useValidation() {
  const submitForm = () => {
    const result = userSchema.safeParse(user.value)
    console.log("검증 결과:", result)
    if (!result.success) {
      console.log("검증 실패:", result.error)
      return false
    }
    console.log("검증 성공:", user.value)
    return true
  }

  return { user, submitForm }
}
