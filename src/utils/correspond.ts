export function sendMsgToContentScript(message: any, callback: Function) {

  //TODO:放置位置出错
  console.log(chrome);

  // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //   if (typeof tabs[0].id === "number") {
  //     chrome.tabs.sendMessage(tabs[0]?.id, message, function (response) {
  //       if (typeof callback === "function") {
  //         callback(response);
  //       }
  //     });
  //   }
  // });
}

export function receiveContentScript(label: string) {
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request.hasOwnProperty(label)) {
      console.log(request.value);
    }

    sendResponse("我收到你的信息了");
  });
}
