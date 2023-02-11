import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

let app = createApp(App);
app.config.globalProperties.$globalVar = "http://localhost:8000";
app.config.globalProperties.$keyName = "userKey";
app.use(router).mount("#app");
