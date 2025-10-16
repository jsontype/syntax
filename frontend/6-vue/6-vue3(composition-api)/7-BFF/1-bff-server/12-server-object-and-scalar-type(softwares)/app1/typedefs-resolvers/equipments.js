const { gql } = require("apollo-server")
const dbWorks = require("../dbWorks")

const typeDefs = gql`
  type Equipment {
    id: String
    used_by: String
    count: Int
    new_or_used: String
  }
  type EquipmentAdv {
    id: ID!
    used_by: String!
    count: Int!
    use_rate: Float
    is_new: Boolean!
  }
`

const resolvers = {
  Query: {
    equipments: (parent, args) => dbWorks.getEquipments(args),
    equipmentAdvs: (parent, args) =>
      dbWorks.getEquipments(args).map((equipment) => {
        if (equipment.used_by === "developer") {
          // 개발자가 사용하는 장비일 경우, 사용량을 랜덤으로 만들어서 넣어줄 것이다.
          equipment.use_rate = Math.random().toFixed(2)
        }
        // 새것인지 중고인지를 Boolean 값으로 구분하는 필드를 추가한다.
        equipment.is_new = equipment.new_or_used === "new"
        return equipment
      }),
  },
  Mutation: {
    deleteEquipment: (parent, args) => dbWorks.deleteItem("equipments", args),
  },
}

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
}
