<template>
  <button
    @click="$emit('toggle-show-add-task')"
    :style="{ background: color }"
    class="btn"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    color: String,
    text: String,
  },
  methods: {
    onClick() {
      console.log("click");
    },
  },
};
</script>

<style scoped></style>
