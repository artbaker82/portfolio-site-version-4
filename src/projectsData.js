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
      But more importantly, the importance of clear communication, both verbally and in code became very clear as we worked on this app. Moving forward, as I learn more about backend development,
      I build a REST API and store user data using MongoDB.`,
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
      `This is the first project I build on my own using React and Redux. I was inspired by practice joural apps like Modacity and Andante. Being a musician, I have struggled with organizing and documenting my practice sessions.
      I've had many friends and colleages who keep logs of each practice session, and the idea always intrigued me. When brainstorming about what to build for my first React project, a practice app seemed like a great option.
      This project is far from complete, but after we moved on to React Native, I had a hard time finding time to work on this app. As I become a more experienced MERN stack developer, this will be a project that I will continually work on. Looking at the code after a break, the first
      thing that I notice is the prop drilling. This will be the first thing I fix when I revisit this project. Some things to add are, a component to record practice sessions, leave notes a specific timestamps during the session, and track time spend practicing. And of course, give the whole project a facelift in terms of styling, which is absolutely my weakness as a developer.`,
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
    description: `This is a project I build for the Bootstrap module of my coding bootcamp. After I had the idea of building a practice app for the React module,
    a landing page for the app was a natural choice. My goal here was to avoid using a strict grid based layout. The first thing I did to achieve this is
    use a non-horizontal border for the header section. This is something I have seen on many modern websites. I also experimented a lot with absolute positioning of the images to give the site a 
    more fluid look and feel. Of course, design is not my strong suit, and it is something I naturally try to avoid. This project helped me realize this about myself. However, good design, like anything else is 
    a learnable skill and it is something that I will try to improve with practice.`,
    image: iterativeLanding,
    id: 1,
    icons: ["react", "html5", "css3", "sass", "js", "bootstrap"],
    links: [
      { name: "Code", url: "to github" },
      //{ name: "View Site", url: "to site" },
    ],
  },
];
