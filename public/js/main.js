//Navbar-fixed
window.onscroll = function () {
  const header = document.querySelector("header");

  window.pageYOffset > header.offsetTop
    ? header.classList.add("navbar-fixed")
    : header.classList.remove("navbar-fixed");
};

//Logo
function updateLogo() {
  const logoElement = document.querySelector("#logo");
  if (logoElement) {
    logoElement.textContent =
      window.innerWidth >= 768 ? "Betranz Leenando" : "Betranz";
  }
}

window.addEventListener("resize", updateLogo);
window.addEventListener("load", updateLogo);

updateLogo();

//Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
