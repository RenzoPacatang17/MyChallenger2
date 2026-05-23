const menubtn = document.getElementById("menubtn");
const navlinks = document.getElementById("navlinks");

menubtn.addEventListener("click", () => {
  navlinks.classList.toggle("show");
});