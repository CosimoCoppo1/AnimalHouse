<template>
  <div class="float-left">
    <p>{{ todo_item.title }}</p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo_item"],
};
</script>

<style></style>
