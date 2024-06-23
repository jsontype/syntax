<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        placeholder="username"
        :value="username"
        @input="onUsernameInputChange"
        required
      />
      <input
        type="password"
        placeholder="password"
        :value="password"
        @input="onPasswordInputChange"
        required
      />
      <button type="submit">Login</button>
    </form>
    <!-- 발리데이션 에러시의 메시지 처리 -->
    <p v-if="usernameError" style="color: red">{{ usernameError }}</p>
    <p v-if="passwordError" style="color: red">{{ passwordError }}</p>
  </div>
</template>

<script setup>
// import { ref } from "vue"
import { useInputUtil } from "@/utils/useInputUtil"

// Hooks
// username 발리데이션 : 5자 이상, 15자 이하, 필수, 특수문자 불가
const usernameUtil = useInputUtil("", {
  minLength: 5,
  maxLength: 15,
  required: true,
  noSpecialChars: true,
})
// password 발리데이션 : 8자 이상, 20자 이하, 필수
const passwordUtil = useInputUtil("", {
  minLength: 8,
  maxLength: 20,
  required: true,
})

const username = ref(usernameUtil.value)
const usernameError = ref(usernameUtil.error)
const handleUsernameChange = usernameUtil.onChange

const password = ref(passwordUtil.value)
const passwordError = ref(passwordUtil.error)
const handlePasswordChange = passwordUtil.onChange

const onUsernameInputChange = (event) => {
  username.value = event.target.value
  handleUsernameChange(event)
}

const onPasswordInputChange = (event) => {
  password.value = event.target.value
  handlePasswordChange(event)
}

const handleSubmit = () => {
  if (!usernameError.value && !passwordError.value) {
    alert("TODO: 콘솔로그 데이터로 제출 로직을 호출")
    // 제출 로직 추가
    console.log("Form submitted:", {
      username: username.value,
      password: password.value,
    })
  } else {
    alert("데이터 에러 발생!")
    console.log("Validation errors exist:", {
      usernameError: usernameError.value,
      passwordError: passwordError.value,
    })
  }
}
</script>
