<template>
  <div class="mh-80" v-if="isLoading">
    <app-loader />
  </div>
  <template v-else>
    <h5 class="mb-4">Find the list of users:</h5>
    <div class="row">
      <div
        class="col-xs-6 col-sm-3 col-md-3 mb-4"
        v-for="user in users"
        :key="user.id"
      >
        <user-card :user="user" />
      </div>
    </div>
  </template>
</template>

<script>
import UserCard from "../UI/UserCard";
export default {
  components: {
    "user-card": UserCard,
  },
  computed: {
    users() {
      return this.$store.getters["users/users"];
    },
    isLoading() {
      return this.$store.getters["users/isLoading"];
    },
  },
  methods: {
    loadUsers() {
      this.$store.dispatch("users/loadUsers");
    },
  },
  created() {
    this.loadUsers();
  },
};
</script>