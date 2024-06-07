// nav toggle-nav mob-btn
const nav = document.getElementById("nav");
const toggle = document.getElementById("toggle-nav");
const mob = document.getElementById("mob-btn");

mob.addEventListener("click", () => {
  if (toggle.classList.contains("hide")) {
    toggle.style.display = "flex";
    nav.style.backgroundColor = "#151515";
    toggle.classList.remove("hide");
  } else {
    toggle.style.display = "none";
    nav.style.backgroundColor = "#000000";
    toggle.classList.add("hide");
  }
});
