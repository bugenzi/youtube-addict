
chrome.storage.sync.get(["key"], function (result) {
  let youtubeState = result.key;
  console.log(result.key);
 if(youtubeState==="hide"){
    if (document.querySelector(".style-scope ytd-rich-grid-renderer")) {
      document.querySelector(".style-scope ytd-rich-grid-renderer").style.display =
        "none";
    
      document.querySelector("#secondary").style.display = "none";
    } if (
      document.querySelector(
        ".style-scope ytd-watch-next-secondary-results-renderer"
      )
    ) {
      document.querySelector(
        ".style-scope ytd-watch-next-secondary-results-renderer"
      ).style.display = "none";
    }
    
  }else if(youtubeState==="show"){
    //triggering for showing cotent
if (document.querySelector(".style-scope ytd-rich-grid-renderer")) {
  document.querySelector(".style-scope ytd-rich-grid-renderer").style.display =
    "block";

  document.querySelector("#secondary").style.display = "block";
} else if (
  document.querySelector(
    ".style-scope ytd-watch-next-secondary-results-renderer"
  )
) {
  document.querySelector(
    ".style-scope ytd-watch-next-secondary-results-renderer"
  ).style.display = "block"
}
  }
});


