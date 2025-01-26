const database = require('./database');
const { ApolloServer, gql } = require('apollo-server');

console.log(database);

// typeDefs: GraphQL schema
const typeDefs = gql`
  type Query {
    teams: [Team]
    team(id: Int): Team
    equipments: [Equipment]    
    supplies: [Supply]
  }
  type Mutation {
    insertEquipment(
      id: String,
      used_by: String,
      count: Int,
      new_or_used: String
    ): Equipment
    editEquipment(
      id: String,
      used_by: String,
      count: Int,
      new_or_used: String    
    ): Equipment
    deletEquipment(id: String): Equipment
  }
  type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
    supplies: [Supply]
  }
  type Equipment {
    id: String
    used_by: String
    count: Int
    new_or_used: String
  }
  type Supply {
    id: String
    team: Int
  }
`

// resolvers: Action function
const resolvers = {
  Query: {
    teams: () => database.teams.map(team => {
      team.supplies = database.supplies.filter(supply => supply.team === team.id);
      return team;
    }),
    team: (_parent, args, _context, _info) => {
      return database.teams.find(team => team.id === args.id);
    },
    equipments: () => database.equipments,
    supplies: () => database.supplies
  },
  Mutation: {
    insertEquipment: (_parent, args, _context, _info) => {
      database.equipments.push(args);
      return args;
    },
    editEquipment: (_parent, args, _context, _info) => {
      return database.equipments.filter((equipment) => {
        return equipment.id === args.id;
      }).map((equipment) => {
        Object.assign(equipment, args);
        return equipment;
      })[0];
    },
    deletEquipment: (_parent, args, _context, _info) => {
      // result (because it is a mock db)
      const deleted = database.equipments.filter((equipment) => equipment.id === args.id)[0];
      // db update
      database.equipments = database.equipments.filter((equipment) => equipment.id !== args.id);
      return deleted
    }
  }
}

// ApolloServer: GraphQL server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
