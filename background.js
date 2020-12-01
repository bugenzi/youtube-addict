chrome.tabs.onActivated.addListener((tab) => {
  chrome.storage.sync.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
  });
  console.log(tab);
  chrome.tabs.get(tab.tabId, (data) => {
    if (/^https:\/\/www\.youtube/.test(data.url)) {
      chrome.tabs.insertCSS(null, { file: "./mystyles.css" });
      chrome.tabs.executeScript(null, { file: "./foregroung.js" }, () =>
        console.log("i injected")
      );
    }
  });
});
