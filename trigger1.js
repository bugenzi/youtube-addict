//tigger for hiding content
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

