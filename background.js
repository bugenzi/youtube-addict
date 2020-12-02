chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log(tab.url);
  if (/^https:\/\/www\.youtube/.test(tab.url)) {
    chrome.tabs.insertCSS(null, { file: "./mystyles.css" });
    chrome.tabs.executeScript(null, { file: "./foregroung.js" }, () =>
      console.log("i injected")
    );
  }
});
chrome.tabs.onActivated.addListener((tab) => {
 
  
  chrome.tabs.get(tab.tabId, (data) => {
   
  });
});
