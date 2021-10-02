<template>
  <app-header />
  <div class="container mt-5 position-relative">
    <router-view />
  </div>
</template>

<script>
import Header from "../UI/Header.vue";
export default {
  components: {
    "app-header": Header,
  },
};
</script>
