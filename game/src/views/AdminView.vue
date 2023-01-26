<template>
  <div class="card center_div">
    <div class="sticky-top bg-light">
      <header class="card-title bg-dark header">
        <h2>My Todos List</h2>
      </header>
      <AddTodoItem v-on:add-todo-event="addTodoMethod" />
    </div>
    <div class="overflow-auto">
      <TodoComponent :todo_items="todo_items" />
    </div>
  </div>
</template>

<script>
import TodoComponent from "../components/TodoComponent.vue";
import AddTodoItem from "../components/AddTodoItem.vue";

export default {
  name: "AdminView",
  components: {
    TodoComponent,
    AddTodoItem,
  },
  data() {
    return {
      todo_items: [],
    };
  },
  methods: {
    addTodoMethod(newTodoItem) {
      this.todo_items = [...this.todo_items, newTodoItem];
    },
  },
  mounted() {
    console.log("App Mounted");
    if (localStorage.getItem("todo_items")) {
      this.todo_items = JSON.parse(localStorage.getItem("todo_items"));
    }
  },
  watch: {
    todo_items: {
      handler() {
        console.log("Todo Items array changed!");
        localStorage.setItem("todo_items", JSON.stringify(this.todo_items));
      },
      deep: true,
    },
  },
};
</script>

<style>
.center_div {
  margin-top: 50px;
  width: 80%;
}

.header {
  color: #ffffff;
  text-align: center;
  padding: 10px;
}
</style>
