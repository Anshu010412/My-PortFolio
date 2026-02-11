// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

// Education Section Logo's
import cbselogo from './assets/Education_photo/cbselogo.png';
import mdulogo from './assets/Education_photo/mdulogo.png';

// Project Section Logo's
import EMSLogo from './assets/work_img/ems.png';
import AnimatedLogo from './assets/work_img/animated.png';
import EcommerceLogo from './assets/work_img/E-commerce.png';
import SundownLogo from './assets/work_img/sundown.png';
import RealtimeLogo from './assets/work_img/Real-Time Map.png'
import GlassmorphismLogo from './assets/work_img/glassmorphism.png'
import RockPaperLogo from './assets/work_img/game.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      //   { name: 'Express JS', logo: expressjsLogo },
    //   { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const education = [
    {
      id: 1,
      img: mdulogo,
      school: "Rawal Institute of Management, (MDU-Rohtak)",
      date: "Aug 2023 - June 2026", 
      grade: "63.2%",
      desc: "I completed my Bachelor's degree in Computer Science (BCA) from Rawal Institute of Management, (MDU-Rohtak). Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Rawal Institute of Management allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Application - (BCA)",
    },
    {
      id: 2,
      img: cbselogo,
      school: "Govt Boys Sr. Sec. School, CBSE Board, New Delhi",
      date: "Apr 2022 - March 2023",
      grade: "72%",
      desc: "I completed my class 12 education from Govt Boys Sr. Sec. School, New Delhi, under the CBSE board, where I studied Accountancy, Mathematics, and Economics (COM) with Math.",
      degree: "CBSE(XII) - Commerce with Mathematics",
    },
    {
      id: 3,
      img: cbselogo,
      school: "Govt Boys Sr. Sec. School, CBSE Board, New Delhi",
      date: "Apr 2020 - March 2021",
      grade: "75%",
      desc: "I completed my class 10 education from Govt Boys Sr. Sec. School, New Delhi, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Employee Management System (EMS)",
      description:
        "Employee Management System (EMS) is a web application designed to manage employee data efficiently. It allows users to add, update, view, and delete employee records through a clean and intuitive interface.",
      image: EMSLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Local Storage"],
      github: "https://github.com/Anshu010412/Employee-Management-System-EMS-",
      webapp: "https://employee-management-system-ems-green.vercel.app/",
    },
    {
      id: 1,
      title: "Animated Product Slider",
      description:
        "Animated Product Slider is an interactive frontend component designed to showcase products in an engaging way. It features smooth animations, responsive layout, and intuitive navigation to enhance user experience. Built with modern frontend technologies, the slider helps highlight product details effectively while maintaining performance and visual consistency across different screen sizes.",
      image: AnimatedLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Anshu010412/Animated-Product-Slider",
      webapp: "https://anshu010412.github.io/Animated-Product-Slider/",
    },
    {
      id: 2,
      title: "Toys E-Commerce Website",
      description:
        "Toys E Commerce Website is a responsive web application designed for browsing and purchasing toys online. It features product listings, detailed product pages, and a smooth user friendly interface. The project focuses on clean design, easy navigation, and performance optimization to deliver an enjoyable shopping experience across desktop and mobile devices.",
      image: EcommerceLogo,
      tags: ["HTML", "CSS", "JavaScript","GSAP"],
      github: "https://github.com/Anshu010412/E-Commerce-Website-",
      webapp: "https://anshu010412.github.io/E-Commerce-Website-/",
    },
    {
      id: 3,
      title: "Sundown Studio Website",
      description:
        "Sundown Studio Website is a modern, visually rich frontend project inspired by creative studio websites. It focuses on smooth animations, clean layouts, and strong visual storytelling. The site is fully responsive and optimized for performance, providing an engaging browsing experience while showcasing design.",
      image: SundownLogo,
      tags: ["HTML", "CSS", "JavaScript","GSAP","swiper.js","Framer Motion"],
      github: "https://github.com/Anshu010412/Sundown-Frontend",
      webapp: "https://anshu010412.github.io/Sundown-Frontend/",
    },
    {
      id: 4,
      title: "Real Time Map",
      description:
        "A real time map feature that tracks and displays live user locations by sending location updates through Socket.io, allowing instant synchronization between users on the map without page refresh.",
      image: RealtimeLogo,
      tags: ["EJS", "Socket.IO", "REAL TIME", "CSS", "Javascript"],
      github: "https://github.com/Anshu010412/Real-Time-Map",
      webapp: "https://real-time-map--ghoshanish249.replit.app",
    },
    {
      id: 5,
      title: "Glassmorphism Login Page",
      description:
        "A clean and modern glassmorphism login page with a frosted glass effect, soft blur, and subtle transparency that creates a sleek, premium feel while keeping the interface simple and easy to use.",
      image: GlassmorphismLogo,
      tags: ["HTML5", "CSS", "JavaScript"],
      github: "https://github.com/Anshu010412/Glassmorphism-Login-Page",
      webapp:"https://anshu010412.github.io/Glassmorphism-Login-Page/"
    },
    
    {
      id: 6,
      title: "Rock Paper Scissor Game",
      description:
        "Rock Paper Scissors is a simple and fun hand game where two players compete by choosing rock, paper, or scissors at the same time. Each choice has a rule: rock beats scissors, scissors beat paper, and paper beats rock. In the digital version, the player competes against the computer, making quick decisions while the game instantly shows the winnerReact.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: RockPaperLogo,
      tags: ["HTML5", "CSS", "JavaScript"],
      github: "https://github.com/Anshu010412/Rock-Paper-game",
      webapp: "https://anshu010412.github.io/Rock-Paper-game/",
    },
  ];  