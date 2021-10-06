const nav = document.getElementById("nav-wrapper");
const navRight = document.getElementById("nav-right");
const navLinks = document.querySelectorAll(".nav-link");
const body = document.querySelector("body");
const thumbnailContainer = document.getElementById("projects-thumbnail-container");

body.addEventListener("scroll", () => {
  let navPos = nav.getBoundingClientRect().top;

  //show navbar at postion 100
  if (navPos < 100) {
    nav.classList.remove("hide-nav");
  } else {
    nav.classList.add("hide-nav");
  }

  if (navPos <= 0) {
    nav.style.backgroundColor = "#000000";
  } else {
    nav.style.backgroundColor = "none";
  }
});

//create reference to each section

const sections = document.querySelectorAll(".main-section");

//

let options = {
  threshold: 0.5,
};
let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const id = entry.target.id;
  console.log(id);
  const currentlyActive = document.querySelector(".active");
  const shouldBeActive = document.querySelector(`#${id}-link`);

  if (currentlyActive) {
    currentlyActive.classList.remove("active");
  }
  if (shouldBeActive) {
    shouldBeActive.classList.add("active");
  }
}

const contactLinks = document.querySelectorAll(".icon-link");



contactLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const text = link.querySelector(".text-hide");
    const icon = link.querySelector(".icon");
    icon.classList.add("icon-anim");
    icon.classList.remove("icon-anim-out");
    text.classList.remove("text-hide");
    text.classList.add("text-anim-in");
  });
});
contactLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    const text = link.querySelector(".text-anim-in");
    const icon = link.querySelector("span");
    icon.classList.remove("icon-anim");
    icon.classList.add("icon-anim-out");
    text.classList.remove("text-anim-in");
    text.classList.add("text-hide");
  });
});

//intersection observer for section fade in

const sectionsToAnimate = document.querySelectorAll(".animate");

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `anim2 1s ${entry.target.dataset.delay} forwards ease-out`;
    }
  });
});

sectionsToAnimate.forEach((section) => {
  observer.observe(section);
});
