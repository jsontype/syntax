import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
// MongoDBAdapter와 connectDB 함수를 추가한다.
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import { connectDB } from "@/app/api/connectDB"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "1de7686c8d5ee8fb7259",
      clientSecret: "2f0f6080ec40d5d59b1bc70c504486e31e1adb9f",
    }),
  ],
  secret: "admin",
  // adapter 키의 밸류에 MongoDBAdapter(connectDB)를 추가한다.
  adapter: MongoDBAdapter(connectDB),
}

export default NextAuth(authOptions)
