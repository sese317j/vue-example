<template>
  <Header>
    <h1>{{ title }}</h1>
  </Header>
</template>

<script>
export default {
  name: "MainHeader",
  props: ["title"],
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
