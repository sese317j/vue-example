<template>
  <Header>
    <h1>{{ title }}</h1>
    <MainButton text="Add Task" color="green"></MainButton>
  </Header>
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
