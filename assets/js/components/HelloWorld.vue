<!-- assets/js/components/HelloWorld.vue -->
<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="greet">Greet</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, world!'
    }
  },
  methods: {
    greet() {
      alert('Hello!');
    }
  }
}
</script>

<style scoped>
/* Your component-specific styles here */
</style>
