import pettyCashManagerImg from "../assets/images/icons/pettycash.png";
import reactIcon from "../assets/images/icons/react-js.png";
import nodeJsIcon from "../assets/images/icons/node-js.png";
import HTMLIcon from "../assets/images/icons/html-5.png";
import javaScriptIcon from "../assets/images/icons/js.png";
import cssIcon from "../assets/images/icons/css-3.png";
import bootstrapIcon from "../assets/images/icons/bootstrap-5-logo-icon.png";
import reactRouterIcon from "../assets/images/icons/react-router.svg";
import reduxIcon from "../assets/images/icons/redux.png";
import gitIcon from "../assets/images/icons/git-icon.png";
import vsCodeIcon from "../assets/images/icons/visual-studio-code-icon.png";
import postManIcon from "../assets/images/icons/postman-icon.png";
import mongoDB from "../assets/images/icons/mongodb.png";
import expressJSIcon from "../assets/images/icons/express-js.png";

import studentTeacher from "../assets/images/icons/student-teacher-management.png";
import weather from "../assets/images/icons/weather_Air-polution_Application.png";
import userManagement from "../assets/images/icons/user-management.png";
import passwordReset from "../assets/images/icons/password-reset-flow.png";
import mealFinder from "../assets/images/icons/meal-and-receipi-finder.png";
import qrCodeWebsite from "../assets/images/icons/qr-code-generator.png";

import bookSalesBlogImg from "../assets/images/bookSalesBlogImg.jpeg";
import contactManagerImg from "../assets/images/contactManagerImg.png";
import democracyHub from "../assets/images/democracyHub.jpeg";

const projeectsData = [
  {
    id: 1,
    title: "PettyCash Manager",
    description:
      "IMPREST-IVE is your comprehensive solution for managing petty cash effortlessly and efficiently. Designed with simplicity and functionality in mind, our application streamlines the process of handling income and expenses, ensuring that your business’s financial transactions are tracked with precision.",
    technologies: [
      { name: "React", icon: reactIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "JavaScript", icon: javaScriptIcon },
      { name: "Git", icon: gitIcon },
      { name: "VS Code", icon: vsCodeIcon },
      { name: "Postman", icon: postManIcon },
      { name: "MongoDB", icon: mongoDB },
      { name: "NodeJS", icon: nodeJsIcon },
      { name: "ExpressJS", icon: expressJSIcon },
      { name: "Redux", icon: reduxIcon },
      { name: "React Router Dom", icon: reactRouterIcon },
    ],
    githubLink: "https://github.com/LoordhuJeyakumar/pettycash-manager-fe",
    liveLink: "https://imprest-ive-pettycash-manager.netlify.app/",
    image: pettyCashManagerImg,
  },
  {
    id: 2,
    title: "Student Teacher Management System",
    description:
      "The Student Teacher Management System is a comprehensive solution for efficiently managing students and teachers. It streamlines the process of creating, editing, and deleting teacher and student details, tracking online status.",
    technologies: [
      { name: "React", icon: reactIcon },
      { name: "JSON Server" },
      { name: "Toastify" },
      { name: "React Router Dom", icon: reactRouterIcon },
    ],
    githubLink:
      "https://github.com/LoordhuJeyakumar/React-App/tree/student-teacher-management",
    liveLink: "https://student-teacher-management-react-crud.netlify.app/",
    image: studentTeacher,
  },
  {
    id: 3,
    title: "Weather and Air-pollution Application",
    description:
      "A Weather and Air Pollution Application combines real-time weather forecasts with air quality data. It serves as a valuable tool for users to make informed decisions about their daily activities and health.",
    technologies: [
      { name: "HTML", icon: HTMLIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "JSON" },
      { name: "RESTApi" },
      { name: "CSS", icon: cssIcon },
    ],
    githubLink:
      "https://github.com/LoordhuJeyakumar/Tasks/tree/main/Day_19/WeatherApplication",
    liveLink: "https://weather-and-air-polution-application.netlify.app/",
    image: weather,
  },
  {
    id: 4,
    title: "User Management System",
    description:
      " The User Management System is a web application that efficiently handles user-related tasks within an organization or platform. It allows administrators to create, edit, and delete user details, including their personal accounts while managing their roles and permissions. Additionally, users can update their profiles and access relevant features based on their assigned roles. The system ensures security, scalability, and ease of use for both administrators and users.",
    technologies: [
      { name: "React", icon: reactIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "JSON" },
      { name: "RESTApi" },
      { name: "CSS", icon: cssIcon },
    ],
    githubLink:
      "https://github.com/LoordhuJeyakumar/React-App/tree/user-management",
    liveLink: "https://user-management-system-react-crud.netlify.app/",
    image: userManagement,
  },
  {
    id: 5,
    title: "Password Reset Flow",
    description:
      "Password Reset Flow Website that utilizes Nodemailer for email verification and JWT (JSON Web Tokens) for secure access: The Password Reset Flow Website provides a robust mechanism for users to create account and login to that account and reset their forgotten passwords.",
    technologies: [
      { name: "React", icon: reactIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "MongoDB", icon: mongoDB },
      { name: "NodeJS", icon: nodeJsIcon },
      { name: "ExpressJS", icon: expressJSIcon },
      { name: "React Router Dom", icon: reactRouterIcon },
    ],
    githubLink: "https://github.com/LoordhuJeyakumar/password-reset-fe",
    liveLink: "https://password-reset-flow-nodejs.netlify.app/",
    image: passwordReset,
  },
  {
    id: 6,
    title: "The Meal and recipe finder",
    description:
      "The Meal and Recipe Finder Website is an online platform that helps users discover delicious meals and cooking inspiration. It provides a vast collection of recipes, categorized by cuisine, dietary preferences, and ingredients. Users can search for specific dishes, explore step-by-step instructions, and even save their favorite recipes. Whether you’re a seasoned chef or a beginner in the kitchen, this website offers a delightful culinary journey. 🍽️👩‍🍳🌟",
    technologies: [
      { name: "HTML", icon: HTMLIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "JSON" },
      { name: "RESTApi" },
      { name: "CSS", icon: cssIcon },
    ],
    githubLink:
      "https://github.com/LoordhuJeyakumar/Tasks/tree/main/Day_19/Meal_Finder",
    liveLink: "https://the-meal-finder-101.netlify.app/",
    image: mealFinder,
  },
  {
    id: 7,
    title: "QR Code Generator",
    description:
      "The Custom QR Code Generator is an online tool that allows users to create personalized QR codes. Users can input any text, URL, or contact information, and the website generates a unique QR code. These QR codes can be used for various purposes, such as sharing website links, adding contact details to business cards, or promoting events. Users can customize the QR code’s colors, add logos, and download the final design. It’s a convenient way to make information easily scannable using smartphones and other QR code readers. 📲🔍🌐",
    technologies: [
      { name: "HTML", icon: HTMLIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "JSON" },
      { name: "RESTApi" },
      { name: "CSS", icon: cssIcon },
    ],
    githubLink: "https://qr-code-generator-online.netlify.app/",
    liveLink: "https://qr-code-generator-online.netlify.app/",
    image: qrCodeWebsite,
  },
  {
    id: 8, // Update ID accordingly
    title: "Contact Management System",
    description:
      "The Contact Management System is a user-friendly web application designed to help individuals and organizations effectively manage contact details. The system allows users to create, edit, and delete contact information, offering seamless organization and easy access to critical data.",
    technologies: [
      { name: "React", icon: reactIcon },
      { name: "Redux", icon: reduxIcon },
      { name: "React Router Dom", icon: reactRouterIcon },
      { name: "Tailwind CSS" },
      { name: "NodeJS", icon: nodeJsIcon },
      { name: "ExpressJS", icon: expressJSIcon },
      { name: "MongoDB", icon: mongoDB },
      { name: "JWT" },
    ],
    githubLink: "https://github.com/LoordhuJeyakumar/Contact-Manager-frontend",
    liveLink: "https://contact-management-syst.netlify.app/",
    image: contactManagerImg, // Add the corresponding image to your assets
  },
  {
    id: 9, // Update ID accordingly
    title: "Book Sales and Blog",
    description:
      "The Book Sales and Blog platform is a versatile application that combines e-commerce features with a blogging system. Users can explore and purchase books while also engaging with insightful blog content about various genres, authors, and book reviews.",
    technologies: [
      { name: "React", icon: reactIcon },
      { name: "Redux", icon: reduxIcon },
      { name: "React Router Dom", icon: reactRouterIcon },
      { name: "Tailwind CSS" },
      { name: "NodeJS", icon: nodeJsIcon },
      { name: "ExpressJS", icon: expressJSIcon },
      { name: "MongoDB", icon: mongoDB },
      { name: "JWT" },
    ],
    githubLink: "https://github.com/LoordhuJeyakumar/books-sales-blog-fe",
    liveLink: "https://books-sales-blog-fe.vercel.app/",
    image: bookSalesBlogImg, // Add the corresponding image to your assets
  },
  {
    id: 10,
    title: "Jira Daily Report Automation",
    description:
      "The Jira Daily Report Automation project streamlines the reporting process by automatically fetching Jira project data and delivering organized email summaries to stakeholders. It integrates with the Jira REST API, processes data by sprints, epics, and tasks, and utilizes GitHub Actions for automated scheduling and execution.",
    technologies: [
      { name: "NodeJS", icon: nodeJsIcon },
      { name: "ExpressJS", icon: expressJSIcon },
      { name: "GitHub Actions", icon: gitIcon },
      { name: "Jira REST API" },
      { name: "Nodemailer" },
      { name: "VS Code", icon: vsCodeIcon },
    ],
    githubLink: "https://github.com/LoordhuJeyakumar/jira-daily-report-civiq",
    liveLink: null, // Replace with a live demo link if available
    image: null, // Replace with an appropriate image/icon for this project
  },
  {
    id: 9,
    title: "DemocracyHub",
    description:
      "DemocracyHub is a platform designed to engage citizens with political processes by providing accessible information on representatives, elections, and civic participation. It empowers users to stay informed about ongoing policies, local governance, and public opinions, fostering active community involvement.",
    technologies: [
      { name: "React", icon: reactIcon },
      { name: "NodeJS", icon: nodeJsIcon },
      { name: "ExpressJS", icon: expressJSIcon },
      { name: "MongoDB", icon: mongoDB },
      { name: "Redux", icon: reduxIcon },
      { name: "React Router Dom", icon: reactRouterIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "Postman", icon: postManIcon },
      { name: "Git", icon: gitIcon },
      { name: "VS Code", icon: vsCodeIcon },
    ],
    githubLink: "https://github.com/LoordhuJeyakumar/democracyhub-fe",
    liveLink: "https://democracyhub.netlify.app/",
    image: democracyHub, // Replace with a suitable image for the project
  },
];

export default projeectsData;
