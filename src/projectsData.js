import iterativeLanding from "./images/iterativeLanding.jpg";
import loginScreen from "./images/LoginScreen.svg";

export const PROJECTS_DATA = [
  {
    title: "Study App",
    subTitle: "flash cards style app",
    description: `After getting more comfortable working with React and Redux, myself and two of my cohorts from the coding bootcamp I attend
      decided to put our skills to work and build a flashcards style study app. This was our first experience working in a collaborative setting, and
      considering all the things that could have gone wrong, the project went a lot smoother than we anticipated. That being said, we definitely encountered some
      difficulty in the beginning navigating the complexities of using Git. We were all familiar pushing changes to our own personal project repos on Github,
      but as for the true purpose of Git, we were all pretty much in the dark. But after some careful reading and a few youtube tutorials, were were all making pull requests and merging like pros!
      Aside from getting great experience with Git, this project also solidified some React fundamentals such as building reusable components, and the application of presentational and container components.
      But more importantly, the importance of clear communication, both verbally and in code became very clear as we worked on this app.`,
    image: loginScreen,
    id: 2,
    icons: ["react", "html5", "css3", "js"],
    links: [
      { name: "Code", url: "https://github.com/Revlisc/desktopStudy" },
      // { name: "View Site", url: "to site" },
    ],
  },
  {
    title: "React Native Study App",
    subTitle: "flash cards style app",
    description: `This was another group project made using React Native. In fact, the original idea was to build the study app using React Native right off the bat. But considering the admonishment of a more experienced developer, we decided
      to build it first using React first, and transfer it over to Native afterwards. To say the least, I'm super glad we followed that advice.
      Building the app without using Native gave us the opportunity to build out the logic and components in an environment we were all more comfortable using.
      To be honest, I was really naive in thinking building this app in React Native would be a matter of simply copy and pasting the logic over and changing a few div tags to view tags.
      As a write this a few weeks later, after not touching the project since, I realize that I really dug myself into a hole and overcomplicated things, resulting in components that were not reusable.
      This app is far from complete (this goes for all of them), and some things on my todo list for this project are rework the logic dealing with question and set editing to resuse the same compoents that 
      deal with new set and question creation. Overall, the best part of this project is the chance to collaborate with other classmates and share ideas. This may be what excites me most about software development in general. There is always the chance to learn 
      something from your teammates!`,
    image: loginScreen,
    id: 3,
    icons: ["react", "js"],
    links: [
      { name: "Code", url: "https://github.com/Revlisc/studyapp" },
      // { name: "View Site", url: "to site" },
    ],
  },
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
];
