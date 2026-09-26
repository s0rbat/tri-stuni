const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".nav");

menuButton?.addEventListener("click", () => {
  navigation.classList.toggle("nav--open");
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navigation.classList.remove("nav--open"));
});
