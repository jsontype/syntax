import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    // 1. 사용하고 싶은 OAuth 프로바이더를 여기에 추가한다.
    GithubProvider({
      // 2. Github에서 발급받은 ID
      clientId: "Next Back 용 clientId!",
      // 3. Github에서 발급받은 Secret
      clientSecret: "Next Back 용 clientSecret!",
    }),
  ],
  // 4. JWT 생성시 쓰는 암호로, 일단 아무거나 적어둔다.
  secret: "Next Back 용 secret!",
}

export default NextAuth(authOptions)
