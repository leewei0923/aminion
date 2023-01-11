chrome.contextMenus.create({
  id: "1",
  title: "收藏：%s",
  contexts: ["all"],
});


chrome.contextMenus.onClicked.addListener(function(info, tabs) {
    console.log(info);
})

export {};
