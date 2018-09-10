browser.contextMenus.create({
    id: "close-random",
    title: "Close Random Tab",
    contexts: ["tab"],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "close-random") {
      browser.tabs.query({currentWindow:true}).then((tabs) => {
        browser.tabs.remove(tabs[Math.floor(Math.random()*tabs.length)].id);
      })
    }
});
