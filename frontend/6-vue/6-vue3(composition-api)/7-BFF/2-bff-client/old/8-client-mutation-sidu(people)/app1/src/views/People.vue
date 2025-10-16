<template>
  <div id="people" class="component">
    <aside>
      <ApolloQuery :query="GET_PEOPLE">
        <template slot-scope="{ result: { loading, error, data } }">
          <p v-if="loading" class="loading">Loading...</p>
          <p v-if="error" class="error">Error :(</p>
          <aside v-else>
            <ul v-if="data && data.people">
              <li v-for="person in data.people" :key="person.id" @click="selectPerson(person.id)">
                <span class="face">{{ peopleFaces(person.sex, person.id) }}</span>
                <span class="bloodType">{{ person.blood_type }}</span>
                <span class="peopleName">{{ person.first_name }} {{ person.last_name }}</span>
              </li>
            </ul>
          </aside>
        </template>
      </ApolloQuery>
    </aside>
    <section class="contents">
      <div v-if="selectedPerson" class="inputContainer">
        <table>
          <tr v-if="contentId !== 0">
            <td>Id</td>
            <td>{{contentId}}</td>
          </tr>
          <input type="hidden" name="id" v-model="inputs.id">
          <tr>
            <td>First Name</td>
            <td>
              <input type="text" name="first_name" v-model="inputs.first_name">
            </td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>
              <input type="text" name="last_name" v-model="inputs.last_name">
            </td>
          </tr>
          <tr>
            <td>Sex</td>
            <td>
              <select
                name="sex"
                v-model="inputs.sex"
              >
                <option v-for="(value, key) in sexes" :value="value" :key="key">{{ value }}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Blood Type</td>
            <td>
              <select
                name="blood_type"
                v-model="inputs.blood_type"
              >
                <option v-for="(value, key) in bloodTypes" :value="value" :key="key">{{ value }}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Serve Years</td>
            <td>
              <input type="number" name="serve_years" v-model="inputs.serve_years">
            </td>
          </tr>
          <tr>
            <td>Role</td>
            <td>
              <select
                name="role"
                v-model="inputs.role"
              >
                <option v-for="(value, key) in roles" :value="value" :key="key">{{ value }}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Team</td>
            <td>
              <input type="number" name="team" v-model="inputs.team">
            </td>
          </tr>
          <tr>
            <td>From</td>
            <td>
              <input type="text" name="from" v-model="inputs.from">
            </td>
          </tr>
        </table>

        <ul v-if="contentId !== 0">
          <li v-for="(value, key) in selectedPerson.tools" :value="value" :key="key">
            <span>{{ value.__typename === "Equipment" ? value.id : value.id }}</span>
          </li>
        </ul>

        <div class="buttons" v-if="contentId === 0">
          <button v-on:click="postPerson()">Submit</button>
        </div>
        <div class="buttons" v-else>
          <button v-on:click="editPerson(contentId)">Modify</button>
          <button v-on:click="deletePerson(contentId)">Delete</button>
          <button v-on:click="resetContentId">New</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ApolloProvider } from 'vue-apollo'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

const client = new ApolloClient({
  uri: 'http://localhost:4000/', // GraphQL Server URL
})

const GET_PEOPLE = gql`
  query GetPeople {
    people {
      id
      first_name
      last_name
      sex
      blood_type
    }
  }
`

const GET_PERSON = gql`
  query GetPerson($id: ID!) {
    person(id: $id) {
      id
      first_name
      last_name
      sex
      blood_type
      serve_years
      role
      team
      from   
      tools {
        __typename
        ... on Software {
          id
        }
        ... on Equipment {
          id
        }
      }
    }
  }
`

const DELETE_PERSON = gql`
  mutation DeletePerson($id: ID!) {
    deletePerson(id: $id) {
      id
    }
  }
`

const POST_PERSON = gql`
  mutation PostPerson($input: PostPersonInput!) {
    postPerson(input: $input) {
      id
      first_name
      last_name
      sex
      blood_type
      serve_years
      role
      team
      from
    }
  }
`

const EDIT_PERSON = gql`
  mutation EditTeam($id: ID!, $input: PostPersonInput!) {
    editPerson(id: $id, input: $input) {
      id
      first_name
      last_name
      sex
      blood_type
      serve_years
      role
      team
      from
    }
  }
`

export default {
  provide: () => ({
    apolloProvider: new ApolloProvider({ defaultClient: client }),
  }),
  data () {
    return {
      contentId: 0,
      sexes: ["male", "female"],
      bloodTypes: ["A", "B", "AB", "O"],
      roles: ["developer", "designer", "planner"],
      inputs: {
        manager: "",
        office: "",
        extension_number: "",
        mascot: "",
        cleaning_duty: "",
        project: "",
      },
      bySex: {
        male: ["🧑🏿", "👨🏻", "👦🏼", "‍🧓🏽", "🧔🏾"],
        female: ["👩🏻", "👧🏼", "👩🏽‍🦰", "👩🏾‍🦱", "👱🏿‍♀️"],
      },
      selectedPerson: null,
      GET_PEOPLE,
      GET_PERSON,
      DELETE_PERSON,
      POST_PERSON,
      EDIT_PERSON,
    }
  },
  methods: {
    peopleFaces(sex, id) {
      return this.bySex[sex][id % this.bySex[sex].length]
    },
    async selectPerson (id) {
      this.contentId = id
      const { data } = await this.$apollo.query({ query: this.GET_PERSON, variables: { id } })
      this.selectedPerson = data.person
      this.inputs = {
        first_name: data.person.first_name,
        last_name: data.person.last_name,
        sex: data.person.sex,
        blood_type: data.person.blood_type,
        serve_years: data.person.serve_years,
        role: data.person.role,
        team: data.person.team,
        from: data.person.from,
      }
    },
    resetContentId() {
      this.contentId = 0
      this.inputs = {
        first_name: "",
        last_name: "",
        sex: "",
        blood_type: "",
        serve_years: 0,
        role: "",
        team: 0,
        from: "",
      }
    },
    async deletePerson (id) {
      if (window.confirm('이 항목을 삭제하시겠습니까?')) {
        await this.$apollo.mutate({ 
          mutation: this.DELETE_PERSON, 
          variables: { id },
          refetchQueries: [{ query: this.GET_PEOPLE }] // 삭제 후 팀 목록을 업데이트
        })
        alert(`${id} 항목이 삭제되었습니다.`)
        this.resetContentId() // 삭제 후 입력 필드를 초기화
      }
    },
    async editPerson (id) {
      this.inputs.serve_years = Number(this.inputs.serve_years)
      this.inputs.team = Number(this.inputs.team)      
      await this.$apollo.mutate({ 
        mutation: this.EDIT_PERSON,
        variables: {
          id,
          input: this.inputs
        },
        refetchQueries: [{ query: this.GET_PEOPLE }] // 수정 후 팀 목록을 업데이트
      })
      alert(`${id} 항목이 수정되었습니다.`)
    },
    async postPerson () {
      this.inputs.serve_years = Number(this.inputs.serve_years)
      this.inputs.team = Number(this.inputs.team)
      const response = await this.$apollo.mutate({ // response 객체의 data 프로퍼티에 mutation의 결과를 담기
        mutation: this.POST_PERSON,
        variables: {
          input: this.inputs
        },
        refetchQueries: [{ query: this.GET_PEOPLE }] // 추가 후 팀 목록을 업데이트
      })
      alert(`${response.data.postPerson.id} 항목이 생성되었습니다.`)
      this.resetContentId() // 추가 후 입력 필드를 초기화
    }
  },
  created() {
    this.resetContentId(); // 초기화면 구동시, 입력 필드를 초기화
    this.selectedPerson = {}; // 초기화면 구동시, selectedPerson을 빈 객체로 초기화
  },
}
</script>
