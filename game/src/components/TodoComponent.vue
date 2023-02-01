<template>
  <div class="card-body mb-2 list-group ml-3">
    <p class="card-text" v-if="!todo_items.length">
      Your Todo List is empty. Add Something!
    </p>
    <div
      v-for="todo_item in todo_items"
      :key="todo_item.id"
      class="list-group-item mb-2"
    >
      <TodoItem :todo_item="todo_item" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItemComponent.vue";

export default {
  name: "RegistratiComponent",
  props: ["todo_items"],
  components: { TodoItem },
};
</script>

<style></style>
