
chrome.contextMenus.onClicked.addListener(genericOnClick);

async function genericOnClick(info, tab) {
    chrome.tabs.sendMessage(tab.id, { action: 'decodeBase64' });
}

chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        title: 'Base64 解码',
        id: 'checkbox',
        contexts: ["all"]
      });
});


