const container = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", () => {
  let navlinks = document.querySelectorAll("#link-tag a");
  // container.style.backgroundColor = "rgb(255, 97, 142)";

  window.addEventListener("scroll", () => {
    let fromtop = window.scrollY;

    if (fromtop >= 0 && fromtop < 400) {
      container.style.backgroundColor = "rgb(255, 97, 142)";
    } else if (fromtop >= 403 && fromtop < 900) {
      container.style.backgroundColor = "rgb(255, 255, 255)";
    } else if (fromtop >= 906 && fromtop < 1700) {
      container.style.backgroundColor = "rgb(0, 194, 181)";
    } else if (fromtop >= 1710 && fromtop < 2400) {
      container.style.backgroundColor = "rgb(255, 100, 23)";
    } else if (fromtop >= 2400 && fromtop < 3200) {
      container.style.backgroundColor = "rgb(255, 191, 0)";
    } else if (fromtop >= 3200 && fromtop < 3900) {
      container.style.backgroundColor = "rgb(28, 62, 186)";
    } else if (fromtop >= 3900) {
      container.style.backgroundColor = "rgb(226, 4, 18)";
    }

    navlinks.forEach((link) => {
      let section = document.querySelector(link.hash);
      console.log(section.offsetTop);
      if (fromtop >= 0 && fromtop < 200) {
        link.classList.add("boldTag");
      } else {
        link.classList.remove("boldTag");
      }
      if (section.offsetTop > 200) {
        if (
          section.offsetTop <= fromtop + 1 &&
          section.offsetTop + section.offsetHeight > fromtop + 1
        ) {
          link.classList.add("boldTag");
        } else {
          link.classList.remove("boldTag");
        }
      }
    });
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   let navlinks = document.querySelectorAll("#link-tag a");
//   // container.style.backgroundColor = "rgb(255, 97, 142)";

//   window.addEventListener("scroll", () => {
//     let fromtop = window.scrollY;

//     navlinks.forEach((link) => {
//       let section = document.querySelector(link.hash);
//       if (
//         section.offsetTop <= fromtop + 1 &&
//         section.offsetTop + section.offsetHeight > fromtop + 1
//       ) {
//         console.log(link);
//         link.classList.add("boldTag");
//       } else {
//         link.classList.remove("boldTag");
//       }
//     });
//   });
// });
