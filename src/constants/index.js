import {
  frontend,
  backend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  BooksStudio,
  certificate,
  AI2048,
  weather,
  visionverse,
  django,
  flutter,
  Angular,
  mongodb,
  tensorflow,
  analytics,
  machinel,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Data Analytics',
    icon: analytics,
  },
  {
    title: 'Machine Learning',
    icon: machinel,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Django',
    icon: django,
  },
  {
    name: 'Flutter',
    icon: flutter,
  },
  {
    name: 'Angular',
    icon: Angular,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'mongodb',
    icon: mongodb,
  },
  {
    name: 'tensorflow',
    icon: tensorflow,
  },
];

const experiences = [
  {
    title: 'IBM Data Analyst Professional Certificate',
    company_name: 'IBM',
    icon: certificate,
    iconBg: '#333333',
    date: 'Oct 2023 - Feb 2024',
    link: "https://coursera.org/share/206a7af99ab49a14df96fb1edcf6fd13"
  },
  {
    title: 'Machine Learning Specialization',
    company_name: 'Standford University',
    icon: certificate,
    iconBg: '#333333',
    date: 'Oct 2023 - Dec 2023',
    link: "https://coursera.org/share/385d8dc61c14889e3bf750a63a107db3"
  },
  {
    title: 'The Structured Query Language (SQL)',
    company_name: 'University of Colorado Boulder',
    icon: certificate,
    iconBg: '#333333',
    date: 'March 2023',
    link: "https://coursera.org/share/4cffe302799924b381de978b2b903f91"
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Books Studio',
    description: 'A Web application to listen music along with reading books.',
    tags: [
      {
        name: 'Vanilla HTML-CSS-JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Django',
        color: 'green-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: BooksStudio,
    repo: 'https://github.com/ZainUlAbdein/SE_CEP',
    demo: 'https://abedin.pythonanywhere.com/home/',
  },
  {
    id: 'project-2',
    name: 'AI Based 2048',
    description:
      'An AI based 2048 tile game that can played by user and AI also.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'tkinker',
        color: 'green-text-gradient',
      },
      {
        name: 'GUI',
        color: 'pink-text-gradient',
      },
    ],
    image: AI2048,
    repo: 'https://github.com/ZainUlAbdein/Python/tree/d7124cc75ed1892a5812b0e83aa844e47652a71d/Modified%20AI%20CEP%20FOLDER',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'Weather Predictor',
    description: 'Machine Learning based weather Prediction App build with React JS',
    tags: [
      {
        name: 'Reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Python',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: weather,
    repo: 'https://github.com/ZainUlAbdein/React-JS/tree/a14a241c153ba56cd28d4b22946c43372bdae1c2/weatherPredictor-main/weatherPredictor-main',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'Vision Verse',
    description: 'An image captioning app using Deep learning Model for Image captured from ESP32 cam.',
    tags: [
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
      {
        name: 'Dart',
        color: 'green-text-gradient',
      },
      {
        name: 'Python',
        color: 'pink-text-gradient',
      },
    ],
    image: visionverse,
    repo: 'https://github.com/ZainUlAbdein/Flutter.git',
    demo: '',
  },
];

const social = [
  {
    name: 'github',
    link: 'https://github.com/ZainUlAbdein',
  },

  {
    name: 'gmail',
    link: 'mailto:zainulabedin121zain@gmail.com'
  },

  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/zain-ulabedin'
  }

];

export { services, technologies, experiences, projects, social };
