<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card elevation="3">
          <v-card-title class="primary white--text">
            <v-icon left dark>mdi-check-circle</v-icon>
            할 일 목록
          </v-card-title>

          <v-card-text class="pa-4">
            <!-- 할일 추가 입력 -->
            <v-row align="center" class="mb-4">
              <v-col cols="9">
                <v-text-field
                  v-model="todoText"
                  @keyup.enter="addTodoHandler"
                  label="새로운 할 일을 입력하세요"
                  outlined
                  dense
                  prepend-inner-icon="mdi-pencil"
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-btn
                  @click="addTodoHandler"
                  color="primary"
                  block
                  :disabled="!todoText.trim()"
                >
                  <v-icon left>mdi-plus</v-icon>
                  추가
                </v-btn>
              </v-col>
            </v-row>

            <!-- 통계 정보 -->
            <v-row class="mb-4">
              <v-col cols="4">
                <v-card color="info" dark>
                  <v-card-text class="text-center">
                    <div class="text-h6">{{ $store.getters.totalTodos }}</div>
                    <div class="caption">전체</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card color="warning" dark>
                  <v-card-text class="text-center">
                    <div class="text-h6">{{ $store.getters.pendingTodos }}</div>
                    <div class="caption">진행중</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card color="success" dark>
                  <v-card-text class="text-center">
                    <div class="text-h6">
                      {{ $store.getters.completedTodos }}
                    </div>
                    <div class="caption">완료</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- 할일 목록 -->
            <v-divider class="mb-4"></v-divider>

            <div v-if="todos.length === 0" class="text-center py-8">
              <v-icon size="64" color="grey lighten-2"
                >mdi-clipboard-text-outline</v-icon
              >
              <div class="text-h6 grey--text mt-2">할 일이 없습니다</div>
              <div class="caption grey--text">새로운 할 일을 추가해보세요!</div>
            </div>

            <v-list v-else>
              <v-list-item
                v-for="todo in todos"
                :key="todo.id"
                class="todo-item"
              >
                <v-list-item-action>
                  <v-checkbox
                    :input-value="todo.checked"
                    @change="toggleCheckbox(todo.id)"
                    color="primary"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title
                    :class="{ 'completed-text': todo.checked }"
                  >
                    {{ todo.text }}
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn
                    @click="deleteTodoHandler(todo.id)"
                    icon
                    color="error"
                    small
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mapActions } from "vuex"

@Component({
  computed: {
    todos() {
      return this.$store.state.todos
    },
  },
  methods: {
    ...mapActions(["addTodo", "deleteTodo", "toggleTodo"]),
  },
})
export default class TodosView extends Vue {
  private todoText: string = ""

  // Vuex computed
  todos!: any[]

  // Vuex actions
  addTodo!: (text: string) => void
  deleteTodo!: (id: number) => void
  toggleTodo!: (id: number) => void

  private addTodoHandler() {
    if (this.todoText.trim()) {
      this.addTodo(this.todoText.trim())
      this.todoText = ""
    }
  }

  private deleteTodoHandler(id: number) {
    this.deleteTodo(id)
  }

  private toggleCheckbox(id: number) {
    this.toggleTodo(id)
  }
}
</script>

<style scoped>
.completed-text {
  text-decoration: line-through;
  opacity: 0.6;
}

.todo-item:hover {
  background-color: #f5f5f5;
}
</style>
