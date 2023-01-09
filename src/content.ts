import { createApp } from "vue";
import "./index.css";
// import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";

const divDom = document.createElement("div");
divDom.setAttribute("id", "collect");
divDom.style.position = "fixed";
divDom.style.top = "100px";
divDom.style.right = "100px";
divDom.style.zIndex = "9999";

const bodyDom = document.querySelector("body");
bodyDom?.appendChild(divDom);

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount("#collect");
