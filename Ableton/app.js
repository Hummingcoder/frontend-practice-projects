const navBtn = document.querySelector("#navbtn");
const spanBtn = document.querySelector("#btn-span");
const container = document.querySelector(".invi-container");
const fixedNav = document.querySelector(".fixed-nav");
const navbar = document.querySelector("#nav");
let preOffset = window.scrollY;
navBtn.addEventListener("click", () => {
  container.classList.toggle("hide");
  if (!container.classList.contains("hide")) {
    spanBtn.innerHTML = "-";
  } else {
    spanBtn.innerHTML = "+";
  }
});

window.addEventListener("scroll", () => {
  let scrollHeight = window.scrollY;
  let navHeight = navbar.getBoundingClientRect().height;
  let fixednavHeight = fixedNav.getBoundingClientRect().height;
  console.log(scrollHeight > navHeight);
  if (scrollHeight > navHeight) {
    fixedNav.classList.add("fixed");
  } else {
    fixedNav.classList.remove("fixed");
  }
  // if(scrollHeight > navHeight +fixednavHeight )
  if (scrollHeight > navHeight + fixednavHeight) {
    if (preOffset > scrollHeight) {
      fixedNav.style.top = "0";
    } else {
      fixedNav.style.top = "-60px";
    }
  }
  preOffset = scrollHeight;
});
