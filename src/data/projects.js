import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";

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

    challenges:
      "Building reusable React components, theme switching and animations.",

    link:
      "https://github.com/BasiraMehrzad24/BasiraMehrzadPortfolio.git",

    techStack: [
      "React",
      "CSS",
      "JavaScript",
    ],

    featured: true,
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

    challenges:
      "Working with large forms, dashboards and complex business requirements.",

    link:
      "https://github.com/BasiraMehrzad24/Time_Sheet.git",

    techStack: [
      "Tailwindcss",
      "Laravel",
      "PHP",
    ],

    featured: false,
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

    challenges:
      "Creating a responsive educational website and organizing content structure.",

    link:
      "https://github.com/BasiraMehrzad24/AfghanistanOpenUniversity.git",

    techStack: [
      "HTML",
      "CSS",
      "UI/UX"
    ],

    featured: false,
  },
];

export default projects;