function hide() {
  // chrome.tabs.executeScript({
  //   file: 'trigger1.js'
  // });
  chrome.storage.sync.set({ key: "hide" }, function () {
    console.log("Value is set to ");
  });
  chrome.tabs.reload();
}
function show() {
  // chrome.tabs.executeScript({
  //   file: 'trigger2.js'
  // });
  chrome.storage.sync.set({ key: "show" }, function () {
    console.log("Value is set to ");
  });
  chrome.tabs.reload();
}
if (document.getElementById("btn1").addEventListener("click", hide)) {
  document.getElementById("btn1").addEventListener("click", hide);
}

document.getElementById("btn2").addEventListener("click", show);

if (document.querySelector(".style-scope ytd-rich-grid-renderer")) {
  document.querySelector(".style-scope ytd-rich-grid-renderer").style.display =
    "none";

  document.querySelector("#secondary").style.display = "none";
} else if (
  document.querySelector(
    ".style-scope ytd-watch-next-secondary-results-renderer"
  )
) {
  document.querySelector(
    ".style-scope ytd-watch-next-secondary-results-renderer"
  ).style.display = "none";
}
