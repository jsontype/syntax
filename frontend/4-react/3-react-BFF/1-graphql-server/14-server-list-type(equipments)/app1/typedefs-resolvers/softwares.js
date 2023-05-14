const { gql } = require("apollo-server")
const dbWorks = require("../dbWorks.js")

const typeDefs = gql`
  type Software {
    id: ID!
    used_by: Role!
    developed_by: String!
    description: String
  }
`

const resolvers = {
  Query: {
    softwares: (parent, args) => dbWorks.getSoftwares(args),
    software: (parent, args) => dbWorks.getSoftwares(args)[0],
  },
}

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
}
