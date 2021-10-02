<template>
    <p v-if="isLoading">User is loading...</p>
    User list {{coaches}}
</template>

<script>
export default {
    computed: {
        coaches() {
            return this.$store.getters['users/users'];
        },
        isLoading() {
            return this.$store.getters['users/isLoading'];
        }
    },
    methods: {
        loadUsers() {
            this.$store.dispatch("users/loadUsers");
        }
    },
    created() {
        this.loadUsers();
    }
}
</script>