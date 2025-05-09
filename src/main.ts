import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import App from "./App.vue";
import { router } from "./router/index.ts";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(router).mount("#app");
