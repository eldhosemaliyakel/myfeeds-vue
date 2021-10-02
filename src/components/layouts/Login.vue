<template>
  <div class="bg-theme login__container">
    <div class="container">
      <form class="login__form" @submit.prevent="login">
        <h4 class="mb-4">Welcome back!</h4>
        <div class="form-group">
          <label for="email-id">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email-id"
            placeholder="Please enter your email"
            v-model.trim="email"
          />
        </div>
        <div class="form-group">
          <label for="password-id">Password</label>
          <input
            type="password"
            class="form-control"
            id="password-id"
            placeholder="Please enter your password"
            autocomplete="off"
            v-model.trim="password"
          />
        </div>
        <button
          type="submit"
          class="btn btn-secondary btn-custom-one mt-3"
          :disabled="!isFormValid"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { LOCAL_STORAGE } from "../../utilities/appConstants";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    isFormValid() {
      return this.email && this.password;
    },
  },
  methods: {
    login() {
      localStorage.setItem(LOCAL_STORAGE.APP_ID, "615715841921b7438c70f886");
      this.$router.push("/user/users");
    },
  },
};
</script>
