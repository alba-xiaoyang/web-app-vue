import { createApp } from "vue";
import "./assets/main.css";
import router from "./router";
import { firebaseApp } from "./firebase";
import { VueFire, VueFireAuth, VueFireFirestoreOptionsAPI } from "vuefire";
import App from "./App.vue";

const app = createApp(App);

app.use(router);

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireFirestoreOptionsAPI(), VueFireAuth()],
});

app.mount("#app");
