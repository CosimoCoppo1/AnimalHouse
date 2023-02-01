<template>
  <div class="card_body">
    <form @submit="addTodo" class="form-inline">
      <div class="form-group col-md-8">
        <input
          type="text"
          class="form-control mr-3"
          v-model="title"
          name="title"
          placeholder="Add to do item..."
        />
      </div>
      <div class="form-group col-md-4">
        <input type="submit" value="Submit" class="btn" />
      </div>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddTodoItem",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodoItem = {
        title: this.title,
        id: uuidv4(),
      };
      // send to parent
      this.$emit("add-todo-event", newTodoItem);
      // clear the field
      this.title = "";
    },
  },
};
</script>

<style scoped>
input[type="text"] {
  flex: 10;
  padding: 5px;
}

input[type="submit"] {
  flex: 2;
}
</style>
