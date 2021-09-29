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
    nav.style.backgroundColor = "#c0baa2";
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

const textConfig = {
  email: ["Email me at artbaker82@gmail.com"],
  github: ["View my Github profile", "https://github.com/artbaker82"],
  linkedIn: ["View my linkedIn profile", "https://www.linkedin.com/in/arthur-baker-a88818188/"],
};

contactLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.flex = 2;
    const text = link.querySelector(".text-hide");
    setTimeout(() => {
      text.classList.remove("text-hide");
      text.classList.add("text-anim-in");
    }, 400);
  });
});
contactLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    const text = link.querySelector(".text-anim-in");
    text.classList.remove("text-anim-in");
    text.classList.add("text-hide");

    link.style.flex = 1;
  });
});

// contactLinks.forEach((link) => {
//   link.addEventListener("mouseenter", () => {
//     const text = document.createElement("a");
//     text.href = textConfig[link.id][1];
//     text.setAttribute("target", "_blank");
//     text.setAttribute("rel", "noopener noreferrer");
//     link.style.flex = 2;
//     text.classList.add("link-text");
//     text.textContent = textConfig[link.id][0];
//     window.setTimeout(() => {
//       link.appendChild(text);
//     }, 250);
//   });
// });
// contactLinks.forEach((link) => {
//   link.addEventListener("mouseleave", () => {
//     const text = link.querySelector(".link-text");

//     link.removeChild(text);
//     link.style.flex = 1;
//   });
// });

// const createModal = (id) => {
//   let projectModal = document.createElement("div");

//   thumbnailContainer.appendChild(projectModal);
//   projectModal.classList.add("modal");
//   //render content
//   let title = document.createElement("h3");
//   let descripton = document.createElement("p");

//   descripton.textContent = modalData[id].description;
//   title.textContent = modalData[id].title;

//   projectModal.appendChild(title);
//   projectModal.appendChild(descripton);
// };
// //check if modal is open
// const openModal = () => {
//   const openModals = modalData.filter((item) => item.open);
//   return openModals.length <= 0 ? false : true;
// };

// //create elements dynamically
// modalData.forEach((item) => {
//   const thumbnail = document.createElement("div");
//   thumbnail.classList.add("thumbnail-card");
//   thumbnail.setAttribute("id", `${item.id}`);
//   thumbnailContainer.appendChild(thumbnail);
// });
// const thumbnails = document.querySelectorAll(".thumbnail-card");

// console.log(thumbnails);

// let openId;

// thumbnails.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     openId = e.target.id;
//     console.log(openId);
//     createModal(openId);
//   });
// });

// thumbnails.forEach((item) => {
//   console.log(item.id);

//   console.log("openModal", openModal());
//   item.addEventListener("click", (e) => {
//     if (!openModal()) {
//       openId = e.target.id;
//       modalData[openId].open = true;
//       item.classList.add("modal-expand");
//       console.log(openModal(), openId);
//     }
//     //if modal is clicked twice
//     else if (e.target.id == openId) {
//       console.log(item.id);
//       item.classList.remove("modal-expand");
//       modalData[openId].open = false;
//       openId = "";
//     } else {
//       console.log(e.target.id);
//     }
//   });
// });
