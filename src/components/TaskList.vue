<template>
  <div :key="task.id" v-for="task in tasks">
    <task-item
      @delete-task="$emit('delete-task', task.id)"
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      :task="task"
    />
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
  emits: ["delete-task", "toggle-reminder"],
};
</script>

<style scoped></style>
