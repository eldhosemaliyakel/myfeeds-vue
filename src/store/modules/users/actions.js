import { API_URLS } from "../../../utilities/appConstants";
import axios from "../../../utilities/axios/axios";

export default {
    async loadUsers(context) {
        context.commit("setIsLoading", { isLoading: true });
        try {
            const usersResponse = await axios.get(API_URLS.USERS_GET);
            if(usersResponse.status === 200) {
                context.commit("setUsers", { users: usersResponse.data.data });
            }
        } catch(error) {
            console.log(error)
        } finally {
            context.commit("setIsLoading", { isLoading: false });
        }
    },
    setIsLoading(context, isLoading) {
        context.commit("setIsLoading", { isLoading });
    }
}