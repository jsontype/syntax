<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card elevation="3">
          <v-card-title class="bg-primary text-white">
            <v-icon start>mdi-check-circle</v-icon>
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
                  variant="outlined"
                  density="compact"
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
                  <v-icon start>mdi-plus</v-icon>
                  추가
                </v-btn>
              </v-col>
            </v-row>

            <!-- 통계 정보 -->
            <v-row class="mb-4">
              <v-col cols="4">
                <v-card color="info" class="text-white">
                  <v-card-text class="text-center">
                    <div class="text-h6">{{ totalTodos }}</div>
                    <div class="text-caption">전체</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card color="warning" class="text-white">
                  <v-card-text class="text-center">
                    <div class="text-h6">{{ pendingTodos }}</div>
                    <div class="text-caption">진행중</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card color="success" class="text-white">
                  <v-card-text class="text-center">
                    <div class="text-h6">{{ completedTodos }}</div>
                    <div class="text-caption">완료</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- 진행률 -->
            <v-card class="mb-4" variant="outlined">
              <v-card-text>
                <div class="d-flex align-center justify-space-between mb-2">
                  <span class="text-body-1">완료율</span>
                  <span class="text-h6 text-primary"
                    >{{ completionRate }}%</span
                  >
                </div>
                <v-progress-linear
                  :model-value="completionRate"
                  color="primary"
                  height="8"
                  rounded
                ></v-progress-linear>
              </v-card-text>
            </v-card>

            <!-- 액션 버튼들 -->
            <v-row class="mb-4">
              <v-col cols="6">
                <v-btn
                  @click="clearCompleted"
                  color="error"
                  variant="outlined"
                  block
                  :disabled="completedTodos === 0"
                >
                  <v-icon start>mdi-delete-sweep</v-icon>
                  완료된 항목 삭제
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn
                  @click="showFilter = !showFilter"
                  color="secondary"
                  variant="outlined"
                  block
                >
                  <v-icon start>mdi-filter</v-icon>
                  필터 {{ showFilter ? "숨기기" : "보기" }}
                </v-btn>
              </v-col>
            </v-row>

            <!-- 필터 옵션 -->
            <v-expand-transition>
              <v-card v-show="showFilter" class="mb-4" variant="outlined">
                <v-card-text>
                  <v-btn-toggle
                    v-model="currentFilter"
                    color="primary"
                    group
                    mandatory
                  >
                    <v-btn size="small" value="all">
                      <v-icon start>mdi-format-list-bulleted</v-icon>
                      전체
                    </v-btn>
                    <v-btn size="small" value="pending">
                      <v-icon start>mdi-clock-outline</v-icon>
                      진행중
                    </v-btn>
                    <v-btn size="small" value="completed">
                      <v-icon start>mdi-check</v-icon>
                      완료
                    </v-btn>
                  </v-btn-toggle>
                </v-card-text>
              </v-card>
            </v-expand-transition>

            <!-- 할일 목록 -->
            <v-divider class="mb-4"></v-divider>

            <div v-if="filteredTodos.length === 0" class="text-center py-8">
              <v-icon size="64" color="grey-lighten-2"
                >mdi-clipboard-text-outline</v-icon
              >
              <div class="text-h6 text-medium-emphasis mt-2">
                {{
                  currentFilter === "all"
                    ? "할 일이 없습니다"
                    : `${getFilterLabel(currentFilter)} 할 일이 없습니다`
                }}
              </div>
              <div class="text-caption text-medium-emphasis">
                {{
                  currentFilter === "all"
                    ? "새로운 할 일을 추가해보세요!"
                    : "다른 필터를 선택해보세요!"
                }}
              </div>
            </div>

            <v-list v-else>
              <v-list-item
                v-for="todo in filteredTodos"
                :key="todo.id"
                class="todo-item"
              >
                <template v-slot:prepend>
                  <v-checkbox
                    :model-value="todo.checked"
                    @update:model-value="toggleCheckbox(todo.id)"
                    :color="todo.checked ? 'success' : 'primary'"
                  ></v-checkbox>
                </template>

                <v-list-item-title :class="{ 'completed-text': todo.checked }">
                  {{ todo.text }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-caption">
                  생성일: {{ formatDate(todo.createdAt) }}
                </v-list-item-subtitle>

                <template v-slot:append>
                  <v-btn
                    @click="deleteTodoHandler(todo.id)"
                    icon="mdi-delete"
                    color="error"
                    size="small"
                  ></v-btn>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import type { Todo } from "~/store";

type FilterType = "all" | "pending" | "completed";

@Component
export default class TodosView extends Vue {
  // Private reactive data
  private todoText: string = "";
  private showFilter: boolean = false;
  private currentFilter: FilterType = "all";

  // Vuex computed properties (직접 접근)
  get totalTodos(): number {
    return this.$store.getters.totalTodos;
  }

  get completedTodos(): number {
    return this.$store.getters.completedTodos;
  }

  get pendingTodos(): number {
    return this.$store.getters.pendingTodos;
  }

  get completionRate(): number {
    return this.$store.getters.completionRate;
  }

  get todos(): Todo[] {
    return this.$store.state.todos;
  }

  // Computed properties
  public get filteredTodos(): Todo[] {
    switch (this.currentFilter) {
      case "pending":
        return this.todos.filter((todo) => !todo.checked);
      case "completed":
        return this.todos.filter((todo) => todo.checked);
      default:
        return this.todos;
    }
  }

  // Lifecycle hooks
  public mounted(): void {
    this.$store.dispatch("loadTodosFromStorage");
  }

  // Public methods
  public addTodoHandler(): void {
    if (this.todoText.trim()) {
      this.$store.dispatch("addTodo", this.todoText.trim());
      this.todoText = "";
    }
  }

  public deleteTodoHandler(id: number): void {
    this.$store.dispatch("deleteTodo", id);
  }

  public toggleCheckbox(id: number): void {
    this.$store.dispatch("toggleTodo", id);
  }

  public clearCompleted(): void {
    this.$store.dispatch("clearCompleted");
  }

  public formatDate(date: Date): string {
    if (!date) return "";

    const now = new Date();
    const todoDate = new Date(date);
    const diff = now.getTime() - todoDate.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) {
      return "오늘";
    } else if (days === 1) {
      return "어제";
    } else if (days < 7) {
      return `${days}일 전`;
    } else {
      return todoDate.toLocaleDateString("ko-KR", {
        month: "short",
        day: "numeric",
      });
    }
  }

  public getFilterLabel(filter: FilterType): string {
    switch (filter) {
      case "pending":
        return "진행중인";
      case "completed":
        return "완료된";
      default:
        return "";
    }
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
