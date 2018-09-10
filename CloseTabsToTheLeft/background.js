browser.contextMenus.create({
    id: "close-to-left",
    title: "Close Tabs to the Left",
    contexts: ["tab"],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "close-to-left") {
      browser.tabs.query({currentWindow:true}).then((tabs) => {
        browser.tabs.remove(tabs.filter((e,i) => !e.pinned && e.index < tab.index).map((e) => e.id));
      })
    }
});
