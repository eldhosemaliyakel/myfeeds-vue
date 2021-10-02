import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      users: [{ name: "John Doe", id: "01" }],
      isLoading: false,
    };
  },
  actions,
  getters,
  mutations,
};
