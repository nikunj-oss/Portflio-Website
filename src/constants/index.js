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
  courses,
  musicplayer,
  cleverbook,
  stakesmen,
  synq,
  calender
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
  {
    title: "Full Stack Developer Intern",
    company_name: "Stakesmen.com",
    icon: stakesmen,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Aug 2024",
    points: [
      "Developed an educational platform for Android and web with session hosting and a buddy system. Managed frontend and backend tasks, including building 10+ APIs, testing, and database management.",
      "Contributed to a live edtech and fintech project using HTML, CSS, React, Next.js, Mongoose, and Node.js.",
      "Improved project performance by 30% and learning a lot about startups and corporate workstyle.",
      "Received letter of recommendation from the company for outstanding performance as Full Stack Developer Intern"
    ],
  },
 
];

const testimonials = [
  {
    testimonial:skills,
    name: "Login/SignUp",
    live_link:" ",
    info:"It is a UI design for a login/signup page",


  },
  {
    testimonial:courses,
    name: "Course Picker",
    live_link:" ",
    info:"It is a UI design for various courses you can sort from tag",
  },
  {
    testimonial:tourism,
    name: "Tourism",
    live_link:" ",
    info:"It is a UI design for various tourism packages along with info and pricing",
  },
  {
    testimonial:testimonial,
    name: "Testimonial Slider",
    live_link:" ",
    info:"It is a UI design for testimonials of various people",
  },
  {
    testimonial:cleverbook,
    name: "CleverBooks",
    live_link:"https://cleverbookassignment.netlify.app/",
    info:"It is a UI design for copy of website",
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
  },{
    name: "Gen-Sop MusicPlayer",
    description:
      "Used Reactjs,TailWind,Redux and Spotify developer API for making a eye catchy music player that shows song from your profile and provide play pause functionality without ads",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      
    ],
    image: musicplayer,
    source_code_link: "https://github.com/nikunj-oss/gensop_music",
    live_link:"https://gensopmusic.netlify.app/",
  },
  {
    name: "Synq",
    description:
      "Implemented user registration and real-time messaging with over 100 active users and support for attachments",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Node.Js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      
    ],
    image: synq,
    source_code_link: "https://github.com/nikunj-oss/chatapp-server",
    live_link:"https://synq-us.vercel.app/",
  },
  {
    name: "Calender",
    description:
      "Implemented user event tracking app to track event set reminder and show them on a beautful calender UI",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Node.Js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      
    ],
    image: calender,
    source_code_link: "https://github.com/nikunj-oss/calender-client",
    live_link:"https://calender-client-rho.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
