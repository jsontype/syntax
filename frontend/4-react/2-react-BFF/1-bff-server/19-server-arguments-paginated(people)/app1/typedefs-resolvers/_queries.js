const { gql } = require("apollo-server")

const typeDefs = gql`
  type Query {
    equipments: [Equipment]
    supplies: [Supply]
    equipmentAdvs: [EquipmentAdv]
    softwares: [Software]
    software: Software
    givens: [Given]
    people: [People]
    person: People
    peopleFiltered(
      team: Int
      sex: Sex
      blood_type: BloodType
      from: String
    ): [People]
    peoplePaginated(page: Int!, per_page: Int!): [People]
  }
`

module.exports = typeDefs
