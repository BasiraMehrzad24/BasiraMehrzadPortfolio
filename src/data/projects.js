import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";



const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    image: image1,
    description: "My personal portfolio website.",
    link: "https://github.com/BasiraMehrzad24/BasiraMehrzadPortfolio.git",
    techStack: ["React", "CSS", "JavaScript"],
    featured: true,
  },

{
  id: 2,
  name: "Project Management(TimeSHeet)",
  image: image2,
  description:
    "A project management app for companies (was defense project).",
  link: "https://github.com/BasiraMehrzad24/Time_Sheet.git",
  techStack: ["Tailwindcss", "Laravel", "PHP"],
  featured: false,
},


{
  id: 3,
  name: "AOU University webpage",
  image: image3,
  description:
    "A project that i have designed for AOU university",
  link: "https://github.com/BasiraMehrzad24/AfghanistanOpenUniversity.git",
  techStack: ["HTML", "CSS"],
  featured: false,
},





];

export default projects;