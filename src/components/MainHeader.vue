<template>
  <header>
    <h1>{{ title }}</h1>
    <MainButton
      v-show="homepage"
      @btn-click="$emit('toggle-show-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
    ></MainButton>
  </header>
</template>

<script>
import MainButton from "@/components/MainButton";

export default {
  name: "MainHeader",
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    MainButton,
  },
  computed: {
    homepage() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
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
