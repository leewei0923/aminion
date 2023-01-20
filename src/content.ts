import { createApp } from "vue";
import "./index.css";
import { EventScheduler } from "src/utils/eventScheduler";
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

// window.addEventListener(
//   "message",
//   function (e) {
//     console.log("收到信息",e.data);
//   },
//   false
// );

// chrome.runtime.sendMessage({greeting: '你好，我是content-script呀，我主动发消息给后台！'}, function(response) {
//   console.log('收到来自后台的回复：' + response);
//  });

const eventScheduler = new EventScheduler();
const instance = eventScheduler.getInstance();

console.log(instance);