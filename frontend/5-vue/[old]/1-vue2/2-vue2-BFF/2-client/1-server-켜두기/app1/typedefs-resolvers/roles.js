const { gql } = require("apollo-server")
const dbWorks = require("../dbWorks.js")

const typeDefs = gql`
  type RoleInfo {
    id: ID!
    job: String!
    requirement: String
    members: [People]
    equipments: [Equipment]
    softwares: [Software]
  }
`

const resolvers = {
  Query: {
    roles: (parent, args) => dbWorks.getRoles(args),
    role: (parent, args) => dbWorks.getRoles(args)[0],
  },
}

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
}
