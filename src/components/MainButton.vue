<template>
  <button :style="{ background: color }" class="btn">{{ text }}</button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    color: String,
    text: String,
  },
};
</script>

<style scoped></style>
