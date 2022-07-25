<template>
  <header>
    <h1>{{ title }}</h1>
    <MainButton
      @toggle-show-add-task="$emit('toggle-show-add-task')"
      text="Add Task"
      color="green"
    ></MainButton>
  </header>
</template>

<script>
import MainButton from "@/components/MainButton";

export default {
  name: "MainHeader",
  props: {
    title: String,
  },
  components: {
    MainButton,
  },
  emits: ["toggle-show-add-task"],
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
