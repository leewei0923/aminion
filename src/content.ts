import { createApp } from "vue";
import "./index.css";
// import "./style.css";
import App from "./App.vue";

const divDom = document.createElement("div");
divDom.setAttribute("id", "collect");
divDom.style.position = "fixed";
divDom.style.top = "100px";
divDom.style.right = "100px";
divDom.style.zIndex = "100";

const bodyDom = document.querySelector("body");
bodyDom?.appendChild(divDom);
createApp(App).mount("#collect");
