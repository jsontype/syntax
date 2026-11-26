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
            <button>Modify</button>
            <button>Delete</button>
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
      GET_TEAM
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
  }
}
</script>
