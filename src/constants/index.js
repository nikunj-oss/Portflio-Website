import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  Bootstrap,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  sql,
  git,
  figma,
  cpp,
  prodigy,
  bvcoe,
  holistic,
  threejs,
  gdsc,
  // pythonython,
  python,
  tictactoe,
  weather,
  face,
  semantic,
  stopwatch,
  todolist,
  skills,
  tourism,
  testimonial,
  courses
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "C/C++ Developer",
    icon: backend,
  },
  {
    title: "Cyber Security",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "C++",
    icon: cpp,
  },
  
  // {
  //   name: "Python",
  //   icon: python,
  // },
];

const experiences = [
  {
    title: "AI/ML/DL Training",
    company_name: "Bharati Vidyapeeth College of Engineering",
    icon: bvcoe,
    iconBg: "#383E56",
    date: "Jul 2023 - Aug 2023 ",
    points: [
      "Developed Face Recognition Attendance System with Tenserflow and OpenCV as an AI/ML Developer",
      "Collaborating with cross-functional teams including designers, testers and other developers to create products.",
      " Drove AI and ML growth using Python and various frameworks.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Learned about various new softwares like anaconda,pycharm etc.",

    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Prodigy Infotech ",
    icon: prodigy,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Received letter of recommendation from the company for outstanding performance as Web Developer Intern"
    ],
  },
  {
    title: "Web Development Tech Team Member",
    company_name: "Google Developer Student Club",
    icon: gdsc,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Contributed in organizing of various tech events and programs",
      "Collaborating with cross-functional teams including designers, product managers, and other developers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "succesfully organized a 24hr hackathon for the college named CodeClash"
    ],
  },
 
];

const testimonials = [
  {
    testimonial:skills,
    name: "Login/SignUp",
    live_link:" ",

  },
  {
    testimonial:courses,
    name: "Course Picker",
    live_link:" ",
  },
  {
    testimonial:tourism,
    name: "Tourism",
    live_link:" ",
  },
  {
    testimonial:testimonial,
    name: "Testimonial Slider",
    live_link:" ",
  },

  
];

const projects = [
  {
    name: "Holistic Aura",
    description:
      "Created a user-friendly platform to address stress and anxiety and its solutions,it also highlights the platform's impact on teenage mental health.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "Sockets &API's",
        color: "green-text-gradient",
      },
    ],
    image: holistic,
    source_code_link: "https://github.com/nikunj-oss/HolisticAura",
    live_link:"https://nikunj-oss.github.io/HolisticAura/",
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "Craft an interactive web app for tic-tac-toe, offering multiplayer battles and solo matches against the computer. With a responsive design, an immersive gaming experience",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tictactoe,
    source_code_link: "https://github.com/nikunj-oss/tic-tac-toe",
    live_link: "https://nikunj-oss.github.io/tic-tac-toe/",
  },
  {
    name: "Weather App",
    description:
      "A comprehensive platform that allows users to check weathers based on current location or on a location of there choice that too with a 5-Day forcast.",
    tags: [
      {
        name: "HTMl",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "blue-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/nikunj-oss/Weather-App",
    live_link:"https://nikunj-oss.github.io/Weather-App/",
  },
  {
    name: "Semantic Segmentation",
    description:
      "A AI model well trained to diffrentiate between the cells and nuclie from the background with a accuracy score of 94% based on UNET",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "UNET",
        color: "green-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "pink-text-gradient",
      },
    ],
    image: semantic,
    source_code_link: "https://github.com/nikunj-oss/Semantic-Segmentation",
  },
  {
    name: "Face Recognition ",
    description:
      "A AI model trained to recognize facial features and mark attendence in an excel sheet on the basis of recognition, it's super accurate along with timestamp.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },
    ],
    image: face,
    source_code_link: "https://github.com/nikunj-oss/FaceRecognition",
  },
  {
    name: "Stop Watch",
    description:
      "Enjoy precise timing with our sleek stopwatch feature. Start, stop, lap, and reset functions make tracking time a breeze, all within a beautiful UI.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      
    ],
    image: stopwatch,
    source_code_link: "https://github.com/nikunj-oss/StopWatch",
    live_link:"https://nikunj-oss.github.io/StopWatch/",
  },
  {
    name: "To-Do list",
    description:
      "A comprehensive platform for writing day-to-day task and marking them upon completion with a inbuilt memory support to retain task even after closing browser",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      
    ],
    image: todolist,
    source_code_link: "https://github.com/nikunj-oss/todolist",
    live_link:"https://nikunj-oss.github.io/todolist/",
  },
];

export { services, technologies, experiences, testimonials, projects };
