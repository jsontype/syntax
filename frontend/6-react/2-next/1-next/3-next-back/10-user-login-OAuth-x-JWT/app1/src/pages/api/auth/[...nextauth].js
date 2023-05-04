import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    // 1. 사용하고 싶은 OAuth 프로바이더를 여기에 추가한다.
    GithubProvider({
      // 2. Github에서 발급받은 ID
      clientId: "1de7686c8d5ee8fb7259",
      // 3. Github에서 발급받은 Secret
      clientSecret: "2f0f6080ec40d5d59b1bc70c504486e31e1adb9f",
    }),
  ],
  // 4. JWT 생성시 쓰는 암호로, 일단 아무거나 적어둔다.
  secret: "admin",
}

export default NextAuth(authOptions)
