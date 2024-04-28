const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    equipments: [Equipment]
    supplies: [Supply]
  }
`

module.exports = typeDefs
