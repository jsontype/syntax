<template>
  <div id="roles" class="component">
    <aside>
      <ul>
        <li v-for="role in data.roles" :key="role.id" :class="{'roleItem': true, 'on': contentId === role.id}" @click="setContentId(role.id)">
          <span>{{ contentId === role.id ? '🔲' : '⬛' }}</span>
          {{ roleIcons[role.id] }} {{ role.id }}
        </li>
      </ul>
    </aside>
    <section class="contents" v-if="role">
      <div class="roleWrapper">
        <h2>{{ role.id }}</h2>
        <div class="requirement">
          <span>{{ role.requirement }}</span> required
        </div>
        <h3>Members</h3>
        <ul>
          <li v-for="member in role.members" :key="member.id">{{ member.last_name }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const contentId = ref('developer');

const data = {
  roles: [
    {
      id: 'developer',
      requirement: 'Computer Science Degree',
      members: [
        { id: 1, last_name: 'Davidson' },
        { id: 2, last_name: 'Harris' },
        { id: 3, last_name: 'Adams' },
      ],
    },
    {
      id: 'designer',
      requirement: 'Graphic Design Certificate',
      members: [
        { id: 4, last_name: 'West' },
        { id: 5, last_name: 'Ford' },
      ],
    },
    {
      id: 'planner',
      requirement: 'Portfolio',
      members: [{ id: 6, last_name: 'Jenkins' }],
    },
  ],
};

const roleIcons = {
  developer: '💻',
  designer: '🎨',
  planner: '📝',
};

function setContentId(id) {
  contentId.value = id;
}

const role = computed(() => data.roles.find((item) => item.id === contentId.value));
</script>
