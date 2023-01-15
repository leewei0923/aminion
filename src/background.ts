import { apiGetUuidUrl } from "./request/login/api";
import { sendMsgToContentScript } from "./utils/correspond";

chrome.contextMenus.create({
  id: "1",
  title: "收藏：%s",
  contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(function (info, tabs) {
  console.log(info);

  // apiGetUuidUrl({ key_id: "" }).then((res) => {
  //   console.log(res);
  // });

  
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
 console.log('收到来自content-script的消息：');
 console.log(request, sender, sendResponse);
 sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
});


export {};
