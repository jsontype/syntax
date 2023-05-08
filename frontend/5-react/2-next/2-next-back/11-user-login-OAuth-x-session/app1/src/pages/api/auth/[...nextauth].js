import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
// 1. MongoDBAdapter와 connectDB 함수를 추가한다.
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import { connectDB } from "@/app/api/connectDB"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Next Back 용 clientId!",
      clientSecret: "Next Back 용 clientSecret!",
    }),
  ],
  secret: "Next Back 용 secret!",
  // 2. adapter 키의 밸류에 MongoDBAdapter(connectDB)를 추가한다.
  adapter: MongoDBAdapter(connectDB),
}

export default NextAuth(authOptions)
