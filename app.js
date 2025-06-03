const dropdownBtn = document.getElementById("dropdown-btn");
dropdownBtn.addEventListener("click", showDropdown);

function showDropdown() {
  console.log("clicked");
  const dropdownContent = document.getElementById("content");
  dropdownContent.classList.toggle("show");
}
