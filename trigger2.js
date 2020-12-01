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