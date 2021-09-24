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

const view = {
  [sections[0].id]: false,
  [sections[1].id]: false,
};
console.log(view);

observer = new IntersectionObserver((entries) => {
  let id = entries[0].target.id;
  entries.forEach((entry) => {
    if (entry.intersectionRatio > -20) {
      console.log(id, "in view");
      view[id] = true;

      navLinks.forEach((link) => {
        if (link.id === `${id}-link`) {
          console.log(link.id);
        }
      });
    } else {
      console.log(id, "out of view");
    }
  });
});

sections.forEach((section) => {
  observer.observe(section);
});

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
