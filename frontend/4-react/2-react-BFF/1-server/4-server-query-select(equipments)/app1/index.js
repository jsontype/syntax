const database = require("./database")
const { ApolloServer, gql } = require("apollo-server")

// typeDefs : GraphQL 스키마(요청에 사용될 Query들을 정의하고, 해당 Query 요청시 반환될 데이터 타입을 설정하는 것)로, gql(Template Literal Tag) 함수로 생성됨
const typeDefs = gql`
  type Query {
    teams: [Team]
    equipments: [Equipment]
  }
  type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
  }
  type Equipment {
    id: String
    used_by: String
    count: Int
    new_or_used: String
  }
`

// resolvers : 데이터를 반환, 입력, 수정, 삭제하는 액션 함수들을 지정해둔 객체이다.
const resolvers = {
  // Query : 데이터를 반환하는 액션 함수들을 지정해둔 객체이다.
  Query: {
    teams: () => database.teams,
    equipments: () => database.equipments,
  },
}

// ApolloServer 클래스 : GraphQL 서버를 생성하는 클래스로, 인자값에 typeDefs, resolvers를 넣어서 server 객체를 생성한다.
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
