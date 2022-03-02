import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import PrimeVue from "primevue/config";

const app = createApp(App);

app.use(router);

app.use(PrimeVue);
app.component(("infinite-loading", InfiniteLoading));
app.mount("#app");
