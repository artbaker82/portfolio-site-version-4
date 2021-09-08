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

const modalData = [
  {
    title: "Iterative Practice App",
    description: "paragraph here",
    url: "url here",
    id: 0,
    open: false,
  },
  {
    title: "Iterative Landing Page",
    description: "paragraph here",
    url: "url here",
    id: 1,
    open: false,
  },
];

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
