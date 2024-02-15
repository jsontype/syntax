const { gql } = require("apollo-server")
const dbWorks = require("../dbWorks.js")

const typeDefs = gql`
  type People {
    id: ID!
    first_name: String!
    last_name: String!
    sex: Sex!
    blood_type: BloodType!
    serve_years: Int!
    role: Role!
    team: ID!
    from: String!
    tools: [Tool]
    givens: [Given]
  }
`

const resolvers = {
  Query: {
    people: (parent, args) => dbWorks.getPeople(args),
    person: (parent, args) => dbWorks.getPeople(args)[0],
    peopleFiltered: (parent, args) => dbWorks.getPeople(args),
  },
}

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
}
