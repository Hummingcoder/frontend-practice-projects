const data = [
  {
    name: "list-btn-1",
    temp: "contract",
    items: [
      "free contract maker",
      "social media management contract templates",
      "graphic design contract templates",
      "digital marketing contract templates",
    ],
  },
  {
    name: "list-btn-2",
    temp: "proposal",
    items: [
      "graphic design proposal template",
      "business propasal template",
      "brand ambassador proposal template",
      "data entry proposal template",
    ],
  },
  {
    name: "list-btn-3",
    temp: "invoice",
    items: [
      "social media invoice template",
      "contractor invoice template",
      "web design invoice template",
      "influencer invoice template",
    ],
  },
  {
    name: "list-btn-4",
    temp: "agreement",
    items: [
      "influencer agreement template",
      "influencer collaboration agreement template",
      "monthly retainer agreement template",
      "writer agreement template",
    ],
  },
  {
    name: "list-btn-5",
    temp: "quate",
    items: [
      "web design quatation template",
      "inerior design quotaion template",
      "digital marketing quotation template",
      "video production quotation template",
    ],
  },
  {
    name: "list-btn-6",
    temp: "Scope of Work",
    items: [
      "website development scope of work template",
      "digital marketing scope of work template",
      "consultant scope of work template",
      "interior design scope of work template",
    ],
  },
  {
    name: "list-btn-7",
    temp: "brief",
    items: [
      "design brief template",
      "architecture design brief",
      "fashion design brief",
      "creative design brief",
    ],
  },
];

const btnList = document.querySelector(".buttons-list");
const listItems = document.querySelector(".list-items");
const h3text = document.querySelector(".head-text");
const moreText = document.querySelector(".more-temps");

btnList.addEventListener("mouseover", (e) => {
  target = e.target;

  data.forEach((item) => {
    if (item.name === target.className) {
      listItems.innerHTML = "";
      h3text.textContent = item.temp;
      item.items.map((i) => {
        let li = document.createElement("li");
        li.innerText = i;
        listItems.appendChild(li);
      });
    }
    if (target.className === "list-btn-7") {
      moreText.style.display = "none";
    } else {
      moreText.style.display = "block";
    }
  });
});

// --- for cards --->

const checkbox = document.querySelector(".checkbox");
const show_on_check = document.querySelectorAll(".show-on-check");
const hide_on_check = document.querySelector(".hide-on-check");
const amount1 = document.querySelector(".amount-card1");
const amount2 = document.querySelector(".amount-card2");
document.addEventListener("DOMContentLoaded", () => {
  if (checkbox.checked) {
    show_on_check.forEach((element) => {
      element.style.display = "block";
    });
    hide_on_check.style.display = "none";
    amount1.textContent = "17";
    amount2.textContent = "32";
    console.log("hel");
  } else {
    show_on_check.forEach((element) => {
      console.log(element);
      element.style.display = "none";
    });
    hide_on_check.style.display = "block";
    amount1.textContent = "24";
    amount2.textContent = "39";
    console.log("nah");
  }
});

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    show_on_check.forEach((element) => {
      element.style.display = "block";
    });
    hide_on_check.style.display = "none";
    amount1.textContent = "17";
    amount2.textContent = "32";
  } else {
    show_on_check.forEach((element) => {
      element.style.display = "none";
    });
    hide_on_check.style.display = "block";
    amount1.textContent = "24";
    amount2.textContent = "39";
  }
});

const questions = document.querySelectorAll(".ques");

questions.forEach((ques) => {
  ques.addEventListener("click", (e) => {
    if (ques.classList.contains("showing")) {
      e.target.parentElement.style.height = "1.4rem";
      e.target.classList.remove("showing");
    } else {
      e.target.classList.add("showing");
      questions.forEach((item) => {
        item.parentElement.style.height = "1.4rem";
        if (e.target === item) {
          const ansHeight =
            e.target.nextElementSibling.getBoundingClientRect().height +
            e.target.getBoundingClientRect().height;
          item.parentElement.style.height = `${ansHeight}px`;
        }
      });
    }
  });
});
