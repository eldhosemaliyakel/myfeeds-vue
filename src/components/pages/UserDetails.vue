<template>
  <div class="mh-80" v-if="isLoading">
    <app-loader />
  </div>
  <div class="row" v-else>
    <div class="col-xs-12 offset-sm-4 col-sm-4 mt-4">
      <div class="card card--user">
        <img :src="user.picture" class="card-img-top" alt="Profile picture" />
        <div class="card-body">
          <h5 class="card-title">{{user.firstName}} {{user.lastName}}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{user.email}}</li>
          <li class="list-group-item">{{user.phone}}</li>
          <li class="list-group-item">{{user.gender}}</li>
        </ul>
        <div class="card-body">
          <router-link to="/user/users" class="card-link text-dark">Go back</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API_URLS } from "../../utilities/appConstants";
import axios from "../../utilities/axios/axios";

export default {
  data() {
    return {
      isLoading: true,
      user: {},
    };
  },
  methods: {
    async loadUserDetails(userId) {
      try {
        const userResponse = await axios.get(`${API_URLS.USERS_GET}/${userId}`);
        if (userResponse.status === 200) {
          this.user = userResponse.data;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  created() {
    const userId = this.$route.params.userId;
    this.loadUserDetails(userId);
  },
};
</script>