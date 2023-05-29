const { ApolloServer } = require("apollo-server")
const _ = require("lodash")

const queries = require("./typedefs-resolvers/_queries")
const mutations = require("./typedefs-resolvers/_mutations")
const enums = require("./typedefs-resolvers/_enums")
const teams = require("./typedefs-resolvers/teams")
const roles = require("./typedefs-resolvers/roles")
const equipments = require("./typedefs-resolvers/equipments")
const supplies = require("./typedefs-resolvers/supplies")
const softwares = require("./typedefs-resolvers/softwares")
const givens = require("./typedefs-resolvers/givens")
const tools = require("./typedefs-resolvers/tools")
const people = require("./typedefs-resolvers/people")

const typeDefs = [
  queries,
  mutations,
  enums,
  teams.typeDefs,
  roles.typeDefs,
  equipments.typeDefs,
  supplies.typeDefs,
  softwares.typeDefs,
  givens.typeDefs,
  tools.typeDefs,
  people.typeDefs,
]

const resolvers = [
  teams.resolvers,
  roles.resolvers,
  equipments.resolvers,
  supplies.resolvers,
  softwares.resolvers,
  givens.resolvers,
  tools.resolvers,
  people.resolvers,
]

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
