const database = require("./database")
const { ApolloServer, gql } = require("apollo-server")

// typeDefs : GraphQL 스키마(요청에 사용될 Query들을 정의하고, 해당 Query 요청시 반환될 데이터 타입을 설정하는 것)로, gql(Template Literal Tag) 함수로 생성됨
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
    deleteEquipment(id: String): Equipment
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

// resolvers : 데이터를 반환, 입력, 수정, 삭제하는 액션 함수들을 지정해둔 객체이다.
const resolvers = {
  // Query : 데이터를 반환하는 액션 함수들을 지정해둔 객체이다.
  Query: {
    // teams 쿼리를 날릴 때 team.id에 해당하는 supply를 team.supplies에 넣어서 함께 반환하도록 한다.
    teams: () =>
      database.teams.map((team) => {
        team.supplies = database.supplies.filter((supply) => {
          return supply.team === team.id
        })
        return team
      }),
    // args : 쿼리를 날릴 때 team(id: 3) {} 와 같이 날릴 때 id: 3 값을 args라 생각하면 된다.
    team: (parent, args, context, info) =>
      database.teams.filter((team) => {
        return team.id === args.id
      })[0],
    equipments: () => database.equipments,
    supplies: () => database.supplies,
  },
  
  // Mutation : 데이터를 입력, 수정, 삭제하는 액션 함수들을 지정해둔 객체이다.
  Mutation: {
    // args : 쿼리를 날릴 때 insertEquipment(id: "laptop", used_by: "kim", count: 17, new_or_used: "new") {} 와 같이 날릴 때 id, used_by, kim, new_or_used 값을 args라 생각하면 된다.
    insertEquipment: (parent, args, context, info) => {
      database.equipments.push(args)
      return args
    },
    // args : 쿼리를 날릴 때 editEquipment(id: "pen tablet", used_by: "designer", count: 30, new_or_used: "new") {} 와 같이 날릴 때 id, used_by, kim, new_or_used 값을 args라 생각하면 된다.
    editEquipment: (parent, args, context, info) => {
      return database.equipments.filter((equipment) => {
        return equipment.id === args.id
      }).map((equipment) => {
        Object.assign(equipment, args)
        return equipment
      })[0]
    },
    // args : 쿼리를 날릴 때 deleteEquipment(id: "notebook") {} 와 같이 날릴 때 id: "notebook" 값을 args라 생각하면 된다.
    deleteEquipment: (parent, args, context, info) => {
      // 삭제 후 결과값으로 받아올 데이터를 deleted 변수에 저장
      const deleted = database.equipments
        .filter((equipment) => {
          return equipment.id === args.id
        })[0]
      database.equipments = database.equipments
        .filter((equipment) => {
          return equipment.id !== args.id
        })
      // 데이터에서 해당 데이터 삭제 후 deleted 반환
      return deleted
    }
  }  
}

// ApolloServer 클래스 : GraphQL 서버를 생성하는 클래스로, 인자값에 typeDefs, resolvers를 넣어서 server 객체를 생성한다.
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
