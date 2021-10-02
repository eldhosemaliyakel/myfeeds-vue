import { API_URLS } from "../../../utilities/appConstants";
import axios from "../../../utilities/axios/axios";

export default {
    async loadUsers(context) {
        context.commit("setIsLoading", { isLoading: true });
        try {
            const users = await axios.get(API_URLS.USERS_GET);
            console.log(users);
        } catch(error) {
            console.log(error)
        } finally {
            context.commit("setIsLoading", { isLoading: false });
        }
    },
    setUsers(context, users) {
        context.commit("setUsers", { users });
    },
    setIsLoading(context, isLoading) {
        context.commit("setIsLoading", { isLoading });
    }
}