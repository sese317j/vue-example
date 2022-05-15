<template>
  <div :key="task.id" v-for="task in tasks">
    <task-item :task="task" />
  </div>
</template>

<script>
import TaskItem from "@/components/TaskItem";

export default {
  name: "TaskList",
  props: {
    tasks: Array,
  },
  components: {
    TaskItem,
  },
};
</script>

<style scoped></style>
