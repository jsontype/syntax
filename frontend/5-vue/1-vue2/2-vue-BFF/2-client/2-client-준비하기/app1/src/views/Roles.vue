<template>
  <div id="roles" class="component">
    <aside>
      <ul>
        <li v-for="role in roles" :key="role.id"
            :class="['roleItem', { 'on': contentId === role.id }]"
            @click="setContentId(role.id)">
          <span>{{ contentId === role.id ? '🔲' : '⬛' }}</span>{{ roleIcons[role.id] }} {{ role.id }}
        </li>
      </ul>
    </aside>
    <section class="contents">
      <div class="roleWrapper" v-if="currentRole">
        <h2>{{ currentRole.id }}</h2>
        <div class="requirement">
          <span>{{ currentRole.requirement }}</span> required
        </div>
        <h3>Members</h3>
        <ul>
          <li v-for="member in currentRole.members" :key="member.id">
            {{ member.last_name }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentId: "developer",
      // Mock DB
      roles: [
        {
          id: "developer",
          requirement: "Computer Science Degree",
          members: [
            { id: 1, last_name: "Davidson" },
            { id: 2, last_name: "Harris" },
            { id: 3, last_name: "Adams" },
          ],
        },
        {
          id: "designer",
          requirement: "Graphic Design Certificate",
          members: [
            { id: 4, last_name: "West" },
            { id: 5, last_name: "Ford" },
          ],
        },
        {
          id: "planner",
          requirement: "Portfolio",
          members: [{ id: 6, last_name: "Jenkins" }],
        },
      ],
      roleIcons: {
        developer: "💻",
        designer: "🎨",
        planner: "📝",
      },
    };
  },
  computed: {
    currentRole() {
      return this.roles.find((role) => role.id === this.contentId);
    },
  },
  methods: {
    setContentId(id) {
      this.contentId = id;
    },
  },
};
</script>
