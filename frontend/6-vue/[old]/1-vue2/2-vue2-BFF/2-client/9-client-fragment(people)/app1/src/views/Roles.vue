<template>
  <div id="roles" class="component">
    <aside>
      <ul>
        <li
          v-for="role in roles"
          :key="role.id"
          :class="['roleItem', contentId === role.id ? 'on' : '']"
          @click="selectRole(role.id)"
        >
          <span>{{ contentId === role.id ? "🔲" : "⬛" }}</span>{{ roleIcons[role.id] }} {{ role.id }}
        </li>
      </ul>
    </aside>
    <section class="contents">
      <div v-if="loading" class="loading">Loading...</div>
      <div v-if="error" class="error">Error :(</div>
      <div v-else-if="selectedRole" class="roleWrapper">
        <h2>{{ selectedRole.id }}</h2>
        <div class="requirement">
          <span>{{ selectedRole.requirement }}</span> required
        </div>
        <h3>Members</h3>
        <ul>
          <li v-for="member in selectedRole.members" :key="member.id">
            {{ member.last_name }}
          </li>
        </ul>
        <h3>Equipments</h3>
        <ul>
          <li v-for="equipment in selectedRole.equipments" :key="equipment.id">
            {{ equipment.id }}
          </li>
        </ul>
        <h3>Softwares</h3>
        <ul>
          <li v-for="software in selectedRole.softwares" :key="software.id">
            {{ software.id }}
          </li>
        </ul>
      </div>
      <div v-else class="roleWrapper">Select Role</div>
    </section>
  </div>
</template>

<script>
import ApolloClient from "apollo-boost"
import gql from "graphql-tag"

const client = new ApolloClient({
  uri: "http://localhost:4000/", // GraphQL API 주소
})

const GET_ROLES = gql`
  query GetRoles {
    roles {
      id
    }
  }
`

const GET_ROLE = gql`
  query GetRole($id: ID!) {
    role(id: $id) {
      id
      requirement
      members {
        id
        last_name
      }
      equipments {
        id
      }
      softwares {
        id
      }
    }
  }
`

export default {
  data() {
    return {
      contentId: null,
      loading: false,
      error: null,
      roles: [],
      selectedRole: null,
      roleIcons: {
        developer: "💻",
        designer: "🎨",
        planner: "📝",
      },
    }
  },
  created() {
    this.loadRoles()
  },
  methods: {
    async loadRoles() {
      this.loading = true
      try {
        const { data } = await client.query({ query: GET_ROLES })
        this.roles = data.roles
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async selectRole(id) {
      this.contentId = id
      this.loading = true
      try {
        const { data } = await client.query({
          query: GET_ROLE,
          variables: { id },
        })
        this.selectedRole = data.role
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
