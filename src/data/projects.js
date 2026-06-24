import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.webp";
import image3 from "../assets/images/image3.webp";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    image: image1,

    description:
      "My personal portfolio website built with React.",

    role: "Frontend Developer",

    duration: "2 Weeks",

    status: "In Progress",

    progress: 80,


    challenges:
      "Building reusable React components, theme switching and animations.",

    link:
      "https://github.com/BasiraMehrzad24/BasiraMehrzadPortfolio.git",

    techStack: [
      "React",
      "CSS",
      "JavaScript",
    ],

    problem:
  "I needed a professional online presence to showcase my skills and projects.",

solution:
  "Built a responsive portfolio using React, React Router, and Context API.",

outcome:
  "Created a professional portfolio that highlights my projects, skills, and developer journey.",
  },

  {
    id: 2,
    name: "Project Management (TimeSheet)",
    image: image2,

    description:
      "A project management application for company employees.",

    role: "Frontend Developer",

    duration: "3 Months",

    status: "Completed",

    progress: 100,


    challenges:
      "Working with large forms, dashboards and complex business requirements.",

    link:
      "https://github.com/BasiraMehrzad24/Time_Sheet.git",

    techStack: [
      "Tailwindcss",
      "Laravel",
      "PHP",
    ],

    problem:
  "Managing employee timesheets manually was time-consuming.",

solution:
  "Developed a dashboard to organize and track employee work hours.",

outcome:
  "Improved workflow organization and simplified reporting processes.",
  },

  {
    id: 3,
    name: "AOU University Webpage",
    image: image3,

    description:
      "A university website designed for Afghanistan Open University.",

    role: "Frontend Developer",

    duration: "1 Week",

    status: "Completed",

    progress: 60,


    challenges:
      "Creating a responsive educational website and organizing content structure.",

    link:
      "https://github.com/BasiraMehrzad24/AfghanistanOpenUniversity.git",

    techStack: [
      "HTML",
      "CSS",
      "UI/UX"
    ],

    problem:
  "The university needed a modern and responsive online presence.",

    solution:
    "Built a structured educational website with responsive layouts.",

   outcome:
  "Provided an accessible platform for students and visitors.",
  },
];

export default projects;