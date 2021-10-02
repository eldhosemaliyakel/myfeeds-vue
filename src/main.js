import { createApp } from 'vue';

import router from "./router";
import store from "./store";
import App from "./App";
import Loader from "./components/UI/Loader";

const app = createApp(App);
app.use(router);
app.use(store);
app.component("app-loader", Loader);

app.mount('#app')
