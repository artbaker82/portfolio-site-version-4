import iterativeLanding from "./images/iterativeLanding.jpg";
import loginScreen from "./images/LoginScreen.svg";
export const PROJECTS_DATA = [
  {
    title: "Iterative Practice App",
    subTitle: "Music Practice App",
    description:
      "This is my first real project using React, I was inspired by music practice apps such as Modacity and Andante",
    image: iterativeLanding,
    id: 0,
    icons: ["react", "js", "html5", "css3"],
    links: [
      { name: "Code", url: "to github" },
      // { name: "View Site", url: "to site" },
    ],
  },
  {
    title: "Iterative Landing Page",
    subTitle: "Product Landing Page",
    description: "The landing page I build for the Bootstrap module of my bootcamp",
    image: iterativeLanding,
    id: 1,
    icons: ["react", "html5", "css3", "sass", "js", "bootstrap"],
    links: [
      { name: "Code", url: "to github" },
      { name: "View Site", url: "to site" },
    ],
  },
  {
    title: "Study App",
    subTitle: "flash cards style app",
    description:
      "A group project done with a few cohorts from my coding bootcamp. We did this using React and Redux for state management.",
    image: loginScreen,
    id: 2,
    icons: ["react", "html5", "css3", "js"],
    links: [
      { name: "Code", url: "https://github.com/Revlisc/desktopStudy" },
      // { name: "View Site", url: "to site" },
    ],
  },
];
