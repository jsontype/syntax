const { gql } = require("apollo-server")
const dbWorks = require("../dbWorks")

// implements Tool 명령어를 통해 Tool 인터페이스를 적용한다.
const typeDefs = gql`
  type Equipment implements Tool {
    id: ID!
    used_by: Role!
    count: Int
    new_or_used: NewOrUsed!
  }
  type Software implements Tool {
    id: ID!
    used_by: Role!
    developed_by: String!
    description: String
  }
  type EquipmentAdv {
    id: ID!
    used_by: String!
    count: Int!
    use_rate: Float
    is_new: Boolean!
    users: [String!]
  }
`

const resolvers = {
  Query: {
    equipments: (parent, args) => dbWorks.getEquipments(args),
    equipment: (parent, args) => dbWorks.getEquipments(args)[0],
    equipmentAdvs: (parent, args) =>
      dbWorks.getEquipments(args).map((equipment) => {
        if (equipment.used_by === "developer") {
          equipment.use_rate = Math.random().toFixed(2)
        }
        equipment.is_new = equipment.new_or_used === "new"
        // 50% 확률로 equipmentAdvs 항목에 users 배열을 추가하고, 그 안에 20% 확률로 개발자를 넣는다.
        if (Math.random() > 0.5) {
          equipment.users = []
          dbWorks.getPeople(args).forEach((person) => {
            if (person.role === equipment.used_by && Math.random() < 0.2) {
              equipment.users.push(person.last_name)
            }
          })
        }
        return equipment
      }),
  },

  Mutation: {
    increaseEquipment: (parent, args) => dbWorks.increaseEquipment(args),
    deleteEquipment: (parent, args) => dbWorks.deleteItem("equipments", args),
  },
}

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
}
