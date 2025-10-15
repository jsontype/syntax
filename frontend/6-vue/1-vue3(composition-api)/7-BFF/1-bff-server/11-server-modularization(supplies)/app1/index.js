const { ApolloServer } = require("apollo-server")

const queries = require("./typedefs-resolvers/_queries")
const mutations = require("./typedefs-resolvers/_mutations")
const equipments = require("./typedefs-resolvers/equipments")
const supplies = require("./typedefs-resolvers/supplies")

const typeDefs = [queries, mutations, equipments.typeDefs, supplies.typeDefs]

const resolvers = [equipments.resolvers, supplies.resolvers]

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
