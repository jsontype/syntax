<template>
  <div id="teams" class="component">
    <aside>
      <ApolloQuery :query="GET_TEAMS">
        <template slot-scope="{ result: { loading, error, data } }">
          <p v-if="loading" class="loading">Loading...</p>
          <p v-if="error" class="error">Error :(</p>
          <aside v-else>
            <ul>
              <li v-for="team in data.teams" :key="team.id">
                <span class="teamItemTitle" @click="selectTeam(team.id)">Team {{team.id}} : {{team.manager}}'s</span>
                <ul class="teamMembers">
                  <li v-for="member in team.members" :key="member.id">
                    {{roleIcons[member.role]}} {{member.first_name}} {{member.last_name}}
                  </li>
                </ul>
              </li>
            </ul>
          </aside>
        </template>
      </ApolloQuery>
    </aside>
    <section class="contents">
      <div v-if="selectedTeam" class="inputContainer">
        <table>
          <tr v-if="contentId !== 0">
            <td>Id</td>
            <td>{{contentId}}</td>
          </tr>
          <tr>
            <td>Manager</td>
            <td>
              <input type="text" name="manager" v-model="inputs.manager">
            </td>
          </tr>
          <tr>
            <td>Office</td>
            <td>
              <input type="text" name="office" v-model="inputs.office">
            </td>
          </tr>
          <tr>
            <td>Extension Number</td>
            <td>
              <input type="text" name="extension_number" v-model="inputs.extension_number">
            </td>
          </tr>
          <tr>
            <td>Mascot</td>
            <td>
              <input type="text" name="mascot" v-model="inputs.mascot">
            </td>
          </tr>
          <tr>
            <td>Cleaning Duty</td>
            <td>
              <input type="text" name="cleaning_duty" v-model="inputs.cleaning_duty">
            </td>
          </tr>
          <tr>
            <td>Project</td>
            <td>
              <input type="text" name="project" v-model="inputs.project">
            </td>
          </tr>
        </table>
          <div class="buttons" v-if="contentId === 0">
            <button>Submit</button>
          </div>
          <div class="buttons" v-else>
            <button v-on:click="editTeam(contentId)">Modify</button>
            <button v-on:click="deleteTeam(contentId)">Delete</button>
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

const GET_TEAMS = gql`
  query GetTeams {
    teams {
      id
      manager
      members {
        id
        first_name
        last_name
        role
      }
    }
  }
`

const GET_TEAM = gql`
  query GetTeam($id: ID!) {
    team(id: $id) {
      id
      manager
      office
      extension_number
      mascot
      cleaning_duty
      project
    }
  }
`

const DELETE_TEAM = gql`
  mutation DeleteTeam($id: ID!) {
    deleteTeam(id: $id) {
      id
    }
  }
`

const EDIT_TEAM = gql`
  mutation EditTeam($id: ID!, $input: PostTeamInput!) {
    editTeam(id: $id, input: $input) {
      id
      manager
      office
      extension_number
      mascot
      cleaning_duty
      project
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
      inputs: {
        manager: "",
        office: "",
        extension_number: "",
        mascot: "",
        cleaning_duty: "",
        project: "",
      },
      roleIcons: {
        developer: "💻",
        designer: "🎨",
        planner: "📝",
      },
      selectedTeam: null,
      GET_TEAMS,
      GET_TEAM,
      DELETE_TEAM,
      EDIT_TEAM,
    }
  },
  methods: {
    async selectTeam (id) {
      this.contentId = id
      const { data } = await this.$apollo.query({ query: this.GET_TEAM, variables: { id } })
      this.selectedTeam = data.team
      this.inputs = {
        manager: data.team.manager,
        office: data.team.office,
        extension_number: data.team.extension_number,
        mascot: data.team.mascot,
        cleaning_duty: data.team.cleaning_duty,
        project: data.team.project,
      }
    },
    resetContentId() {
      this.contentId = 0
      this.inputs = {
        manager: "",
        office: "",
        extension_number: "",
        mascot: "",
        cleaning_duty: "",
        project: "",
      }
    },
    async deleteTeam (id) {
      if (window.confirm('이 항목을 삭제하시겠습니까?')) {
        await this.$apollo.mutate({ 
          mutation: this.DELETE_TEAM, 
          variables: { id },
          refetchQueries: [{ query: this.GET_TEAMS }] // 삭제 후 팀 목록을 업데이트
        })
        this.resetContentId() // 삭제 후 입력 필드를 초기화
      }
    },
    async editTeam (id) {
      console.log(this.inputs)
      await this.$apollo.mutate({ 
        mutation: this.EDIT_TEAM,
        variables: {
          id,
          input: this.inputs
        },
        refetchQueries: [{ query: this.GET_TEAMS }] // 수정 후 팀 목록을 업데이트
      })
      alert(`${id} 항목이 수정되었습니다.`)
    },
  },
  created() {
    this.resetContentId(); // 초기화면 구동시, 입력 필드를 초기화
    this.selectedTeam = {}; // 초기화면 구동시, selectedTeam을 빈 객체로 초기화
  },
}
</script>
