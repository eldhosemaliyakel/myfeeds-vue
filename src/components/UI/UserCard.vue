<template>
  <div class="card card--user">
    <img :src="user.picture" class="card-img-top" alt="Profile picture" />
    <div class="card-body">
      <h5 class="card-title">{{user.firstName}} {{user.lastName}}</h5>
      <router-link :to="userDetailsURL" class="nav-link text-dark">View Profile</router-link>
    </div>
  </div>
</template>

<script>
export default {
    props: ["user"],
    computed: {
        userDetailsURL() {
            return `/user/users/${this.user.id}`
        }
    }
}
</script>