const { gql } = require("apollo-server")

// 인터페이스 타입을 정의한다.
const typeDefs = gql`
  interface Tool {
    id: ID!
    used_by: Role!
  }
`

const resolvers = {
  Tool: {
    __resolveType(tool, context, info) {
      if (tool.developed_by) {
        return "Software"
      }
      if (tool.new_or_used) {
        return "Equipment"
      }
      return null
    },
  },
}

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
}
