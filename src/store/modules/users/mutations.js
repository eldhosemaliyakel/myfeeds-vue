export default {
    setUsers(state, payload) {
        state.users = payload.users;
    },
    setIsLoading(state, payload) {
        state.isLoading = payload.isLoading; 
    }
}