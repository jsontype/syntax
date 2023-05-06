import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import { connectDB } from "@/app/api/connectDB"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"

export const authOptions = {
  providers: [
    // OAuth
    GithubProvider({
      clientId: "Next Back 용 clientId!",
      clientSecret: "Next Back 용 clientSecret!",
    }),

    // PW + JWT Token
    CredentialsProvider({
      // 로그인페이지의 폼을 자동생성 해주는 코드
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      // 로그인 요청시 실행되는코드 : 직접 DB에서 id와 password를 비교하고, 맞으면 return 결과, 틀리면 return null 해야함
      async authorize(credentials) {
        const db = (await connectDB).db("db1")
        const user = await db
          .collection("user")
          .findOne({ email: credentials.email })
        if (!user) {
          console.log("해당 이메일은 없음")
          return null
        }
        const pwcheck = await bcrypt.compare(
          credentials.password,
          user.password
        )
        if (!pwcheck) {
          console.log("비번 틀림")
          return null
        }
        return user
      },
    }),
  ],

  // JWT 만료일설정
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30일
  },

  callbacks: {
    // JWT 만들 때 실행되는 코드 : user 변수는 DB의 유저정보가 담겨있고 token.user에 저장할 때 JWT에 들어간다.
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {}
        token.user.name = user.name
        token.user.email = user.email
        token.user.image = user.image
      }
      return token
    },
    // 유저 세션이 조회될 때마다 실행되는 코드
    session: async ({ session, token }) => {
      session.user = token.user // JWT Token에 있는 user 정보를 세션에 저장한다.
      return session
    },
  },

  adapter: MongoDBAdapter(connectDB),
  secret: "Next Back 용 secret!",
}

export default NextAuth(authOptions)
