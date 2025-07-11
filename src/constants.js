// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import mysteryImg from "../assets/work_logo/mystery message .jpg";
import jobPortalImg from "../assets/work_logo/job-portal-1.jpg";
import uiuxImg from "../assets/work_logo/UI-UX.jpg";


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
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
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];
  
  export const projects = [
  {
    id: 0,
    title: "Mystery-Threads",
    description:
      "An anonymous message-sharing platform with a stylish UI and secure backend. Users can share and receive messages without revealing their identity. Built with Next.js and MongoDB.",
    image: mysteryImg, // ✅ imported image
    tags: ["React.js", "Node.js", "MongoDB", "Express", "Next.js", "HTML", "CSS", "TypeScript"],
    github: "https://github.com/vishesh413/Mystery-threads.git",
    webapp: "https://mystery-threads.vercel.app/",
  },
  {
    id: 1,
    title: "Job Portal",
    description:
      "A complete MERN stack job portal where users can search and apply for jobs, and recruiters can post new job openings. Includes authentication and role-based dashboard.",
    image: jobPortalImg, // ✅
    tags: ["HTML", "tailwind CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/vishesh413/JobPortal.git",
    webapp: "https://jobportal-1-ahac.onrender.com",
  },
  {
    id: 2,
    title: "UI-UX Project",
    description:
      "A creative UI/UX design portfolio highlighting modern web design and animation techniques. Developed using Next.js, Tailwind CSS, and Framer Motion for smooth transitions.",
    image: uiuxImg, // ✅
    tags: ["HTML", "tailwind CSS", "TypeScript", "Next.js"],
    github: "https://github.com/vishesh413/ui-ux-project.git",
    webapp: "https://ui-ux-project-olive.vercel.app/",
  },
];
